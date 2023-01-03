const DashTable: React.FC = (props: any) => {
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Job</th>
            <th className="px-4 py-2">Favorite Color</th>
            <th className="px-4 py-2">Pets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">Software Engineer</td>
            <td className="border px-4 py-2">Blue</td>
            <td className="border px-4 py-2">Cat</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Jane Doe</td>
            <td className="border px-4 py-2">Product Manager</td>
            <td className="border px-4 py-2">Green</td>
            <td className="border px-4 py-2">Dog</td>
          </tr>
        </tbody>
      </table>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.message}</p>
    </>
  );
};

export default DashTable;
