import DataGrid from "./DataGrid";

export interface User {
  id: string;
  name: string;
  age: number;
}

export interface Order {
  id: string;
  client: string;
  quantity: number;
}

function Users() {
  const users: User[] = [
    { id: crypto.randomUUID(), name: "John", age: 32 },
    { id: crypto.randomUUID(), name: "Laura", age: 19 },
    { id: crypto.randomUUID(), name: "Mitch", age: 43 },
  ];

  const orders: Order[] = [
    { id: crypto.randomUUID(), client: "John", quantity: 32 },
    { id: crypto.randomUUID(), client: "Laura", quantity: 19 },
    { id: crypto.randomUUID(), client: "Mitch", quantity: 43 },
  ];

  return (
    <>
      <DataGrid items={users} />
      <br />
      <DataGrid items={orders} />
    </>
  );
}

export default Users;
