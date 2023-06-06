import styled from "styled-components";
import image from "../../../public/images/image.jpg";
import { Link } from "react-router-dom";
// background-image: url("${image}");

export const Container = styled.div`
  display: grid;
  justify-content: top;
  grid-template-columns: 1fr 1fr;
  padding: 0 30px;
  height: 1000px;
  position: relative;
  align-items: start;
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
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px; // Change this as needed
    height: 100px; // Change this as needed
    margin-right: 20px;
  }

  h1 {
    color: #333;
    font-size: 24px;
  }
`;

export const CFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
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
export const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 20px 0;
`;

export const Infowrapper = styled.div`
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  justify-content: center; // Align items to the start of the main axis
  margin-top: 20px;
  gap: 8px;
  font-size: 24px;
  height: auto;
  width: 500px;
  padding: 10px 10px;
  display: grid;
  justify-content: top;
  grid-template-columns: 2fr 1fr;
  align-items: start;
`;

export const Text = styled.p`
  color: white;
  font-size: 2rem;
  margin: 30px 40px 30px 40px;
  text-align: center;
`;

export const CLabel = styled.label`
  font-size: 0.8rem;
  color: white;
  margin-bottom: 10px;
  display: flex;
  align-items: center; // Vertically center label with input
  gap: 10px; // Optional: Add some space between label and input
  flex: 1;
  padding-right: 10px;
  white-space: nowrap;
  text-align: right;
`;

export const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

export const CInput = styled.input`
  flex: 2;
  padding: 10px;
  font-size: 0.6rem;
  border-radius: 7px;
  border: 1px solid #ccc;
`;

export const CTextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
  height: 100px;
`;

export const CButton = styled.div`
  background: #1e81b0;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  max-width: 80px;
  margin: 10px 19px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const CarH3 = styled.h3``;

export const FP = styled.p`
  margin-bottom: 7px;
  display: flex;
  font-size: 18px;
`;

export const Carform = styled.form`
  background: hsla(0, 100%, 10%, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  height: auto;
  width: 670px;
  z-index: 1;
  margin: 0 auto;
  padding: 60px 40px;
  border-radius: 11px;
  margin-top: 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  h1 {
    color: white;
    font-size: 28px;
  }
`;

export const Member = styled.div``;
