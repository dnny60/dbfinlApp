import prisma from "../../lib/prisma";

const deletePostUser = async (req, res) => {
  const { userId, postId } = req.body;
  console.log(userId, postId);

  try {
    await prisma.$transaction([
      prisma.POST_USER.deleteMany({
        where: {
          CarpoolUserID: parseInt(userId),
          PostID: parseInt(postId),
        },
      }),
      prisma.POST.update({
        where: {
          PostID: parseInt(postId),
        },
        data: {
          NumOfJoined: {
            decrement: 1,
          },
        },
      }),
    ]);

    res.status(200).json({ message: "删除成功" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "删除失敗" });
  }
};

export default deletePostUser;
