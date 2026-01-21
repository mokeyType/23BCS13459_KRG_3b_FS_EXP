import React from "react";
import Header from "../Header";
import Logs from "./Logs";
import { data } from "../data/sample_data";
const dashboard = () => {
  const totalCarbonAct = data.reduce((acc, val) => {
    return acc + val.carbon;
  }, 0);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Header></Header>
      <div style={{height:"20%", width:"100%" ,display:"flex",flexDirection:"column",gap:"1rem"}}>
        <h1>Daily Logs</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          {data.map((item) => (
            <p key={item.id}>
              {item.activity} = {item.carbon},
            </p>
          ))}
          <p>TotalCarbon emission : {totalCarbonAct}</p>
        </div>
      </div>
      <Logs></Logs>
    </div>
  );
};

export default dashboard;
