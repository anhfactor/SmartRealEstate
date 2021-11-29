import React from "react";

import { Listing } from "../components";

const ListingItemContainer = ({ featured, width }) => {
  console.log(featured.image)
  
  return (
    <Listing width={width}>
      <Listing.Top>
        <Listing.TopItem>
          <Listing.Image source={featured.image} />
          <Listing.TopItemContainer>
            <Listing.TopItemInfo>
              <Listing.Icon></Listing.Icon>
              <Listing.Text location>{featured.location}</Listing.Text>
            </Listing.TopItemInfo>
          </Listing.TopItemContainer>
        </Listing.TopItem>
      </Listing.Top>
      <Listing.Bottom>
        <Listing.BottomItem>
          <Listing.Title>
            <Listing.Anchor>
              {featured.name}
            </Listing.Anchor>
          </Listing.Title>
          <Listing.Price>$ {featured.price}</Listing.Price>
          <Listing.Text description>
            {featured.description}
          </Listing.Text>
          <Listing.AgentContainer>
            <Listing.AgentName>
              <Listing.Anchor>
                Owner: 0x...{featured.owner.substr(-12)}
              </Listing.Anchor>
            </Listing.AgentName>
          </Listing.AgentContainer>
        </Listing.BottomItem>
      </Listing.Bottom>
    </Listing>
  );
};

export default ListingItemContainer;
