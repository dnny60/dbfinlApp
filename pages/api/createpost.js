import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  let {
    CreatorID,
    EstimatedStartingTime,
    DrunkAllowed,
    EndingLocation,
    Gender,
    HugeLuggageAllowed,
    NumOfMax,
    PetAllowed,
    PostDescription,
    SmokingAllowed,
    StartingLocation,
    Role,
  } = req.body;

  if (DrunkAllowed == true) {
    DrunkAllowed = "Yes";
  } else {
    DrunkAllowed = "No";
  }

  if (SmokingAllowed == true) {
    SmokingAllowed = "Yes";
  } else {
    SmokingAllowed = "No";
  }

  if (PetAllowed == true) {
    PetAllowed = "Yes";
  } else {
    PetAllowed = "No";
  }

  if (HugeLuggageAllowed == true) {
    HugeLuggageAllowed = "Yes";
  } else {
    HugeLuggageAllowed = "No";
  }

  if (Gender == "1") {
    Gender = "Male";
  } else {
    Gender = "Female";
  }
  if (Role == "1") {
    Role = "Driver";
  } else {
    Role = "Passenger";
  }

  try {
    const newPost = await prisma.POST.create({
      data: {
        CreatorID: CreatorID,
        EstimatedStartingTime: EstimatedStartingTime,
        DrunkAllowed: DrunkAllowed,
        EndingLocation: EndingLocation,
        Gender: Gender,
        HugeLuggageAllowed: HugeLuggageAllowed,
        NumOfMax: NumOfMax,
        PetAllowed: PetAllowed,
        PostDescription: PostDescription,
        SmokingAllowed: SmokingAllowed,
        StartingLocation: StartingLocation,
      },
    });
    console.log(newPost);
    const newPostUser = await prisma.POST_USER.create({
      data: {
        PostID: newPost.PostID,
        CarpoolUserID: CreatorID,
        Role: Role,
      },
    });

    return res
      .status(200)
      .json({ message: "建立post", post: newPost, postUser: newPostUser });
  } catch (error) {
    return res.status(500).json({ message: "發生錯誤", error: error.message });
  }
}
