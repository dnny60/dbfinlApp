import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { id } = req.body;

      const post = await prisma.POST.findUnique({
        where: {
          PostID: id,
        },
        select: {
          StartingTime: true,
        },
      });

      if (post) {
        res.status(200).json({ StartingTime: post.StartingTime });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}
