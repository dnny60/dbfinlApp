import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container =styled.div`

    z-index: 1;
    position: absolute;
    height: auto;
    width:100vw;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content:top;
    background:  radial-gradient(circle, rgba(219,142,123,1) 0%, rgba(255,182,90,1) 95%);
`

export const CForm = styled.form`
        background: rgb(0,6,10, 30%);
        box-shadow: 0 1px 3px rgba(0,0,0,0.9);
        height: auto;
        width:800px;
        z-index: 1;
        margin: 0 auto;
        padding: 60px 40px;
        border-radius: 4px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-bottom: 100px;
        

        @media screen and (max-width: 480px){
        padding: 32px 32px;
        }
        
  
`;

export const CFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Checkboxwrap = styled.div`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 5px;
        color: white;
        align-items: center;
        font-size:0.8rem;
`

export const Text = styled.h1`
        text-shadow: 1px 1px white;
        color:#731b0b;
        font-size: 2rem;
        margin: 30px 40px 30px 40px; 
        text-align: center;

`

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
        color:white;
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
  resize:none;
  height: 100px;
`;

export const CButton = styled(Link)`
        background: #731b0b;
        padding: 16px 15px;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        justify-content:center;
        align-items: center;
        display: flex;
        white-space: nowrap;
        text-decoration: none;
        margin: auto; 
        width:200px;

        &:hover{
                transition: all 0.2s ease-in-out;
                background:#fff;
                color:#010606;
            }


`;
