import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { parm } = req.body;
  console.log(parm.user.id);

  try {
    const postUsers = await prisma.POST_USER.findMany({
      where: {
        CarpoolUserID: parm.user.id,
      },
      include: {
        POST: {
          include: {
            CARPOOLUSER: {
              select: {
                Name: true,
              },
            },
          },
        },
      },
    });

    console.log(postUsers);

    res.status(200).json({ postUsers }); // 发送响应
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ message: "Internal server error" }); // 发送错误响应
  } finally {
    await prisma.$disconnect();
  }
}
