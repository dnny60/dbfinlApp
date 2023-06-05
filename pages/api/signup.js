import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, password, phoneNumber } = req.body;

  try {
    const newUser = await prisma.CARPOOLUSER.create({
      data: {
        Name: name,
        Email: email,
        Password: password,
        PhoneNumber: phoneNumber,
      },
    });

    return res.status(200).json({ message: "註冊成功", user: newUser });
  } catch (error) {
    return res.status(500).json({ message: "發生錯誤", error: error.message });
  }
}
