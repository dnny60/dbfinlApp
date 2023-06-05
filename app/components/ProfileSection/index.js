import React from 'react'

const Profile = () => {
  return (
    <>
       <Container>
            <FormWrap>
                <Icon to="/">CarryU</Icon>
                < Label to="/"> </Label>
                  <FormContent>
                  
                    <Form action ="#">
                          <FormH1>Edit your profile</FormH1>
                          <FormLabel htmlFor='for'> Email</FormLabel>
                          <FormInput type='email' required />
                          <FormLabel htmlFor='for'>Password</FormLabel>
                          <FormInput type='password' required />
                          <FormButton type='submit'>Continue</FormButton>
                          <Text>Forgot password</Text>
                      </Form>
                  </FormContent>
            </FormWrap>
        </Container>
    </>
  )


  
}

export default Profile
