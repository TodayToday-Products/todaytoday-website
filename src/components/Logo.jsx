import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import Log from "../assets/TTIS.svg";

export const FlexContainer = styled.div`
  ${tw`flex items-center`}
  ${tw`cursor-pointer`};
`;
const LogoIcon = styled.img`
  ${tw`lg:w-[95px]   md:w-[9px]  sm:w-[3px] sm:ml-0 lg:ml-24 `};
`;

const Logo = () => (
  <Link to="/">
    <FlexContainer className="" id="logo">
      <LogoIcon src={Log} alt="logo" id="logo"/>
    </FlexContainer>
  </Link>
);

export default Logo;
