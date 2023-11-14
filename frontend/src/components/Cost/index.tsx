// @ts-nocheck
import React, { useEffect } from "react";
import "./main.css";
import { Typography } from "@mui/material";

import Search from "./Search.png";

export const Cost = ({}) => {
  return (
    <div className="Cost1">
      {/* <img className="image-25_7083" src={Search} alt="Search" /> */}
      <Typography
        className="Costtext"
        letterSpacing={0}
        fontSize={24}
        fontWeight={400}
        fontFamily="Roboto"
      >
        金額 ： 100
      </Typography>
    </div>
  );
};

