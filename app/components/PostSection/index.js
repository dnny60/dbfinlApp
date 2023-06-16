import React, { useState, useEffect } from "react";
import moment from "moment";
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
import { useRouter } from "next/navigation";

import axios from "axios"; // assume you are using axios

// import useUser from '...' // import your hook for user information

const PostSection = ({ param, session }) => {
  const router = useRouter();
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

  const [user, setUser] = useState({});

  // 'userid' seems to be a boolean to check if there's a user or not. Let's just assume it's true.
  // const userid = false;
  const [userid, setuserid] = useState(false);
  const [isCreator, setIsCreator] = useState(false);

  // const Ontheroad = true;
  const [Ontheroad, setOntheroad] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    var id = parseInt(param.id);
    // const userID = session.user.id;
    console.log(parseInt(id));
    setOntheroad(false);
    // console.log(pageProps);

    const fetchData = async () => {
      const checkStarted = await fetch("/api/checkStarted", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.StartingTime);
          if (data.StartingTime != null) {
            setOntheroad(true);
          }
        });

      const getPost = await fetch("/api/getpost", {
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
          console.log(session);
          setIsCreator(data.CARPOOLUSER.CarpoolUserID == session.user.id); // Check if the user is the creator
          // console.log(data);
        });

      const getPostWaitList = await fetch("/api/getPostWaitList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          console.log(data);
          setLoading(false);
          setuserid(true);
          // console.log(data);
        });
    };

    fetchData()
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);

    // console.log(data);
  }, [param, session]);
  const quitPost = async () => {
    const userId = session.user.id.toString();
    const postId = param.id.toString();

    try {
      const response = await axios.post("/api/quitPost", {
        userId,
        postId,
      });
      console.log(response.data);
      router.push("/ridesharerecord"); // Redirect to "/ridesharerecord"
    } catch (error) {
      console.log(error);
    }
  };

  const startPost = async () => {
    const postId = param.id.toString();

    try {
      const response = await axios.post("/api/startPost", {
        PostID: postId,
      });

      console.log(response.data);
      setOntheroad(true);
      // 根据需要进行处理
    } catch (error) {
      console.log(error);
    }
  };

  const endPost = async () => {
    const PostID = param.id.toString();

    try {
      await fetch("/api/endPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ PostID }),
      });

      var link = "/feedback/" + PostID;
      router.push(link);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

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

            <CarP>
              出發時間:{" "}
              {moment(data.EstimatedStartingTime).format("YYYY-MM-DD HH:mm:ss")}
            </CarP>
            <CarP>
              目前人數: {data.NumOfJoined}/{data.NumOfMax}
            </CarP>
          </Infowrapper>

          {Ontheroad ? (
            <>
              <Buttonwrap>
                <Button onClick={endPost}>
                  若已抵達目的地，歡迎點我填寫回饋
                </Button>
              </Buttonwrap>
            </>
          ) : (
            <>
              <Buttonwrap>
                {isCreator && !Ontheroad && (
                  <Button onClick={startPost}>開始</Button>
                )}
                <Button
                  onClick={() => {
                    quitPost();
                  }}
                >
                  點擊退出此次共乘
                </Button>
              </Buttonwrap>
            </>
          )}

          <Userwrapper>
            <Hostwrap>
              <CarH3>共乘開團主揪</CarH3>
              <CarP>
                {data.POST_USER.Role === "driver" ? (
                  <BsCarFront />
                ) : (
                  <BsFillPersonFill />
                )}
                {data.CARPOOLUSER.Name}
              </CarP>
              <CarP>電話：{data.CARPOOLUSER.PhoneNumber}</CarP>
            </Hostwrap>
            <Member>
              <CarH3>等待共乘中成員</CarH3>
              {userid && (
                <>
                  {user.map((member) => (
                    <React.Fragment key={member.CarpoolUserID}>
                      <CarP>
                        {member.Role === "driver" ? (
                          <BsCarFront />
                        ) : (
                          <BsFillPersonFill />
                        )}
                        {member.CARPOOLUSER.Name}
                      </CarP>
                      <CarP>電話：{member.CARPOOLUSER.PhoneNumber}</CarP>
                    </React.Fragment>
                  ))}
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
