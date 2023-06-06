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
} from "./SettingElements"; // Update this with the correct path
import { CgProfile } from "react-icons/cg";
import { useEffect } from "react";
import axios from "axios";

const MOCK_USER = {
  name: "Test User",
  email: "testuser@example.com",
  phone: "1234567890",
  password: "password",
  carModel: "Toyota Prius",
  licensePlate: "123ABC",
};

const Setting = ({ parm }) => {
  const [user, setUser] = useState(MOCK_USER);
  const [isEditing, setEditing] = useState(false);
  useEffect(() => {
    // const userData = axios.post("/api/getUser", session.user.id);
    setUser(parm);
    console.log(parm);
  });
  // setUser(session.user);
  // console.log(session.user);
  // setUser(session.user)
  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user); // In a real app, here is where you would send the updated user data to your database
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
              <span> User Settings</span>
            </FormH1>
            <FormRow>
              <FormColumn>
                <FormLabel htmlFor="name">Username</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  id="phone"
                  value={user.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                <FormLabel htmlFor="password">Password</FormLabel>
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
                <FormLabel htmlFor="carModel">Car Model</FormLabel>
                <FormInput
                  type="text"
                  name="carModel"
                  id="carModel"
                  value={user.carModel}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                <FormLabel htmlFor="licensePlate">License Plate</FormLabel>
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
              <FormButton type="submit">Save Changes</FormButton>
            ) : (
              <FormButton type="button" onClick={handleEdit}>
                Edit
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
