// getFeedback.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { parm } = req.body;
  console.log(parm.user.id);
  const userId = parm.user.id;

  try {
    // 根据CreatorID查找POST表中的数据
    const feedback = await prisma.POST.findMany({
      where: {
        CreatorID: userId,
        EndingTime: { not: null },
      },
      include: {
        FEEDBACK: true,
      },
    });
    const feedbackData = feedback.map((item) => ({
      PostID: item.PostID,
      Feedback: item.FEEDBACK.map((item) => item.Feedback),
      // Feedback: new Array(item.FEEDBACK[0].Feedback),
      // 如果需要其他字段，请在这里添加
    }));
    console.log(feedback[0]);
    console.log(feedbackData);

    res.json(feedbackData);
  } catch (error) {
    console.error("Error retrieving feedback:", error);
    // throw new Error("Failed to retrieve feedback");
  }
}
