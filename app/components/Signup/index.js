import React from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Form,
} from "./SignupElements";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phoneNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // 可以在控制台中檢查回傳的資料
      } else {
        console.error("註冊失敗");
      }
    } catch (error) {
      console.error("發生錯誤", error);
    }
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon onClick={() => router.push("/")}>CarryU</Icon>
          <FormContent>
            {/* <Form action="#" > */}
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign up for a new account</FormH1>
              <FormLabel htmlFor="for"> Name</FormLabel>
              <FormInput
                type="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel htmlFor="for"> Phone number</FormLabel>
              <FormInput
                type="phone"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <FormLabel htmlFor="for"> Email</FormLabel>
              <FormInput
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <FormButton to="/signup/profile" type="submit"> */}
              <FormButton type="submit">Sign Up</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
