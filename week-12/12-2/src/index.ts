// interface User {
//   id: string;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type UpdateProps = Pick<User, "name" | "age" | "email">;

// type UpdatePropsOptional = Partial<UpdateProps>

// const updateUser = (updatedProps: UpdateProps){
//   //
// }

// type UserInfo = {
//   readonly name: string; // this cant be changed only be read
//   age: number;
// };

type Users = Record<
  string,
  { age: number; name: string; email: string; password: string }
>;

const users = new Map();
users.set("ras@q1", { name: "sushil", age: 20, email: "jsdfjk" });
