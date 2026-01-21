import React from "react";
import { data } from "../data/sample_data";

const Logs = () => {
  return (
    <div style={{display:"flex" , gap:"2rem", height:"30%",width:"100%"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem",borderRadius:"10px",border:"1px solid white",padding:"1rem"}}>
        <h2>Higher Comsumption</h2>
        <div>
          {data
            .filter((item) => item.carbon > 4)
            .map((item) => (
              <p key={item.id} style={{ color: "red" }}>
                {item.activity} = {item.carbon}
              </p>
            ))}
        </div>
      </div>

      <div style={{display:"flex",flexDirection:"column",gap:"1rem",borderRadius:"10px",border:"1px solid white",padding:"1rem"}}>
        <h2>Lower Comsumption</h2>
        <div>
          {data
            .filter((item) => item.carbon <= 4)
            .map((item) => (
              <p key={item.id} style={{ color: "green" }}>
                {item.activity} = {item.carbon}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Logs;
