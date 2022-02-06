import React from "react";

import { useTranslation } from "react-i18next";

import "./homepage.css";
import Video from "../../assets/videos/video.mp4";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="home-slider">
        <div className="presentation">
          <h1 className="home-title">Romscandinav Consulting</h1>
          <h3>{t("welcomeText")}</h3>
          <button className="home-button">
            <span> SUBSCRIBE NOW</span>
          </button>
        </div>
        <div className="presentation info">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            atque iusto aliquid cum animi laborum placeat minus labore,
            corporis, est beatae ad consectetur architecto sint suscipit eum
            eveniet perspiciatis dignissimos? Facere iste, cum animi laborum
            placeat minus labore, voluptatibus alias libero impedit architecto
            ea? Vel, praesentium.
          </h2>
        </div>
      </div>
      <div className="section-two">
        <div className="first-animation">
          <div className="box">
            <video src={Video} autoPlay muted loop></video>
          </div>
        </div>
        <div className="animation-info">
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            ducimus voluptatum alias recusandae repellendus autem quis at,
            eligendi cumque expedita doloremque sapiente minus, asperiores
            dolorem quos! Ea porro quod deleniti? Nulla non ab reprehenderit
            sapiente? Repudiandae sint blanditiis accusamus quibusdam illo nihil
            consequatur minus. Nobis ratione dignissimos autem nisi minus?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
