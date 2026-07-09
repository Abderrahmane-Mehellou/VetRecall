import TableContainer from "./TableContainer";
import Templates from "./Templates";

function Main() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-4 mt-6">
      <TableContainer />
      <Templates />
    </div>
  );
}

export default Main;
