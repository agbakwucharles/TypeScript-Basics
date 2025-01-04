// Utility Types in TypeScript

interface Person {
    name: string;
    age: number;
    address: string;
}

type PartialPerson = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;

let person: PartialPerson = { name: "John" };
let readonlyPerson: ReadonlyPerson = { name: "John", age: 30, address: "123 Main St" };

// readonlyPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.