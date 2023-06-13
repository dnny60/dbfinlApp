import React, { useState } from "react";
import { Button } from "../ButtonElement";

import Gif3 from "../../../public/images/verified.gif";
import {
  FP,
  Fform,
  Container,
  HeaderWrapper,
  Buttonwrap,
  Fh1,
  FTextarea,
  FButton,
} from "./FeedbackElements";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Feedback = ({ parm, session }) => {
  const router = useRouter();

  const handleFeedback = async () => {
    console.log(parm.id);
    const feedbackData = {
      CarpoolUserID: session.user.id,
      PostID: parseInt(parm.id),
      feedback: textareaValue, // Get the value of the textarea
    };

    try {
      const response = await fetch("/api/createFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        // Feedback created successfully
        router.push("/thankyou");
      } else {
        // Handle error case
        console.error("Failed to create feedback");
      }
    } catch (error) {
      console.error("Error creating feedback:", error);
    }
  };

  const [textareaValue, setTextareaValue] = useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <>
      <Container>
        <Fform>
          <HeaderWrapper>
            <Image src={Gif3} alt="" />
            <div>
              <Fh1>共乘意見回饋</Fh1>
            </div>
          </HeaderWrapper>
          <FP>希望您對這次的體驗感到滿意!</FP>
          <FP>歡迎您在下方對這次的文字欄留下您的回饋~</FP>
          <FP>讓我們能夠繼續提升之後的服務品質!</FP>

          <FTextarea
            type="textarea"
            placeholder="您的回饋意見"
            value={textareaValue}
            onChange={handleTextareaChange}
          ></FTextarea>

          <Buttonwrap>
            <FButton type="submit" onClick={handleFeedback}>
              點我送出回饋意見
            </FButton>
          </Buttonwrap>
        </Fform>
      </Container>
    </>
  );
};

export default Feedback;
