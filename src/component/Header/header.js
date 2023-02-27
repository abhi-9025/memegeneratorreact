import React from "react";
import "./header.css";
import trollFace from "../../assets/Trollface.png";

const Header = () => {
  return (
    <div className="headerBody">
        <div style={{flexDirection:"row",display:"flex",alignItems:"center"}}>
      <img src={trollFace} width={32} height={27} />
      <p style={{marginLeft:"10px",color:"white",fontSize:"18px"}}>Meme Generator</p>
      </div>
      <p  style={{color:"white",fontSize:"16px"}}>React Course - Project 3</p>
    </div>
  );
};

export default Header;
