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
        CARPOOLUSER: true,
        POST_USER: true,
      },
      where: {
        AND: filters,
      },
    });
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
