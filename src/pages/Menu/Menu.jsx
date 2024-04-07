import React from "react";
import "./Menu.css";
import { menu_list } from "../../assets/assets";

const Menu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Our mission is to satisfying your craving and elevate your dining
        experience, one delicious meal at a time
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
          return (
            <div key={index} className="explore-menu-list-item">
               <img src={item.menu_image} alt="" />
               <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Menu;
