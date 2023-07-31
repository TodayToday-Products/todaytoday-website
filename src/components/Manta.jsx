import React, { useEffect } from "react";
import tw from "twin.macro";

import AOS from "aos";
import "aos/dist/aos.css";

import Indicator from "../assets/Mantra.svg";
import Trusted from "../assets/Trusted-by.svg";
import LetMove from "../assets/Letmoveit.svg";
import Today from "../assets/today.svg";
import Joint from "../assets/joint.svg";
import styled, { keyframes } from "styled-components";
import Zoom from "react-reveal/Zoom";

export const ContentContainer = styled.div`
  ${tw`text-base p-[calc(8px + 1.5625vw)] pb-10  ml-24`}
`;
export const DivContainer = styled.div`
  ${tw`grid gap-5 lg:gap-0 md:grid-cols-1 lg:grid-cols-1`}
`;
export const Col = styled.div`
  ${tw`w-full flex flex-col lg:justify-self-center`}
`;

export const Header = styled.h1`
  ${tw`text-2xl font-bold text-black`}
`;
export const Paragraph = styled.p`
  ${tw`text-lg mt-4 text-black`}
`;

export default function Manta() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContentContainer className="bg-white lg:-mt-20 mt-[75px]" id="content2">
        <DivContainer id="contentContainer">
          <Col className="relative">
            <div className="lg:my-4 md:ml-4">
              <Header>Our Manta</Header>
              <Zoom>
                <Paragraph
                  className="flex justify-center items-center py-4"
                  id="header"
                  data-aos="zoom-out-up"
                >
                  <div className="">
                    A chair in a room, a room in a house, a house in an
                    environment,an environment in a city plan
                  </div>
                </Paragraph>
                <img src={Indicator} />
                <div className="py-4">
                  <img src={Trusted} />

                  <div className="flex justify-center items-center py-4">
                    <img src={LetMove} className="" />
                    <img src={Today} className="ml-8" />
                    <img src={Joint} className="ml-8" />
                  </div>
                </div>
              </Zoom>
              <div className="flex justify-center items-center py-2">
                Contact Us
              </div>
              <div
                class=" flex flex-col 
                    items-center justify-center"
              >
                <form>
                  <input
                    aria-label="Fullname"
                    type="text"
                    placeholder="Fullname"
                    class="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
                  />
                  <input
                    aria-label="Email Address"
                    type="password"
                    placeholder="Email Address"
                    class="text-sm text-gray-base w-full mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded mb-2"
                  />
                  <textarea
                    rows="3"
                    class="text-sm text-gray-base w-full
        
                              mr-3 border 
                              border-gray-200 rounded mb-2 "
                    placeholder="Comment"
                  ></textarea>

             
                </form>
                <button className="flex justify-center items-center py-3 px-12 text-white rounded bg-[#0FA556]">Submit</button>
              </div>
            </div>
          </Col>
        </DivContainer>
      </ContentContainer>
    </>
  );
}
