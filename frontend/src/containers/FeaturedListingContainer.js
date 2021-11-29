import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../components";
import { ListingItemContainer } from "./index";
import { getFeaturedList } from "../redux/actions/propertiesAction";
import { getContract, getAccount, getRealEstateLength } from "../helpers/contract"
import BigNumber from "bignumber.js";

const FeaturedListingContainer = (address) => {
  const dispatch = useDispatch();


  const featuredList = useSelector((state) => state.featuredProperty);

  const { featured: featuredProperties } = featuredList;
  const [realEstate, setRealEstate] = useState([]);

  async function getRealEstate () {
    const { signer } = await getAccount()
    const contract = await getContract(signer)
    const length = (await getRealEstateLength()).toNumber();
    let _realEstates = [];
    for (let i = 0; i < length; i++) {
      let _realEstate = new Promise(async (resolve, reject) => {
        let p = await contract.getRealEstate(i);
        resolve({
          index: i,
          owner: p[0],
          name: p[1],
          image: p[2],
          description: p[3],
          location: p[4],
          price: (new BigNumber(p[5])).toNumber()
        });
      });
      _realEstates.push(_realEstate);
    }
    const result = await Promise.all(_realEstates)
    setRealEstate(result);
  }

  useEffect(() => {
    dispatch(getFeaturedList());
  }, [dispatch]);

  useEffect(() => {
    if (address) {
      getRealEstate();
      console.log("-----")
      console.log(realEstate)
    }
  }, [address]);

  return (
    <Section bgColor="--bs-light">
      <Section.InnerContainer>
        <Section.Header>
          <Section.Title>Our Real Estate Listing</Section.Title>
        </Section.Header>
        <Section.Content>
          {realEstate.map((featured) => (
            <ListingItemContainer key={featured.id} featured={featured} />
          ))}
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default FeaturedListingContainer;
