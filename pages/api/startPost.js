import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { PostID } = req.body;
  const parsedPostID = parseInt(PostID);

  try {
    // 查找与传入的 PostID 匹配的记录
    const post = await prisma.POST.findUnique({
      where: {
        PostID: parsedPostID,
      },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // 更新 StartingTime 为当前时间
    const updatedPost = await prisma.POST.update({
      where: {
        PostID: parsedPostID,
      },
      data: {
        StartingTime: new Date(),
      },
    });

    res
      .status(200)
      .json({ message: "Post started successfully", post: updatedPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to start post" });
  }
}
