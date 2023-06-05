import styled from 'styled-components'
import {Link } from 'react-router-dom'

export const Container = styled.div`
    min-height: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index:0;
    overflow: hidden;
    background:radial-gradient(circle, rgba(35,61,79,1) 0%, rgba(125,153,114,1) 92%);
    );


`

export const FormWrap = styled.div`
        height: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and(max-width: 400px){
            height:80%;
        }

`


export const Icon = styled(Link)`
        margin-left: 32px;
        margin-top:32px;
        text-decoration:none;
        color: #fff;
        font-weight: 700;
        font-size: 32px;
        
        @media screen and (max-width: 480px){
            margin-left: 16px;
            margin-top: 8px;
        }
`
export const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
`;
export const FormRow = styled.div`
    display: flex;
    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;

export const FormContent = styled.div`
        height:100%;
        display: flex;
        flex-direction:  column;
        justify-content: center;

        @media screen and(max-width: 480px){
            padding: 10px;
        }
`

export const Form = styled.form`
        background: rgba(0, 6, 10, 0.3);
        max-width: 600px;
        height: 650px;
        width: 100%;
        z-index: 1;
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        padding: 80px 32px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.9);
        position: absolute; 
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 50px 50px;
        @media screen and (max-width: 480px){
            padding: 32px 32px;
        }
`

export const FormH1 = styled.h1`
        margin-bottom:30px;
        color:#fff;
        font-size:40px;
        font-weight:700;
        text-align: center;
        justify-content:center;
        display:flex;
        padding:0 20px;
`

export const FormLabel = styled.label`
        margin-bottom:8px;
        font-size:14px;
        color: #fff;
`
export const FormInput = styled.input`
        padding: 16px 16px;
        margin-bottom:32px;
        border: none;
        border-radius: 4px;

`

export const FormButton = styled(Link)`
        background: #1e81b0;
        padding: 16px 0;
        border: none;
        width:300px;
        border-radius:60px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        flex-direction: column; 
        justify-content:center;
        align-items: center;
        white-space: nowrap;
        text-decoration: none;

`
export const Text = styled.span`
        text-align: center;
        margin-top: 24px;
        color: #fff;
        font-size: 14px;
        x
`


