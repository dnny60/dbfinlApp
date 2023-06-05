import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ButtonElement';
import Gif from '../../images/clock.gif'
import Gif2 from '../../images/customer.gif'
import { BsCarFront, BsFillPersonFill } from 'react-icons/bs';
import { SearchBar, Infowrapper, FP,Carform,Container,CButton,Hostwrap,CarH3,Member,HeaderWrapper,Buttonwrap


} from './RecordElements'

//this page record the carcool you created and the rideshare you join.
//the info will list on the page so that you can clearly see the rideshare info
//For the rideshare you created that haven't start you can edit the info anytime and even delete it
//For the rideshare you join you can only read the info and decide whether you are gonna quit or not
//these record can be search in database and show on the site 
// Mock data
const mockCreatedRideshares = [
  { id: 1, startingLocation: 'New York', endingLocation: 'Washington', creatorName: 'John' ,estimatedStartingTime: '2023-11-22 10:20'},
  { id: 2, startingLocation: 'Los Angeles', endingLocation: 'San Francisco', creatorName: 'John',estimatedStartingTime: '2023-05-22 1:20' },
  // Add more mock rideshares...
];

const mockJoinedRideshares = [
  { id: 3, startingLocation: 'Seattle', endingLocation: 'Portland', creatorName: 'Bob' },
  // Add more mock rideshares...
];

const YourRecord = () => {
  const [createdRideshares, setCreatedRideshares] = useState(mockCreatedRideshares);
  const [joinedRideshares, setJoinedRideshares] = useState(mockJoinedRideshares);
  const [displayedRideshares, setDisplayedRideshares] = useState(mockCreatedRideshares);


  const navigate = useNavigate();

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredRideshares = createdRideshares.filter(rideshare =>
      rideshare.startingLocation.toLowerCase().includes(searchQuery) ||
      rideshare.endingLocation.toLowerCase().includes(searchQuery)
    );
    setDisplayedRideshares(filteredRideshares);
  };

  const handleEdit = (rideshareId) => {
    navigate(`/rideshare/edit/${rideshareId}`);
  };


  const handleDelete = (rideshareId) => {
    setCreatedRideshares(createdRideshares.filter(rideshare => rideshare.id !== rideshareId));
    setDisplayedRideshares(displayedRideshares.filter(rideshare => rideshare.id !== rideshareId));
  };



  

  return (
    <>
      <Container> 
     
        <Carform>
        <h1>Your Rideshares</h1>
            <SearchBar type="text" placeholder="Search..." onChange={handleSearch} />
            {displayedRideshares.map(rideshare => (
              <Infowrapper key={rideshare.id}>
                <group>
                  <FP>出發地：{rideshare.startingLocation}</FP>
                  <FP>目的地: {rideshare.endingLocation}</FP>
                  <FP>出發時間：{rideshare.estimatedStartingTime}</FP>
                  <FP>Creator: {rideshare.creatorName}</FP>
                </group>
                <group>
                <CButton onClick={() => handleEdit(rideshare.id)}>Edit</CButton>
                <CButton onClick={() => handleDelete(rideshare.id)}>Delete</CButton>
                {/* Replace with your actual rideshare component */}
                {/* <Rideshare {...rideshare} onEdit={handleEdit} onDelete={handleDelete} /> */}
                </group>
              </Infowrapper>
          ))}
      </Carform>


    
        <Carform>
        <h1>Rideshares you've joined</h1>
          {joinedRideshares.map(rideshare => (
            <Infowrapper key={rideshare.id}>
              <grounp>
              <FP>Starting Location: {rideshare.startingLocation}</FP>
            <FP>Ending Location: {rideshare.endingLocation}</FP>
            <FP>出發時間：{rideshare.estimatedStartingTime}</FP>
            <FP>Creator: {rideshare.creatorName}</FP>
            </grounp>
              
            <grounp>
            <CButton to ='/post/'>Detail</CButton>
              {/* pass id to the post and show the post */}
              {/* <Rideshare {...rideshare} /> */}
            </grounp>
            
            </Infowrapper>
        ))}

        </Carform>

        
      </Container>
    </>
  );





}

export default YourRecord;
