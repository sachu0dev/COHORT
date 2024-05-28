import { Hono } from "hono";

const app = new Hono();

const authMiddleware = async (c: any, next: any) => {
  if (c.req.header("Authorization") == "123") {
    await next();
  } else {
    return c.text("Unauthorized");
  }
};

app.get("/", authMiddleware, async (c) => {
  const body = await c.req.json();
  const param = await c.req.query("c");
  console.log(body);

  return c.json({ body, param });
});

export default app;
