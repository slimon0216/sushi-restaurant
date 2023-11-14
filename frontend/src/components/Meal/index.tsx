// @ts-nocheck
import React, { useEffect } from "react";
import "./main.css";
import { Typography } from "@mui/material";

import Search from "./Search.png";

export const Meal = ({}) => {
  return (
    <div className="Meal1">
      {/* <img className="image-25_7083" src={Search} alt="Search" /> */}
      <Typography
        className="Mealtext"
        letterSpacing={0}
        fontSize={24}
        fontWeight={400}
        fontFamily="Roboto"
      >
        餐點 ： 炙燒卡路里系列
      </Typography>
    </div>
  );
};

