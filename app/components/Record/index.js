import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useNavigate } from "react-router-dom";
import {
  SearchBar,
  Infowrapper,
  FP,
  Carform,
  Container,
  CButton,
} from "./RecordElements";
import moment from "moment";

//this page record the carcool you created and the rideshare you join.
//the info will list on the page so that you can clearly see the rideshare info
//For the rideshare you created that haven't start you can edit the info anytime and even delete it
//For the rideshare you join you can only read the info and decide whether you are gonna quit or not
//these record can be search in database and show on the site
// Mock data
const mockCreatedRideshares = [
  {
    id: 1,
    startingLocation: "New York",
    endingLocation: "Washington",
    creatorName: "John",
    estimatedStartingTime: "2023-11-22 10:20",
  },
  {
    id: 2,
    startingLocation: "Los Angeles",
    endingLocation: "San Francisco",
    creatorName: "John",
    estimatedStartingTime: "2023-05-22 1:20",
  },
  // Add more mock rideshares...
];

const mockJoinedRideshares = [
  {
    id: 3,
    startingLocation: "Seattle",
    endingLocation: "Portland",
    creatorName: "Bob",
  },
  // Add more mock rideshares...
];

const mockRideshareFeedback = [
  { postId: 1, userFeedback: ["good", "late", "safe"] },
  { postId: 2, userFeedback: ["excellent", "comfortable"] },
  // ...
];

const YourRecord = ({ parm }) => {
  if (!parm) {
    return;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getYourRideShares", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // 如果有需要发送的数据，可以在此处添加
          body: JSON.stringify({ parm }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data.yourRideShares);

        const ridesharesData = data.yourRideShares.map((item) => ({
          id: item.PostID,
          startingLocation: item.StartingLocation,
          endingLocation: item.EndingLocation,
          creatorName: item.CARPOOLUSER.Name,
          estimatedStartingTime: moment(item.EstimatedStartingTime).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
        }));

        setCreatedRideshares(ridesharesData);
        setDisplayedRideshares(ridesharesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      //get joined post
      try {
        const response = await fetch("/api/getJoinedPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // 如果有需要发送的数据，可以在此处添加
          body: JSON.stringify({ parm }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data.postUsers);

        const ridesharesData = data.postUsers.map((item) => ({
          id: item.PostID,
          startingLocation: item.POST.StartingLocation,
          endingLocation: item.POST.EndingLocation,
          creatorName: item.POST.CARPOOLUSER.Name,
          estimatedStartingTime: moment(item.POST.EstimatedStartingTime).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
        }));

        setJoinedRideshares(ridesharesData);
        // setDisplayedRideshares(ridesharesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [parm]);
  const router = useRouter();
  const seeDetail = (id) => {
    // const response = await fetch("/api/postDetail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ id }),
    // });

    // console.log(response);
    var link = "/post/" + id;
    router.push(link);
  };

  const [createdRideshares, setCreatedRideshares] = useState(
    mockCreatedRideshares
  );
  const [joinedRideshares, setJoinedRideshares] =
    useState(mockJoinedRideshares);
  const [displayedRideshares, setDisplayedRideshares] = useState(
    mockCreatedRideshares
  );
  const [ridesharefeedback, setRidesharefeedback] = useState(
    mockRideshareFeedback
  );

  const navigate = useNavigate();

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredRideshares = createdRideshares.filter(
      (rideshare) =>
        rideshare.startingLocation.toLowerCase().includes(searchQuery) ||
        rideshare.endingLocation.toLowerCase().includes(searchQuery)
    );
    setDisplayedRideshares(filteredRideshares);
  };

  const handleEdit = (rideshareId) => {
    router.push(`/Editpost/${rideshareId}`);
  };

  const handleDelete = async (rideshareId) => {
    try {
      const response = await fetch("/api/deletePost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rideshareId }), // 将 rideshareId 作为请求体发送给 API
      });

      if (!response.ok) {
        throw new Error("Failed to delete rideshare");
      }

      // 执行成功后更新状态或执行其他操作
      setCreatedRideshares(
        createdRideshares.filter((rideshare) => rideshare.id !== rideshareId)
      );
      setDisplayedRideshares(
        displayedRideshares.filter((rideshare) => rideshare.id !== rideshareId)
      );
    } catch (error) {
      console.error("Error deleting rideshare:", error);
    }
  };

  return (
    <>
      <Container>
        <Carform>
          <h1>Your Rideshares</h1>
          <SearchBar
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
          />
          {displayedRideshares.map((rideshare) => (
            <Infowrapper key={rideshare.id}>
              <group>
                <FP>出發地：{rideshare.startingLocation}</FP>
                <FP>目的地: {rideshare.endingLocation}</FP>
                <FP>出發時間：{rideshare.estimatedStartingTime}</FP>
                <FP>Creator: {rideshare.creatorName}</FP>
              </group>
              <group>
                <CButton onClick={() => handleEdit(rideshare.id)}>Edit</CButton>
                <CButton onClick={() => handleDelete(rideshare.id)}>
                  Delete
                </CButton>
                {/* Replace with your actual rideshare component */}
                {/* <Rideshare {...rideshare} onEdit={handleEdit} onDelete={handleDelete} /> */}
              </group>
            </Infowrapper>
          ))}
        </Carform>

        <Carform>
          <h1>Rideshares you've joined</h1>
          {joinedRideshares.map((rideshare) => (
            <Infowrapper key={rideshare.id}>
              <group>
                <FP>出發地: {rideshare.startingLocation}</FP>
                <FP>目的地: {rideshare.endingLocation}</FP>
                <FP>出發時間：{rideshare.estimatedStartingTime}</FP>
                <FP>Creator: {rideshare.creatorName}</FP>
              </group>

              <group>
                <CButton onClick={() => seeDetail(parseInt(rideshare.id))}>
                  Detail
                </CButton>
                {/* pass id to the post and show the post */}
                {/* <Rideshare {...rideshare} /> */}
              </group>
            </Infowrapper>
          ))}
        </Carform>

        {/* User feedback section */}
        <Carform>
          <h1>Your Feedback</h1>
          {ridesharefeedback.map((feedback) => (
            <Infowrapper key={feedback.id}>
              <group>
                <FP>貼文ID: {feedback.postId}</FP>
                {feedback.userFeedback.map((feedback, index) => (
                  <FP key={index}>
                    回饋{index + 1}: {feedback}
                  </FP>
                ))}
              </group>
            </Infowrapper>
          ))}
        </Carform>
      </Container>
    </>
  );
};

export default YourRecord;
