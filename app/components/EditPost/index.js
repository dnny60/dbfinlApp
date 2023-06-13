import React, { useState, useEffect } from "react";
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
} from "./EditpostElements";

const EditPost = ({ param }) => {
  const [isEditing, setEditing] = useState(false);
  const [form, setForm] = useState({
    Role: "",
    Name: "",
    PhoneNumber: "",
    StartingLocation: "",
    EndingLocation: "",
    EstimatedStartingTime: "",
    DrunkAllowed: false,
    SmokeAllowed: false,
    PetAllowed: false,
    BigLuggageAllowed: false,
    NumOfMax: 0,
    PostDescription: "",
    CarpoolUserID: 0,
  });

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const id = parseInt(param.params.id);
        const response = await fetch("/api/getpost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          const data = await response.json();
          const mappedData = {
            Role: data.POST_USER[0].Role || "",
            Name: data.CARPOOLUSER.Name || "",
            PhoneNumber: data.CARPOOLUSER.PhoneNumber || "",
            StartingLocation: data.StartingLocation || "",
            EndingLocation: data.EndingLocation || "",
            EstimatedStartingTime: data.EstimatedStartingTime || "",
            DrunkAllowed: data.DrunkAllowed || false,
            SmokeAllowed: data.SmokeAllowed || false,
            PetAllowed: data.PetAllowed || false,
            BigLuggageAllowed: data.BigLuggageAllowed || false,
            NumOfMax: data.NumOfMax || 0,
            PostDescription: data.PostDescription || "",
            CarpoolUserID: data.CARPOOLUSER.CarpoolUserID || 0,
            PostID: id,
          };

          setForm(mappedData);
        } else {
          console.log("Failed to fetch post data.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPostData();
  }, [param]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let fieldValue;

    if (type === "checkbox") {
      fieldValue = checked ? "Yes" : "No";
    } else {
      fieldValue = value;
    }

    setForm((prevForm) => ({ ...prevForm, [name]: fieldValue }));
  };

  const handleEdit = async () => {
    try {
      const PostID = parseInt(param.params.id);
      const response = await fetch("/api/editPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        console.log("Post updated successfully");
      } else {
        console.log("Failed to update post.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Save Changes clicked"); // 检查是否正确触发
    setEditing(false);
    await handleEdit();
  };

  return (
    <Container>
      <Text>New Rideshare </Text>
      <CForm onSubmit={handleSubmit}>
        <CFormGroup>
          <CLabel htmlFor="userRole">
            身份:
            <CInput
              as="select"
              name="Role"
              value={form.Role}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">選擇身份...</option>
              <option value="Driver">我是司機</option>
              <option value="Passenger">我是乘客</option>
            </CInput>
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="creatorName">
            姓名:
            <CInput
              type="text"
              name="Name"
              value={form.Name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="creatorPhone">
            電話:
            <CInput
              type="text"
              name="PhoneNumber"
              value={form.PhoneNumber}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="startingLocation">
            出發地點:
            <CInput
              type="text"
              name="StartingLocation"
              value={form.StartingLocation}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="endingLocation">
            目的地:
            <CInput
              type="text"
              name="EndingLocation"
              value={form.EndingLocation}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="estimatedStartingTime">
            出發日期:
            <CInput
              type="datetime-local"
              name="EstimatedStartingTime"
              value={form.EstimatedStartingTime}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="NumOfMax">
            預期人數:
            <CInput
              type="number"
              name="NumOfMax"
              min="1"
              max="15"
              value={form.NumOfMax}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CLabel>
        </CFormGroup>
        <Checkboxwrap>
          允許：
          <CheckLabel htmlFor="drunkAllowed" disabled={!isEditing}>
            醉酒
            <CInput
              type="checkbox"
              name="DrunkAllowed"
              checked={form.DrunkAllowed}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CheckLabel>
          <CheckLabel htmlFor="smokeAllowed">
            有煙味
            <CInput
              type="checkbox"
              name="SmokeAllowed"
              checked={form.SmokeAllowed}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CheckLabel>
          <CheckLabel htmlFor="petAllowed">
            寵物
            <CInput
              type="checkbox"
              name="PetAllowed"
              checked={form.PetAllowed}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CheckLabel>
          <CheckLabel htmlFor="bigLuggageAllowed">
            大型行李
            <CInput
              type="checkbox"
              name="BigLuggageAllowed"
              checked={form.BigLuggageAllowed}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CheckLabel>
        </Checkboxwrap>
        <CFormGroup>
          <CLabel htmlFor="description">
            簡介:
            <CTextArea
              type="text"
              name="PostDescription"
              value={form.PostDescription}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </CLabel>
        </CFormGroup>
        {!isEditing ? (
          <CButton
            type="button" // 将type属性改为"button"
            onClick={() => {
              setEditing(true);
            }}
          >
            Edit
          </CButton>
        ) : (
          <>
            <CButton type="button" onClick={handleSubmit}>
              Save Changes
            </CButton>{" "}
            <CButton
              type="button"
              onClick={() => {
                setEditing(false);
                setForm({
                  Role: "",
                  Name: "",
                  PhoneNumber: "",
                  StartingLocation: "",
                  EndingLocation: "",
                  EstimatedStartingTime: "",
                  DrunkAllowed: false,
                  SmokeAllowed: false,
                  PetAllowed: false,
                  BigLuggageAllowed: false,
                  NumOfMax: 0,
                  PostDescription: "",
                  CarpoolUserID: 0,
                });
              }}
            >
              Cancel
            </CButton>
          </>
        )}
      </CForm>
    </Container>
  );
};

export default EditPost;
