import React, { useState } from "react";
import "./component/app.css";

const App = () => {
  const [size, setSize] = useState(8);
  const thenum = parseInt(size);
  let row = Array.from({ length: thenum }, (_, i) => i + 1);
  let col = row;
  console.log(col);
  return (
    <div className="container board">
      <label>Input Chess Board Size: </label>

      <input type="integer" onChange={(e) => setSize(e.target.value)} />

      <table className="forborder">
        {row.map((x) => {
          return (
            <tr>
              {col.map((y) => {
                const bg = (x, y) => {
                  if (
                    (x % 2 == 0 && y % 2 !== 0) ||
                    (x % 2 !== 0 && y % 2 == 0)
                  )
                    return "black";
                };
                return (
                  <td className="bgchess" key={x}>
                    <div
                      style={{
                        backgroundColor: bg(x, y),
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
