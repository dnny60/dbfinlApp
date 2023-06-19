import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src="/videos/video2.mp4"
          type="video/mp4"
          placeholder="VIDEO"
        ></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Carry You</HeroH1>
        <HeroH1>政大共乘系統</HeroH1>

        <HeroP>晚上想吃海底撈，卻找不到人一起共乘回家嗎？</HeroP>
        <HeroP>沒問題，政大共乘系統為您服務！</HeroP>
        <HeroP>馬上註册一個賬戶吧！</HeroP>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            onClick={() => router.push("/signup")}
          >
            Get started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
