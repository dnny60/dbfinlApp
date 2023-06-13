import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { rideshareId } = req.body;
  const PostID = parseInt(rideshareId);

  try {
    // 删除与 POST_USER 表格中的 PostID 匹配的所有相关数据
    await prisma.POST_USER.deleteMany({
      where: { PostID: PostID },
    });

    // 删除与 POST 表格中的 PostID 匹配的记录
    await prisma.POST.delete({
      where: { PostID: PostID },
    });

    res
      .status(200)
      .json({ message: "Post and related data deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete post and related data" });
  }
}
