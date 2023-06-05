import React from 'react';
import Giflike from '../../images/like.gif'
import { FP,Fform,Container,HeaderWrapper,Buttonwrap, Fh1,FButton


} from './ThankyouElements'
//import axios from 'axios'; // assume you are using axios

// import useUser from '...' // import your hook for user information


const Thankyou = () => {



  return (
    <>
      <Container> 
        <Fform>
          <HeaderWrapper>
            <img src={Giflike} alt=""/>
            <div>
              <Fh1>感謝您的搭乘！</Fh1>
              </div>
          </HeaderWrapper>
              <FP>還想看看有沒有其他想跟的團嗎!</FP>
              <FP>歡迎您隨時回來使用</FP>
              <FP>Carry You 政大共乘系統!</FP>
            
            
            
          
          <Buttonwrap>
            <FButton to="/discover" >回首頁</FButton>
          </Buttonwrap>
        </Fform>
      </Container> 
          
       
    </>
  );
}

export default Thankyou;
