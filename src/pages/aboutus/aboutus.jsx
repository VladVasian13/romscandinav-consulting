import React from "react";

import "./aboutus.css";
import Placeholder from "../../assets/images/placeholder.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="about-subtitle">
        <h2>Our Story</h2>
      </div>
      <div className="content">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat
          officia perferendis id. Amet, molestiae voluptatibus enim quasi eos
          quae iusto dicta deserunt rem corporis expedita pariatur maxime harum
          cumque minus temporibus minima possimus aliquam veniam labore. Sit
          minus rem ullam. Delectus dolores iusto voluptates fugit aspernatur
          sed aliquid maiores maxime, assumenda accusamus eligendi cupiditate
          dignissimos, vel tempore quos harum magni. Architecto in soluta
          suscipit numquam unde iusto est corrupti accusamus, vero dolor fugiat,
          sequi quasi? At sed deleniti suscipit aliquid cumque. Accusantium,
          commodi aspernatur suscipit asperiores sint itaque, nostrum tempora
          magni eligendi neque quo iusto distinctio saepe ad at, necessitatibus
          similique voluptates. Corrupti id dolorum perferendis veritatis nulla,
          ipsa minus quos consequuntur voluptas ea illum voluptate quia! Nulla
          similique eveniet beatae corporis nostrum eaque, ipsum sit repellat.
          Provident quibusdam aut ab dignissimos eos in rem! Officiis libero eum
          placeat aliquid deleniti sapiente corporis vel? Quidem dolore
          voluptate eaque numquam! Harum neque eum, dolor, perferendis,
          architecto tenetur quam fuga soluta doloremque nemo sunt eos
          inventore. Error illum repellendus, vero placeat ut incidunt deserunt
          hic velit consequatur ea nesciunt eligendi, corrupti quisquam numquam
          deleniti. Laboriosam rerum odit pariatur tempore rem repudiandae
          nesciunt esse soluta consequatur ipsam, itaque provident
          necessitatibus ut inventore saepe doloribus?
        </h3>
        <img src={Placeholder} alt="placeholder" className="about-image" />
      </div>
    </div>
  );
};

export default AboutUs;
