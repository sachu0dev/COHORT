import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

import { z } from "zod";
const router = express.Router();
const prisma = new PrismaClient();

const verifySignup = z.object({
  firstname: z.string().max(50),
  lastname: z.string().max(50),
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

const verifyUpdateUser = z.object({
  password: z.string().min(6).max(20).optional(),
  firstname: z.string().max(50).optional(),
  lastname: z.string().max(50).optional(),
});

router.post("/signup", async (req, res) => {
  const result = verifySignup.safeParse(req.body);
  if (result.success) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: result.data.email },
      });
      if (user) {
        res
          .status(400)
          .json({ error: "Email already taken / Username already taken" });
      } else {
        result.data.password = await bcrypt.hash(result.data.password, 10);
        const response = prisma.user.create({
          data: {
            ...result.data,
          },
          select: {
            id: true,
            email: true,
          },
        });

        const token = jwt.sign({ email: result.data.email }, "secret");
        res.json({
          firstname: result.data.firstname,
          message: "User created successfully",
          token: token,
        });
      }
    } catch (error) {
      res
        .status(411)
        .json({ error: "Email already taken / Username already taken" });
    }
  } else {
    res.status(400).send(result.error);
  }
});
export default router;