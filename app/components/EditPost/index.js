import React, { useState, useEffect } from 'react';
import { CButton, CForm, CInput, CLabel, CTextArea, Container, Text,Checkboxwrap, CheckLabel ,CFormGroup} from './EditpostElements';



// 创建共乘页面组件
const EditPost = () => {
  const [isEditing, setEditing] = useState(false);
  
  const handleEdit = () => {
    console.log('Before state update:', isEditing);
    setEditing(true);
    console.log('After state update:', isEditing);
  };
  useEffect(() => {
    console.log("isEditing changed", isEditing);
}, [isEditing]);

  const [form, setForm] = useState({
    userRole: '我是司機',
    creatorName: 'Test User',
    creatorPhone: '1234567890',
    startingLocation: 'Test Starting Location',
    endingLocation: 'Test Ending Location',
    estimatedStartingTime: '2023-06-01T12:00',
    drunkAllowed: false,
    smokeAllowed: true, 
    petAllowed: false, 
    bigLuggageAllowed: false,
    NumOfMax: 5,
    description: 'Test description'
  });

  
  
    const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value,});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form);
      setEditing(false);
      
    };
  
    return (
      <Container> 
         {console.log('Rendering with state:', isEditing)}
        <Text>New Rideshare </Text> 
      <CForm onSubmit={handleSubmit}>
      <CFormGroup>
      <CLabel htmlFor="userRole">
        身份:
        <CInput
          as="select"
          name="userRole"
          value={form.userRole}
          onChange={handleChange}
          disabled={!isEditing}
        >
          <option value="">選擇身份...</option>
          <option value="我是司機">我是司機</option>
          <option value="我是乘客">我是乘客</option>
        </CInput>
      </CLabel>
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="creatorName">
          姓名:
          <CInput type="text" name="creatorName" value={form.creatorName} onChange={handleChange} disabled={!isEditing}/>
        </CLabel>
        </CFormGroup>
        <CFormGroup>
        <CLabel  htmlFor="creatorPhone">
          電話:
          <CInput type="text" name="creatorPhone" value={form.creatorPhone} onChange={handleChange} disabled={!isEditing} />
        </CLabel>
        </CFormGroup>
        <CFormGroup>
        <CLabel  htmlFor="startingLocation">
          出發地點:
          <CInput type="text" name="startingLocation" value={form.startingLocation} onChange={handleChange} disabled={!isEditing}/>
        </CLabel>
        </CFormGroup>
        <CFormGroup>
        <CLabel  htmlFor="endingLocation">
          目的地:
          <CInput type="text" name="endingLocation" value={form.endingLocation} onChange={handleChange} disabled={!isEditing}/>
        </CLabel>
        </CFormGroup>
        <CFormGroup>
          <CLabel  htmlFor="estimatedStartingTime">
            出發日期:
          <CInput type="datetime-local" name="estimatedStartingTime" value={form.estimatedStartingTime} onChange={handleChange} disabled={!isEditing}/>
        </CLabel>
        </CFormGroup>
        <CFormGroup>
        <CLabel htmlFor="NumOfMax ">
          預期人數:
          <CInput type="number" name="NumOfMax" min="1" max="15" value={form.NumOfMax} onChange={handleChange} disabled={!isEditing}/>
        </CLabel>
        </CFormGroup>

        <Checkboxwrap>
          允許：
            <CheckLabel htmlFor="drunkAllowed" disabled={!isEditing}>
            醉酒
            <CInput
            type="checkbox" name="drunkAllowed" value={form.drunkAllowed} onChange={handleChange} disabled={!isEditing} />
          </CheckLabel>
          <CheckLabel  htmlFor="smokeAllowed">
            有煙味
            <CInput type="checkbox" name="smokeAllowed" checked={form.smokeAllowed} onChange={handleChange} disabled={!isEditing}/>
          </CheckLabel>
        
          <CheckLabel htmlFor="petAllowed">
            寵物
            <CInput type="checkbox" name="petAllowed" checked={form.petAllowed} onChange={handleChange} disabled={!isEditing}/>
          </CheckLabel>
          <CheckLabel htmlFor="bigLuggageAllowed">
            大型行李
            <CInput type="checkbox" name="bigLuggageAllowed" checked={form.bigLuggageAllowed} onChange={handleChange} disabled={!isEditing}/>
          </CheckLabel>
        </Checkboxwrap>
          <CFormGroup>
          <CLabel htmlFor= "description">
          簡介:
          <CTextArea type="text" name="description" value={form.description} onChange={handleChange} disabled={!isEditing}/>
        </CLabel>
        </CFormGroup>

          {isEditing ? (
              <CButton type="submit"> Save Changes</CButton>
          ) : (
            <CButton type="button" onClick={() => {
              console.log("Edit button clicked");
              handleEdit();
          }}>
              Edit
          </CButton>
          
          )}

      </CForm>
      </Container>
    );

    
  }

  export default EditPost