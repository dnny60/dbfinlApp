import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../../public/images/image.jpg";
import { BsCarFront, BsFillPersonFill } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  height: 2000px;
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
    background-image: url("${image}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.8; // Change this value to adjust the opacity
    z-index: -1;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CarButton = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#e7ac71" : "#731b0b")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "white")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#e7ac71")};
  }
`;

export const CarH1 = styled.h1`
  color: #731b0b;
  font-size: 52px;
  text-align: top;
  text-shadow: 2px 2px white;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  #media screen and (max-width:480px) {
    font-size: 32px;
  }
`;

export const Personicon = styled(BsFillPersonFill)`
  font-size: 30px;
`;
export const Drivericon = styled(BsCarFront)`
  font-size: 30px;
`;

export const CarH2 = styled.h5`
  color: #731b0b;
  font-size: 30px;
  text-align: top;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  #media screen and (max-width:480px) {
    font-size: 32px;
  }
`;
export const CarGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
`;

export const TitleP = styled.p`
    margin-top: 24px;
    color: #cb6f12;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const Listcotainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 40px;
  color: white;
  margin-top: 10px;
  font-size: 0.8rem;
  width: 100%;
`;
export const Phone = styled.p`
  margin-bottom: 15px;
  color: black;
  font-size: 12px;
  text-align: center;
`;
export const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 20px 0;
`;

export const ClearButton = styled.button`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
`;

export const Swrapper = styled.div`
  margin-top: 4px;
  color: #cb6f12;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  display: flex;
  align-items: center;
`;
export const CarP = styled.p`
    // margin-top: 5px;
    margin-bottom:5px;
    color: black;
    font-size: 15px;
    text-align: left;
    max-width: 600px;
    justify-content: center;
    

    @media screen and (max-width: 768px){
        font-size 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;
export const CarH3 = styled.h3`
    // margin-top: 24px;
    margin-bottom: 15px;
    color: black;
    font-size: 24px;
    max-width: 400px;
   

    @media screen and (max-width: 768px){
        font-size 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const Header = styled.div`
  text-align: center;
  display: flex;
  align-items: right;
  justify-content: center; // Align items to the start of the main axis
  gap: 10px;
`;
export const Infowrapper = styled.div`
  align-items: right;
  justify-content: start; // Align items to the start of the main axis
  gap: 10px;
  font-size: 15px;
`;

export const Carform = styled.div`
  display: flex;
  flex-direction: column; // Align items in a column
  align-items: right; // Center items horizontally
  padding: 20px;
  border-radius: 10px; // Round the corners
  background-color: #f6e8ce; // Set the background color to white
  color: #000; // Set the text color to black
  margin-bottom: 20px; // Add some margin at the bottom
  max-width: 300px; // Maximum width
  width: 100%; // Full width (for small screens)

  // On larger screens...
  @media screen and (min-width: 600px) {
    width: calc(
      50% - 20px
    ); // Take half the screen width (minus some for margin)
  }
`;
