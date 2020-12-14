import React, { useState } from "react";
import "./component/app.css";

const App = () => {
  const [size, setSize] = useState(8);
  const thenum = parseInt(size) 
  let row = Array.from({length: thenum}, (_, i) => i + 1)
  let col = row;
  // console.log(col);
  return (
    <div className="container">
      <label>Input Chess Board Size: </label>

      <input type="integer" onChange={(e) => setSize(e.target.value)} />
      
       <table className="forborder">
        {row.map((item) => {
          return (
            <tr >
              {col.map((x) => {
                const bg = (item)=>{
                  return (item % 2 ==0)?"black":"white"
                }
                return (
                  <td className="bgchess" key={x} >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    ></div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
   
  );
};

export default App;
