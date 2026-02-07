function sum(a: number, b: number): number {
  return a + b;
}


function formatText(str: string, textFormat: "uppercase" | "lowercase" | "capitalize"): string {
  switch (textFormat) {
    case "uppercase":
      return str.toUpperCase();
    case "lowercase":
      return str.toLowerCase();
    case "capitalize":
      return str.charAt(0).toUpperCase() + str.slice(1);
    default:
      return str;
  }
}


function removeChar(str: string, char: string): string {
  return str.replace(char, "");
}


let uploadStatus: "loading" | "success" | "error";
let textFormat: "uppercase" | "lowercase" | "capitalize";


interface IUser {
  id: number;
  name: string;
  surname: string;
  email?: string;
  age: number;
}

interface IStudent {
  group: string;
  graduate: number;
}

let users: IUser[] = [
	{
		id: 1,
		name: "John",
		surname: "Stone",
		email: "johnstone@gmail.com",
		age: 25
	},
	{
		id: 2,
		name: "Steve",
		surname: "Silver",
		email: "s.steve@gmail.com",
		age: 28
	},
	{
		id: 3,
		name: "Jim",
		surname: "River",
		email: "jimriver@gmail.com",
		age: 24
	},
	{
		id: 4,
		name: "Dwane",
		surname: "Mountain",
		email: "m.dwane@gmail.com",
		age: 29
	},
	{
		id: 5,
		name: "Clark",
		surname: "Kent",
		email: "clarkkent@gmail.com",
		age: 23
	}
]

let usersOver25: IUser[] = users.filter((user: IUser) => user.age > 25);
