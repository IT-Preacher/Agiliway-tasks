import React from "react";
import { BannerContainer, Img } from "../../styled.components";
// import ImgBanner from "https://lh5.googleusercontent.com/vFiQZ-l_EagtFe332a2Bx_-YEI1mVspUkf2hAjt9a8LUW1k8qZCRCrDa5y7yReDZJ8p4q5VqDgOAeYfrYVZg=w1920-h969-rw";

const Banner = () => {
  return (
    <BannerContainer>
      <Img
        src={
          "https://lh5.googleusercontent.com/vFiQZ-l_EagtFe332a2Bx_-YEI1mVspUkf2hAjt9a8LUW1k8qZCRCrDa5y7yReDZJ8p4q5VqDgOAeYfrYVZg=w1920-h969-rw"
        }
        alt="Image with typewriter"
      />
    </BannerContainer>
  );
};

export default Banner;
