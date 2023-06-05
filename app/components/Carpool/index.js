import React, { useState } from "react";
import Select from "react-select";
// import {BsCarFront ,BsFillPersonFill}from 'react-icons/bs'
import axios from "axios";
import {
  Swrapper,
  SearchBar,
  ClearButton,
  Phone,
  Infowrapper,
  Container,
  Personicon,
  Drivericon,
  TitleP,
  CarP,
  Listcotainer,
  CarH1,
  CarH3,
  BtnWrapper,
  CarH2,
  CarGroup,
  Carform,
  CarButton,
  Header,
} from "./CarpoolElements";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Mock data
const MOCK_RIDESHARES = [
  {
    rideshareid: 1,
    creatorName: "John Doe",

    drunkAllowed: "no",
    smokeAllowed: "no",
    petAllowed: "no",
    bigLuggageAllowed: "yes",
    description: "Looking for passengers to share the ride.",
    status: "Not Started",
  },
  {
    rideshareid: 2,
    creatorName: "Jane Doe",
    creatorPhone: "098-765-4321",
    startingLocation: "Suburbia",
    endingLocation: "信義",
    estimatedStartingTime: "2023-05-24 09:00:00",
    NumOfMax: 4,
    NumOfJoined: 2,
    userRole: "passenger",
    drunkAllowed: "yes",
    smokeAllowed: "no",
    petAllowed: "yes",
    bigLuggageAllowed: "no",
    description: "Looking for a ride to the city center.",
    status: "Not Started",
  },
  {
    rideshareid: 1,
    creatorName: "John Doe",
    creatorPhone: "123-456-7890",
    startingLocation: "北車",
    endingLocation: "Suburbia",
    estimatedStartingTime: "2023-05-24 09:00:00",
    NumOfMax: 5,
    NumOfJoined: 3,
    userRole: "driver",
    drunkAllowed: "no",
    smokeAllowed: "no",
    petAllowed: "no",
    bigLuggageAllowed: "yes",
    description: "Looking for passengers to share the ride.",
    status: "Not Started",
  },
  {
    rideshareid: 1,
    creatorName: "John Doe",
    creatorPhone: "123-456-7890",
    startingLocation: "City Center",
    endingLocation: "Suburbia",
    estimatedStartingTime: "2023-05-24 09:00:00",
    NumOfMax: 5,
    NumOfJoined: 3,
    userRole: "driver",
    drunkAllowed: "no",
    smokeAllowed: "no",
    petAllowed: "no",
    bigLuggageAllowed: "yes",
    description: "Looking for passengers to share the ride.",
    status: "Not Started",
  },
  {
    rideshareid: 1,
    creatorName: "John Doe",
    creatorPhone: "123-456-7890",
    startingLocation: "政大",
    endingLocation: "信義",
    estimatedStartingTime: "2023-05-24 09:00:00",
    NumOfMax: 5,
    NumOfJoined: 3,
    userRole: "driver",
    drunkAllowed: "no",
    smokeAllowed: "no",
    petAllowed: "no",
    bigLuggageAllowed: "yes",
    description: "Looking for passengers to share the ride.",
    status: "Not Started",
  },
  {
    rideshareid: 1,
    creatorName: "John Doe",
    creatorPhone: "123-456-7890",

    endingLocation: "Suburbia",
    estimatedStartingTime: "2023-05-24 09:00:00",
    NumOfMax: 5,
    NumOfJoined: 3,
    userRole: "driver",
    drunkAllowed: "no",
    smokeAllowed: "no",
    petAllowed: "no",
    bigLuggageAllowed: "yes",
    description: "Looking for passengers to share the ride.",
    status: "Not Started",
  },
  // ...add more pre-filled data here...
];

