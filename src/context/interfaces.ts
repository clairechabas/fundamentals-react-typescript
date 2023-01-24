export interface Address {
  street: string;
  number: number;
  zip: string;
  country: string;
}

export interface User {
  name: string;
  age: number;
  address: Address;
  isAdmin: boolean;
}
