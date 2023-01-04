import React from "react";

const DashTableBody = (props) => {
  return (
    <tbody>
      {props.data.map((stuff: any) => (
        <tr key={stuff.id} className="border px-4 py-2">
          <td className="border px-4 py-2">{stuff.id}</td>
          <td className="border px-4 py-2">{stuff.name}</td>
          <td className="border px-4 py-2">{stuff.email}</td>
          <td className="border px-4 py-2">{stuff.message}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default DashTableBody;
