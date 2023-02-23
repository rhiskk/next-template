import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../config/db";

type Data = {
  hello: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ hello: "H" });
}
