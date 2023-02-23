import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/db";
import { helloSchema } from "../../types/hello";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { hello } = helloSchema.parse(req.body);
    const result = await prisma.hello.create({ data: { hello } });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
}
