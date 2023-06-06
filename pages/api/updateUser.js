import prisma from "../../lib/prisma";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  let { id, email, name, password, phone, carModel, licensePlate } = req.body;
  try {
    const update = await prisma.CARPOOLUSER.update({
      where: {
        CarpoolUserID: id,
      },
      data: {
        Name: name,
        Email: email,
        Password: password,
        PhoneNumber: phone,
        CarModel: carModel,
        CarPlateNum: licensePlate,
      },
    });
    console.log(update);

    console.log({ message: "update User", update: update });
    return res.status(200).json({ update });
  } catch (error) {
    return res.status(500).json({ message: "發生錯誤", error: error.message });
  }
}
