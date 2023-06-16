import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormColumn,
  FormRow,
  SubmitButton,
} from "./SettingElements"; // Update this with the correct path
import { CgProfile } from "react-icons/cg";
import { useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const MOCK_USER = {
  name: "Test User",
  email: "testuser@example.com",
  phone: "1234567890",
  password: "password",
  carModel: "Toyota Prius",
  licensePlate: "123ABC",
};

const Setting = ({ parm, parm2 }) => {
  const [user, setUser] = useState(MOCK_USER);
  const [isEditing, setEditing] = useState(false);
  useEffect(() => {
    // const userData = axios.post("/api/getUser", session.user.id);
    setUser(parm.user);
    // console.log(parm);
  }, [parm]);
  // setUser(parm);
  // setUser(session.user);
  // console.log(session.user);
  // setUser(session.user)
  const handleEdit = () => {
    setEditing(true);
  };

  // const handleChange = (e) => {
  //   //   const { name, value } = e.target;
  //   //   setForm((prevForm) => ({ ...prevForm, [name]: value }));
  //   // };
  const handleChange = (event) => {
    const { name, value } = event.target;

    // setUser({
    //   ...user,
    //   [event.target.name]: event.target.value,
    // });
    setUser((prevForm) => ({ ...prevForm, [name]: value }));
  };
  // const { update } = useSession();
  const reloadSession = () => {
    const event = new Event("visibilitychange");
    document.dispatchEvent(event);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user); // In a real app, here is where you would send the updated user data to your database

    await axios
      .post("/api/updateUser", {
        id: parm.user.id,
        email: user.email,
        name: user.name,
        password: user.password,
        phone: user.phone,
        carModel: user.carModel,
        licensePlate: user.licensePlate,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    await parm2({
      ...parm,
      user: {
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        carModel: user.carModel,
        licensePlate: user.licensePlate,
      },
    });
    // parm.user.name = user.name;
    // parm.user.email = user.email;
    // parm.user.password = user.password;
    // parm.user.phone = user.phone;
    // parm.user.carModel = user.carModel;
    // parm.user.licensePlate = user.licensePlate;
    // reloadSession();

    // await parm2({
    //   ...parm,
    //   user: {
    //     email: user.email,
    //     name: user.name,
    //     password: user.password,
    //     phone: user.phone,
    //     carModel: user.carModel,
    //     licensePlate: user.licensePlate,
    //   },
    // });

    // console.log(parm2);
    // parm2();
    setEditing(false);
  };

  // console.log(session.user);
  // setUser(session.user);
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Go back</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormH1>
              <span style={{ marginRight: "10px" }}>
                <CgProfile />
              </span>
              <span> 個人檔案</span>
            </FormH1>
            <FormRow>
              <FormColumn>
                <FormLabel htmlFor="name">用戶名</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                <FormLabel htmlFor="email">電子郵件</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                <FormLabel htmlFor="phone">電話號碼</FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  id="phone"
                  value={user.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                <FormLabel htmlFor="password">密碼</FormLabel>
                <FormInput
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </FormColumn>
              <FormColumn>
                <FormLabel htmlFor="carModel">車的型號</FormLabel>
                <FormInput
                  type="text"
                  name="carModel"
                  id="carModel"
                  value={user.carModel}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                <FormLabel htmlFor="licensePlate">車牌號碼</FormLabel>
                <FormInput
                  type="text"
                  name="licensePlate"
                  id="licensePlate"
                  value={user.licensePlate}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </FormColumn>
            </FormRow>
            {isEditing ? (
              <SubmitButton type="submit">儲存</SubmitButton>
            ) : (
              <FormButton type="button" onClick={handleEdit}>
                按一下以編輯
              </FormButton>
            )}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );

  // return <a href="signin">Sign in</a>;
};

export default Setting;
