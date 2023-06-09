import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id } = req.body;
  console.log(id);

  try {
    const post = await prisma.POST.findFirst({
      where: {
        PostID: id,
      },
      select: {
        EstimatedStartingTime: true,
        StartingLocation: true,
        EndingLocation: true,
        NumOfMax: true,
        NumOfJoined: true,
        SmokingAllowed: true,
        HugeLuggageAllowed: true,
        PetAllowed: true,
        DrunkAllowed: true,
        PostDescription: true,
        CARPOOLUSER: {
          select: {
            CarpoolUserID: true,
            Name: true,
            PhoneNumber: true,
          },
        },
        POST_USER: {
          select: {
            Role: true,
          },
        },
      },
    });

    console.log(post);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: "發生錯誤", error: error.message });
  }
}
