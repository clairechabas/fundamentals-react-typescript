// import { User, Order } from "./Users";

// Using Generics Constraints allow us to define some
// properties we know each item is going to have.
interface Item {
  id: string;
}

interface DataGridProps<T> {
  // items: any[]; -- No
  // items: User[] | Order[]; -- A bit better but doesn't scale
  items: T[]; // Yes, use generics
}

function DataGrid<T extends Item>({ items }: DataGridProps<T>) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  );
}

export default DataGrid;
