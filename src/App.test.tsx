import { render, screen } from "@testing-library/react";
import App from "./App";

const setup = ({ heading = "Coucou" } = {}) => {
  const props = {
    heading,
  };

  const view = render(<App {...props} />);

  return {
    ...view,
    props,
  };
};

test("renders a heading", () => {
  const { props } = setup();

  expect(screen.getByText(props.heading)).toBeInTheDocument();
});
