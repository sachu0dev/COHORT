import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (
  username: string,
  password: string,
  firstname: string,
  lastname: string
) => {
  const result = await prisma.users.create({
    data: {
      username,
      password,
      firstname,
      lastname,
    },
  });
};

// insertUser("sushil1", "test", "sushil", "kumar");

const insertTodo = async (
  user_id: number,
  title: string,
  description: string
) => {
  const result = await prisma.todos.create({
    data: {
      title,
      description,
      user_id,
    },
  });
  console.log(result);
};

// insertTodo(1, "make mystudygroup", "before going to chandighar");

const getTodos = async (user_id: number) => {
  const result = await prisma.todos.findMany({
    where: {
      user_id,
    },
  });
  console.log(result);
};

getTodos(1);
