import React, { useState, useEffect } from "react";
import { Button } from "../ButtonElement";
import Image from "next/image";
import Gif from "../../../public/images/clock.gif";
import Gif2 from "../../../public/images/customer.gif";
import { BsCarFront, BsFillPersonFill } from "react-icons/bs";
import {
  Infowrapper,
  CarP,
  Carform,
  Container,
  Userwrapper,
  Hostwrap,
  CarH3,
  Member,
  HeaderWrapper,
  Buttonwrap,
} from "./PostSectionElements";

import axios from "axios"; // assume you are using axios

// import useUser from '...' // import your hook for user information

const PostSection = ({ param }) => {
  const [post, setPost] = useState({
    rideshareid: 1,
    creatorName: "John Doe",
    creatorPhone: "123-456-7890",
    userrole: "driver",
    startingLocation: "City Center",
    endingLocation: "Suburbia",
    estimatedStartingTime: "2023-05-23 10:30:00",
    NumOfMax: 5,
    NumOfJoined: 3,
    userRole: "driver",
    drunkAllowed: "no",
    smokeAllowed: "no",
    petAllowed: "no",
    bigLuggageAllowed: "yes",
    description: "Looking for passengers to share the ride.",
    status: "Not Started",
  });

  const [user, setUser] = useState({
    name: "Winnie Huang",
    phone: "0900-251-718",
    userRole: "passenger",
  });

  const id = post.rideshareid;

  // 'userid' seems to be a boolean to check if there's a user or not. Let's just assume it's true.
  const userid = true;

  const Ontheroad = true;

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const id = parseInt({ param });
    // const res = axios.post("/api/getpost", id);
    // console.log(res);
    // console.log(res.data);
    // setData(res.post);
    // setLoading(false);
    fetch("/api/getpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    // fetch("/api/searchpost", id)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //   });
    console.log(data);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  // const res = await axios.post("/api/searchpost", { param });
  // console.log(res);

  // const quitRideshare = async () => {
  //   try {
  //     // Assuming you're using axios
  //     const response = await axios.put(`/api/posts/${id}/quit`);
  //     if (response.status === 200) {
  //       setPost(prevPost => ({
  //         ...prevPost,
  //         NumOfJoined: prevPost.NumOfJoined - 1
  //       }));
  //     } else {
  //       console.error('Failed to quit rideshare');
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // };

  return (
    <>
      <Container>
        <Carform>
          {Ontheroad ? (
            <HeaderWrapper>
              <Image src={Gif2} alt="" />
              <div>
                <h1>旅程已開始</h1>
                <h1>正在前往目的地！</h1>
              </div>
            </HeaderWrapper>
          ) : (
            <HeaderWrapper>
              <Image src={Gif} alt="" />
              <div>
                <h1>你已成功加入</h1>
                <h1>共乘就快開團拉！</h1>
              </div>
            </HeaderWrapper>
          )}
          <Infowrapper>
            <CarP>出發地: {data.StartingLocation}</CarP>
            <CarP>目的地: {data.EndingLocation}</CarP>
            <CarP>出發時間: {data.EstimatedStartingTime}</CarP>
            <CarP>
              目前人數: {post.NumOfJoined}/{post.NumOfMax}
            </CarP>
          </Infowrapper>

          {Ontheroad ? (
            <>
              <Buttonwrap>
                <Button to="/feedback">若已抵達目的地，歡迎點我填寫回饋</Button>
              </Buttonwrap>
            </>
          ) : (
            <>
              <Buttonwrap>
                <Button to="/discover">點擊退出此次共乘</Button>
              </Buttonwrap>
            </>
          )}

          <Userwrapper>
            <Hostwrap>
              <CarH3>共乘開團主揪</CarH3>
              <CarP>
                {post.userRole === "driver" ? (
                  <BsCarFront />
                ) : (
                  <BsFillPersonFill />
                )}
                {post.creatorName}
              </CarP>
              <CarP>電話：{post.creatorPhone}</CarP>
            </Hostwrap>
            <Member>
              <CarH3>等待共乘中成員</CarH3>
              {userid && (
                <>
                  <CarP>
                    {user.userRole === "driver" ? (
                      <BsCarFront />
                    ) : (
                      <BsFillPersonFill />
                    )}
                    {user.name}
                  </CarP>
                  <CarP>電話：{user.phone}</CarP>
                </>
              )}
            </Member>
          </Userwrapper>
        </Carform>
      </Container>
    </>
  );
};

export default PostSection;
