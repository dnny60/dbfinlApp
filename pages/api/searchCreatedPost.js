import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { parm } = req.body;
  console.log(parm.user.id);
  try {
    const post = await prisma.POST.findMany({
      include: {
        CARPOOLUSER: true,
        POST_USER: true,
      },
      where: {
        CreatorID: parm.user.id,
      },
    });
    console.log(post);
    return res.status(200).json(post);
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// const fetchCreatedPost = () => {
//     return fetch("/api/searchCreatedPost", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({ parm }),
//     }).then((response) => response.json()).then((data) => {
//       return {
//         PostID:PostID,

//       }
//     })
//   }
