import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstname: string,
  lastname: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstname,
      lastname,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
    },
  });
  console.log(res);
}

// insertUser("sushilkumar1@gmail.com", "sachu", "sushil", "kumar");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      firstname: firstName,
      lastname: lastName,
    },
  });
  console.log(res);
}

updateUser("sushilkumar1@gmail.com", {
  firstName: "sachu",
  lastName: "kashyap",
});
