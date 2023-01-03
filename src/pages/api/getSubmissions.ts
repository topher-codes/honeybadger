import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const submissions = await prisma.submission.findMany();
  res.status(200).json(submissions);
}