// 共乘列表组件
const Carpool = ({ rideshares = MOCK_RIDESHARES, onFilter }) => {
  const router = useRouter();
  console.log(rideshares);
  const [displayedRideshares, setDisplayedRideshares] = useState(rideshares);
  const [abc, setAbc] = useState();

  const [searchQuery, setSearchQuery] = useState("");
  //const [joinedUsers, setJoinedUsers] = useState([]);

  // const addUser = (user) => {
  //   setJoinedUsers((prevUsers) => [...prevUsers, user]);
  // }
  const handleSearchChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchQuery(searchQuery);
    const filteredRideshares = rideshares.filter(
      (rideshare) =>
        rideshare.startingLocation.toLowerCase().includes(searchQuery) ||
        rideshare.endingLocation.toLowerCase().includes(searchQuery)
    );
    setDisplayedRideshares(filteredRideshares);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setDisplayedRideshares(rideshares);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFilter = async (selectedOptions) => {
    setSelectedOptions(selectedOptions); // 在狀態中設置所選選項
    const filters = selectedOptions.map((option) => option.value);

    // 將篩選器發送到後端
    const res = await axios.post("/api/searchpost", { filters });

    // 假設你的後端返回匹配的共乘
    // 現在可以對返回的共乘做些什麼
    console.log(res.data.user[0].EndingLocation);
    console.log(res.data);
    console.log(res.data.user[0].POST_USER[0].Role);

    setAbc(res.data.user[0].EndingLocation);
    setDisplayedRideshares(res.data.user);
  };

  return (
    <Container>
      <CarH1>共乘列表</CarH1>
      <TitleP>
        {/* <FilterOptions onFilter={onFilter} /> */}
        <CarGroup>
          <CarH2>篩選:</CarH2>
          <Select
            isMulti
            name="filters"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            styles={customStyles}
            onChange={handleFilter}
          />
        </CarGroup>
      </TitleP>
      <BtnWrapper>
        <CarButton onClick={() => router.push("/createCarpool")}>
          新增你的共乘
        </CarButton>
      </BtnWrapper>
      <Swrapper>
        <SearchBar
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <ClearButton onClick={handleClearSearch}>Clear</ClearButton>
      </Swrapper>
      <Listcotainer>
        {displayedRideshares.map((rideshare, index) => (
          <RideshareItem key={index} {...rideshare} />
        ))}
      </Listcotainer>
    </Container>
  );
};

// 共乘信息组件
// drunkAllowed,
// smokeAllowed,
// petAllowed,
// bigLuggageAllowed,
// description

const RideshareItem = ({
  rideshareid,
  PostID,
  Name,
  POST_USER,
  StartingLocation,
  EndingLocation,
  EstimatedStartingTime,
  NumOfJoined,
  NumOfMax,
  addUser,
}) => {
  const router = useRouter();
  const { data: session } = useSession();
  try {
    console.log(POST_USER[0].Role);
    var Role = POST_USER[0].Role;
    var poolDate = new Date(EstimatedStartingTime);
    EstimatedStartingTime = poolDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    console.log(EstimatedStartingTime);
  } catch (error) {
    var Role = "Passenger";
  }
  const joinPool = async () => {
    var joinRole;
    if (Role == "Driver") {
      joinRole = "Passenger";
    } else {
      joinRole = "Driver";
    }

    console.log(session.user.id, PostID, joinRole);
    var id = session.user.id;
    var postId = PostID;
    var joinrole = joinRole;
    const response = await fetch("/api/joinpool", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, postId, joinrole }),
    });

    console.log(response);
    var link = "/post/" + postId;
    router.push(link);
  };

  return (
    <>
      <Carform>
        <Header>
          {Role === "Driver" ? <Drivericon /> : <Personicon />}

          <CarH3> {Name}</CarH3>
        </Header>

        <Infowrapper>
          <CarP>出發地: {StartingLocation}</CarP>
          <CarP>目的地: {EndingLocation}</CarP>
          <CarP>預計出發時間: {EstimatedStartingTime}</CarP>
          <CarP>
            目前人數: {NumOfJoined}/{NumOfMax}
          </CarP>
        </Infowrapper>

        <BtnWrapper>
          <CarButton primary="true" dark="true" onClick={joinPool}>
            加入共乘
          </CarButton>
        </BtnWrapper>
      </Carform>
    </>
  );
};

// 筛选选项组件
const options = [
  { value: "drunkAllowed", label: "醉酒允許" },
  { value: "smokeAllowed", label: "煙味允許" },
  { value: "petAllowed", label: "寵物允許" },
  { value: "bigLuggageAllowed", label: "大型行李允許" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black", // 選中的選項文字顏色設為白色，其他選項文字顏色設為黑色
    backgroundColor: state.isSelected ? "black" : "white", // 選中的選項背景顏色設為黑色，其他選項背景顏色設為白色
  }),
};

const FilterOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFilter = async (selectedOptions) => {
    setSelectedOptions(selectedOptions); // 在狀態中設置所選選項
    const filters = selectedOptions.map((option) => option.value);

    // 將篩選器發送到後端
    const res = await axios.post("/api/searchpost", { filters });

    // 假設你的後端返回匹配的共乘
    // 現在可以對返回的共乘做些什麼
    console.log(res.data);
  };

  return (
    <div>
      <CarGroup>
        <CarH2>篩選:</CarH2>
        <Select
          isMulti
          name="filters"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          styles={customStyles}
          onChange={handleFilter}
        />
      </CarGroup>
    </div>
  );
};

export default Carpool;
