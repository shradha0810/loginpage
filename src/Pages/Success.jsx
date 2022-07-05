import React from "react";
import { useLocation } from "react-router";
const Success = () => {
  const location = useLocation();
  const finaldata=location.state.data;

  
  return (
    <div className="App">
      <h1>LOGIN SUCCESSFUL</h1>
      <table>
        <tr>
          <th>User Id</th>
          <th>UserName</th>
          <th>Business Id</th>
          <th>Business Name</th>
        </tr>
        {finaldata.map((res) => (
          <tr key={res.ID}>
            <td>{res.ID}</td>
            <td>{res.UserName}</td>
            <td>{res.BusinessID}</td>
            <td>{res.BusinessName}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Success;
