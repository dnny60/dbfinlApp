import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id } = req.body;

  try {
    const detail = await prisma.POST.update({
      where: {
        PostID: id,
      },
    });

    return res.status(200).json({ message: "detail", detail });
  } catch (error) {
    return res.status(500).json({ message: "發生錯誤", error: error.message });
  }
}
