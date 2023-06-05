import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { filters } = req.body;
  console.log(filters);
  try {
    const user = await prisma.POST.findMany({
      include: {
        POST_USER: true,
      },
    });
    return res.status(200).json({ user });
    if (filters == "allAllowed") {
      const user = await prisma.POST.findMany({});
      return res.status(200).json({ user });
    } else if (filters == "drunkAllowed") {
      const user = await prisma.POST.findMany({
        where: {
          DrunkAllowed: "Yes",
        },
      });
      return res.status(200).json({ user });
    } else if (filters == "smokeAllowed") {
      const user = await prisma.POST.findMany({
        where: {
          SmokingAllowed: "Yes",
        },
      });
      return res.status(200).json({ user });
    } else if (filters == "petAllowed") {
      const user = await prisma.POST.findMany({
        where: {
          PetAllowed: "Yes",
        },
      });
      return res.status(200).json({ user });
    } else if (filters == "bigLuggageAllowed") {
      const user = await prisma.POST.findMany({
        where: {
          HugeLuggageAllowed: "Yes",
        },
      });
      return res.status(200).json({ user });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
