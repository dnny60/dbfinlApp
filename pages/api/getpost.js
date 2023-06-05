import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { param } = req.body;

  try {
    const post = await prisma.POST.findFirst({
      where: {
        PostID: param,
      },
    });

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: "發生錯誤", error: error.message });
  }
}
