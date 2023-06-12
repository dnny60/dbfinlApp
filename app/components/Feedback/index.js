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
//import axios from 'axios'; // assume you are using axios
import { useRouter } from "next/navigation";

// import useUser from '...' // import your hook for user information

const Feedback = () => {
  const router = useRouter();
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

          <FTextarea type="TextArea" placeholder=" 您的回饋意見"></FTextarea>

          <Buttonwrap>
            <FButton type="submit" onClick={() => router.push("/thankyou")}>
              點我送出回饋意見
            </FButton>
          </Buttonwrap>
        </Fform>
      </Container>
    </>
  );
};

export default Feedback;
