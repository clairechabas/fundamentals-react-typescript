import { useContext, useState } from "react";
import { User } from "./context/interfaces";
import { InputValueContext } from "./context/InputValueContext";
export interface AppProps {
  heading: string;
  subHeading?: string;
}

const defaultFormData = {
  title: "",
  body: "",
};

function App({ heading, subHeading }: AppProps) {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;
  const { state, dispatch } = useContext(InputValueContext);

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData(defaultFormData);
  };

  const fetchUser = () =>
    setUser({
      name: "Claire",
      age: 34,
      address: {
        street: "Greville Rd",
        number: 20,
        zip: "NW6 5JA",
        country: "FR",
      },
      isAdmin: false,
    });

  return (
    <>
      <header>
        <h1>{heading}</h1>
        <h2>{subHeading || "I'm just a placeholder"}</h2>
      </header>

      <main>
        <section>
          <div>{user && <p>{`Welcome ${user.name}`}</p>}</div>
          <button onClick={fetchUser}>Fetch User</button>
        </section>

        <section>
          <h3>Form</h3>
          <p>Create a post</p>
          <form onSubmit={handleSubmitData}>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleChangeData}
            />

            <label htmlFor="body">Body</label>
            <br />
            <input
              type="text"
              name="body"
              id="body"
              value={body}
              onChange={handleChangeData}
            />

            <button type="submit">Upload Post</button>
          </form>
        </section>

        <section>
          <p>Value: {state.inputValue}</p>
          <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
            Set Value To 100
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
