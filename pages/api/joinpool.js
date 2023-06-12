import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id, postId, joinrole } = req.body;

  try {
    const newUser = await prisma.POST_USER.create({
      data: {
        PostID: postId,
        CarpoolUserID: id,
        Role: joinrole,
      },
    });

    const addJoined = await prisma.POST.update({
      where: {
        PostID: postId,
      },
      data: {
        NumOfJoined: {
          increment: 1,
        },
      },
    });

    return res.status(200).json({ message: "join成功", addJoined });
  } catch (error) {
    return res.status(500).json({ message: "發生錯誤", error: error.message });
  }
}
