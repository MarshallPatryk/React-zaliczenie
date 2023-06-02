import React, { useEffect, useState } from "react";
import SearchInput from "../../small/SearchInput/SearchInput";
import Avatar from "../../small/Avatar/Avatar";
import axios from "axios";
import {
  FirstPlace,
  Container,
  FifthPlace,
  SeventhPlace,
  SecondPlace,
  ThirdPlace,
  SearchPlace,
  FourthPlace,
  SixthPlace,
} from "./Dashboard.style";

const Dashboard = () => {
  const [apiImage, setImage] = useState("");
  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/search`).then((res) => {
      setImage(res.data[0].url);
    });
  }, []);
  
  return (
    <Container>
      <SearchPlace>
        <SearchInput />
        <Avatar />
      </SearchPlace>
      <FirstPlace>First Place</FirstPlace>
      <SecondPlace>Second Place</SecondPlace>
      <ThirdPlace>Third Place</ThirdPlace>
      <FourthPlace>Fourth Place</FourthPlace>
      <FifthPlace>Fifth Place</FifthPlace>
      <SixthPlace><img src={apiImage} alt="Api test" height={250}/></SixthPlace>
      <SeventhPlace>Seventh Place</SeventhPlace>
    </Container>
  );
};

export default Dashboard;
