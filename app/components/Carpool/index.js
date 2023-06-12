import React, { useState, useEffect } from "react";
import Select from "react-select";
// import {BsCarFront ,BsFillPersonFill}from 'react-icons/bs'
import axios from "axios";
import moment from "moment";
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
  // ...add more pre-filled data here...
];

// 共乘列表组件
const Carpool = ({ rideshares = MOCK_RIDESHARES, onFilter, parm }) => {
  if (!parm) {
    return;
  }
  const router = useRouter();
  console.log(rideshares);
  const [displayedRideshares, setDisplayedRideshares] = useState(rideshares);
  const updateDisplayedRideshares = (newRideshares) => {
    setDisplayedRideshares(newRideshares);
  };

  // ...

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/searchCreatedPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ parm }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          if (data) {
            const ridesharesData = data.map((item) => ({
              PostID: item.PostID,
              Name: item.CARPOOLUSER.Name,
              POST_USER: item.POST_USER,
              StartingLocation: item.StartingLocation,
              EndingLocation: item.EndingLocation,
              EstimatedStartingTime: item.EstimatedStartingTime,
              NumOfJoined: item.NumOfJoined,
              NumOfMax: item.NumOfMax,
            }));
            setDisplayedRideshares(ridesharesData);
          } else {
            console.log("No data received from the API.");
          }
        } else {
          console.log("Error occurred while fetching data.");
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchData();
  }, [parm]);

  // ...

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

  return (
    <Container>
      <CarH1>共乘列表</CarH1>
      <TitleP>
        <FilterOptions
          onFilter={onFilter}
          updateRideshares={updateDisplayedRideshares}
        />
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
      <Listcotainer>
        {rideshares.map((rideshare, index) => (
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
    // var poolDate = new Date(EstimatedStartingTime);
    // EstimatedStartingTime = poolDate
    //   .toISOString()
    //   .slice(0, 19)
    //   .replace("T", " ");
    var formattedDate = moment(EstimatedStartingTime).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    console.log(formattedDate);
  } catch (error) {
    var Role = "Passenger";
    var formattedDate = "error";
    console.log(error);
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
          <CarP>預計出發時間: {formattedDate}</CarP>
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
  { value: { DrunkAllowed: "Yes" }, label: "醉酒允許" },
  { value: { SmokingAllowed: "Yes" }, label: "煙味允許" },
  { value: { PetAllowed: "Yes" }, label: "寵物允許" },
  { value: { HugeLuggageAllowed: "Yes" }, label: "大型行李允許" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black", // 選中的選項文字顏色設為白色，其他選項文字顏色設為黑色
    backgroundColor: state.isSelected ? "black" : "white", // 選中的選項背景顏色設為黑色，其他選項背景顏色設為白色
  }),
};

const FilterOptions = ({ updateRideshares }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFilter = (selectedOptions) => {
    setSelectedOptions(selectedOptions); // 在狀態中設置所選選項
    const filters = selectedOptions.map((option) => option.value);

    // 將篩選器發送到後端
    axios
      .post("/api/searchpost", { filters })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.user;
          console.log(data);
          const ridesharesData = data.map((item) => ({
            PostID: item.PostID,
            Name: item.CARPOOLUSER.Name,
            POST_USER: item.POST_USER,
            StartingLocation: item.StartingLocation,
            EndingLocation: item.EndingLocation,
            EstimatedStartingTime: item.EstimatedStartingTime,
            NumOfJoined: item.NumOfJoined,
            NumOfMax: item.NumOfMax,
          }));
          updateRideshares(ridesharesData);
        } else {
          console.log("Error occurred while fetching data.");
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
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
