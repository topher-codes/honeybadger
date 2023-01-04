const DashTable: React.FC = (props) => {
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Message</th>
          </tr>
        </thead>
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
      </table>
    </>
  );
};

export default DashTable;
