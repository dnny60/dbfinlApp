import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id } = req.body;
  console.log(id);

  try {
    const postUsers = await prisma.POST_USER.findMany({
      where: {
        PostID: id,
      },
      select: {
        CarpoolUserID: true,
        Role: true,
        CARPOOLUSER: {
          select: {
            Name: true,
            PhoneNumber: true,
          },
        },
        POST: {
          select: {
            CreatorID: true,
          },
        },
      },
    });

    const creatorIDs = postUsers.map((postUser) => postUser.POST.CreatorID);

    const filteredPostUsers = postUsers.filter((postUser) => {
      return !creatorIDs.includes(postUser.CarpoolUserID);
    });

    console.log(filteredPostUsers);
    return res.status(200).json(filteredPostUsers);
  } catch (error) {
    return res.status(500).json({ message: "發生錯誤", error: error.message });
  }
}
