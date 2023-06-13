import prisma from "../../lib/prisma";

const createFeedback = async (req, res) => {
  try {
    const { CarpoolUserID, PostID, feedback } = req.body;
    console.log(req.body);

    const newFeedback = await prisma.FEEDBACK.create({
      data: {
        CarpoolUserID: CarpoolUserID,
        PostID: PostID,
        Feedback: feedback,
      },
    });

    res.status(200).json({
      message: "Feedback created successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    console.error("Error creating feedback:", error);
    res.status(500).json({ error: "Failed to create feedback" });
  }
};

module.exports = createFeedback;
