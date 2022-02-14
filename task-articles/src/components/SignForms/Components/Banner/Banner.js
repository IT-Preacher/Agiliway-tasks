import React from "react";
import { BannerContainer, Img } from "../../styled.components";

const Banner = () => {
  return (
    <BannerContainer>
      <Img
        src={
          "https://drive.google.com/uc?export=view&id=1aJDoxkYof6Kond82jr-Y16trhSCtlQnz"
        }
        alt="Image with typewriter"
      />
    </BannerContainer>
  );
};

export default Banner;
