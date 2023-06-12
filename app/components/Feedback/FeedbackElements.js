import styled from "styled-components";
import image from "../../../public/images/image.jpg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  // Pseudo-element for background image
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/images/image.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.8; // Change this value to adjust the opacity
    z-index: -1;
  }
`;
export const HeaderWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px; // Change this as needed
    height: 100px; // Change this as needed
    margin-right: 20px;
  }
`;

export const Buttonwrap = styled.div`
  display: flex;
  justify-content: center;

  gap: 5px;
  color: white;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 0.8rem;
`;

export const FTextarea = styled.textarea`
  flex: 2;
  width: 200px;
  border-radius: 7px;
  border: 1px solid #ccc;
  padding: o.6px;
  font-size: 0.6rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
  height: 200px;
`;

export const Fh1 = styled.h1`
  flex-shrink: 0;
  width: 100%;
  height: 48px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  position: relative;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter", "Inter Placeholder", sans-serif;
  font-size: 48px;
  line-height: 1.2;
  text-align: center;
  z-index: 3;
`;

export const FButton = styled.div`
  background: #1e81b0;
  padding: 16px 15px;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  white-space: nowrap;
  text-decoration: none;
  margin: auto;
  max-width: auto;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    border: 2px solid #1e81b0;
  }
`;

export const FP = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
  height: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  position: relative;
  opacity: 0.6;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter", sans-serif;
  color: #000000;
  font-size: 17px;
  letter-spacing: -0.7px;
  line-height: 1.5;
  text-align: center;
`;

export const Fform = styled.form`
  margin-top: 40px;
  width: 40%;
  border-radius: 5%;
  height: 400px; /* 328px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 8;
  background: white;
  opacity: 90%;

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;
