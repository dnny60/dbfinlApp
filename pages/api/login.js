import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { email, password } = req.body;

  try {
    const user = await prisma.CARPOOLUSER.findFirst({
      where: {
        Email: email,
      },
    });

    if (!user || user.Password !== password) {
      res
        .status(401)
        .json({ message: "Invalid email or password", email: { email } });
      return;
    }

    // res.status(200).json({ id: user.CarpoolUserID });
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
