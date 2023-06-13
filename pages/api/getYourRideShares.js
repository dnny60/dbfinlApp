import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { parm } = req.body;
  console.log(parm.user.id);
  try {
    const yourRideShares = await prisma.POST.findMany({
      include: {
        CARPOOLUSER: true,
      },
      where: {
        CreatorID: parm.user.id,
      },
    });
    console.log(yourRideShares);
    res.status(200).json({ yourRideShares });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
