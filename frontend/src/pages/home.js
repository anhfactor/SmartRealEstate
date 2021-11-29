import React from "react";
import {
  HeaderContainer,
  FeaturedListingContainer,
  FeaturedAgentsContainer,
  HomeContactContainer,
  FooterContainer,
} from "../containers";

const Home = (props) => {
  return (
    <>
      <HeaderContainer bg="true" source="/images/banners/banner4.jpg" address={props.address} connectWallet={props.connectWallet}/>
      <FeaturedListingContainer address={props.address}/>
      {/* <FeaturedAgentsContainer /> */}
      <HomeContactContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
