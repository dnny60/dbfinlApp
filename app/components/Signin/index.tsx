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
  Text,
} from "./SigninElements";
import { useState } from "react";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";

const SignIn = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const router = useRouter();
  // const callbackUrl = (router.query?.callbackUrl as string) ?? "/";

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setTimeout(() => {
  //     alert(`Your email is ${email} and password is ${password}`);
  //   }, 20);
  //   console.log("email: " + email + " your password: " + password);
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // const router = useRouter();
    // const callbackUrl = (router.query?.callbackUrl as string) ?? "/";
    e.preventDefault();
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
    // if (result?.error) {
    //   setError(result.error);
    // } else {
    //   router.push(callbackUrl);
    // }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">CarryU</Icon>
          {!!error && <p>{error}</p>}
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in your account</FormH1>
              <FormLabel htmlFor="for"> Email</FormLabel>
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
              <Text>
                {email} {password}
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

// import { useState } from "react";

// export default function SignIn() {
//   const [to, setTo] = useState("");
//   const [message, setMessage] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 200);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:{" "}
//         <select value={to} onChange={(e) => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }
