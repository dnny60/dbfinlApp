import React, { useState } from "react";
import {
  CButton,
  CForm,
  CInput,
  CLabel,
  CTextArea,
  Container,
  Text,
  Checkboxwrap,
  CheckLabel,
  CFormGroup,
} from "./CreateCarpoolElements";
import { useSession } from "next-auth/react";

import axios from "axios";
import { useRouter } from "next/navigation";

// 创建共乘页面组件
const Createcarpool = ({ onCreate }) => {
  const { data: session } = useSession();
  const [Role, setRole] = useState("");
  const [Gender, setGender] = useState("");
  const [StartingLocation, setStartingLocation] = useState("");
  const [EstimatedStartingTime, setEstimatedStartingTime] = useState("");
  const [DrunkAllowed, setDrunkAllowed] = useState(false);
  const [SmokingAllowed, setSmokingAllowed] = useState(false);
  const [HugeLuggageAllowed, setHugeLuggageAllowed] = useState(false);
  const [NumOfMax, setNumOfMax] = useState("");
  const [PostDescription, setPostDescription] = useState("");
  const [EndingLocation, setEndingLocation] = useState("");
  const [PetAllowed, setPetAllowed] = useState(false);
  const router = useRouter();
  if (PetAllowed == true) {
    console.log("true");
  } else {
    console.log("false");
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm((prevForm) => ({ ...prevForm, [name]: value }));
  // };

  // console.log(
  //   Role,
  //   Gender,
  //   StartingLocation,
  //   EstimatedStartingTime,
  //   DrunkAllowed,
  //   SmokingAllowed,
  //   HugeLuggageAllowed,
  //   NumOfMax,
  //   PostDescription,
  //   EndingLocation,
  //   PetAllowed
  // );
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/createpost", {
        CreatorID: parseInt(session.user.id),
        DrunkAllowed: DrunkAllowed,
        EstimatedStartingTime: new Date(EstimatedStartingTime),
        EndingLocation: EndingLocation,
        Gender: Gender,
        HugeLuggageAllowed: HugeLuggageAllowed,
        NumOfMax: parseInt(NumOfMax),
        PetAllowed: PetAllowed,
        PostDescription: PostDescription,
        SmokingAllowed: SmokingAllowed,
        StartingLocation: StartingLocation,
        Role: Role,
      });
      console.log(response.data.post.PostID);
      // res.redirect(307, "/carpool");
      // if (response.ok) {
      //   const data = await response.json();
      //   console.log(data); // 可以在控制台中檢查回傳的資料
      // } else {
      //   console.error("create post失敗");
      // }
      var link = "/post/" + response.data.post.PostID;
      router.push(link);
    } catch (error) {
      console.error("發生錯誤", error);
    }
  };

  return (
    <Container>
      <Text>New Rideshare </Text>
      <CForm onSubmit={handleSubmit}>
        <CFormGroup>
          <CLabel htmlFor="Role">
            身份:
            <CInput
              as="select"
              name="Role"
              value={Role}
              // onChange={handleChange}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">選擇身份...</option>
              <option value="1">我是司機</option>
              <option value="2">我是乘客</option>
            </CInput>
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="Gender">
            性別:
            <CInput
              as="select"
              name="Gender"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">選擇性別...</option>
              <option value="Male">男</option>
              <option value="Female">女</option>
            </CInput>
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="StartingLocation">
            出發地點:
            <CInput
              type="text"
              name="StartingLocation"
              value={StartingLocation}
              onChange={(e) => setStartingLocation(e.target.value)}
            />
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="EndingLocation">
            目的地:
            <CInput
              type="text"
              name="EndingLocation"
              value={EndingLocation}
              onChange={(e) => setEndingLocation(e.target.value)}
            />
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="EstimatedStartingTime">
            出發時間:
            <CInput
              type="datetime-local"
              name="EstimatedStartingTime"
              value={EstimatedStartingTime}
              onChange={(e) => setEstimatedStartingTime(e.target.value)}
            />
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="NumOfMax ">
            預期人數:
            <CInput
              type="number"
              name="NumOfMax"
              min="1"
              max="15"
              value={NumOfMax}
              onChange={(e) => setNumOfMax(e.target.value)}
            />
          </CLabel>
        </CFormGroup>

        <Checkboxwrap>
          允許：
          <CheckLabel htmlFor="DrunkAllowed">
            醉酒
            <CInput
              type="checkbox"
              name="DrunkAllowed"
              checked={DrunkAllowed}
              // onChange={handleChange}
              onChange={(e) => setDrunkAllowed(e.target.checked)}
            />
          </CheckLabel>
          <CheckLabel htmlFor="SmokingAllowed">
            有煙味
            <CInput
              type="checkbox"
              name="SmokingAllowed"
              checked={SmokingAllowed}
              // onChange={handleChange}
              onChange={(e) => setSmokingAllowed(e.target.checked)}
            />
          </CheckLabel>
          <CheckLabel htmlFor="PetAllowed">
            寵物
            <CInput
              type="checkbox"
              name="PetAllowed"
              value="on"
              checked={PetAllowed}
              onChange={(e) => setPetAllowed(e.target.checked)}
            />
          </CheckLabel>
          <CheckLabel htmlFor="HugeLuggageAllowed">
            大型行李
            <CInput
              type="checkbox"
              name="HugeLuggageAllowed"
              checked={HugeLuggageAllowed}
              onChange={(e) => setHugeLuggageAllowed(e.target.checked)}
            />
          </CheckLabel>
        </Checkboxwrap>
        <CFormGroup>
          <CLabel htmlFor="PostDescription">
            簡介:
            <CTextArea
              type="text"
              name="PostDescription"
              value={PostDescription}
              onChange={(e) => setPostDescription(e.target.value)}
            />
          </CLabel>
        </CFormGroup>

        <CButton type="submit">開始共乘之旅</CButton>
      </CForm>
    </Container>
  );
};

export default Createcarpool;
