import { prisma } from "../../server/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await prisma.user.findUnique({
    where: {
      id: "clcgi40f70000pydgw2pa4eve",
    },
  });
  res.status(200).json(user);
}
