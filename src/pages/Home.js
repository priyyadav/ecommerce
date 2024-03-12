import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import Footer from "../components/Footer";
import FeatureProduct from "../components/FeatureProduct";

const Home = () => {
  return <Wrapper className="test">
    <HeroSection name="SmartBuys"></HeroSection>
    <FeatureProduct></FeatureProduct>
    <Services></Services>
    <Trusted></Trusted>
    <Footer></Footer>
  </Wrapper>;
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;