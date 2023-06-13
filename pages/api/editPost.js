import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    var {
      PostID,
      Role,
      Name,
      PhoneNumber,
      StartingLocation,
      EndingLocation,
      EstimatedStartingTime,
      DrunkAllowed,
      SmokeAllowed,
      PetAllowed,
      BigLuggageAllowed,
      NumOfMax,
      PostDescription,
      CarpoolUserID,
    } = req.body;
    console.log(req.body);
    PostID = parseInt(PostID);
    CarpoolUserID = parseInt(CarpoolUserID);

    if (DrunkAllowed == true) {
      DrunkAllowed = "Yes";
    } else {
      DrunkAllowed = "No";
    }
    if (SmokeAllowed == true) {
      SmokeAllowed = "Yes";
    } else {
      SmokeAllowed = "No";
    }
    if (PetAllowed == true) {
      PetAllowed = "Yes";
    } else {
      PetAllowed = "No";
    }
    if (BigLuggageAllowed == true) {
      BigLuggageAllowed = "Yes";
    } else {
      BigLuggageAllowed = "No";
    }

    const updatedPost = await prisma.POST.update({
      where: { PostID: PostID },
      data: {
        StartingLocation: StartingLocation,
        EndingLocation: EndingLocation,
        EstimatedStartingTime: EstimatedStartingTime,
        DrunkAllowed: DrunkAllowed,
        SmokingAllowed: SmokeAllowed,
        HugeLuggageAllowed: BigLuggageAllowed,
        PetAllowed: PetAllowed,
        NumOfMax: NumOfMax,
        PostDescription: PostDescription,
      },
    });
    const updatedPostUser = await prisma.POST_USER.update({
      where: { PostID_CarpoolUserID: { PostID, CarpoolUserID } },
      data: {
        Role: Role,
      },
    });

    res.status(200).json(updatedPost, updatedPostUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update the post." });
  }
}
