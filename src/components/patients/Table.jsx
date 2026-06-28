import TableHeader from "./TableHeader";
import Row from "./Row";
import Footer from "./Footer";
import Spinner from "../../ui/Spinner";

function Table({patients, isLoading, page, setPage, total}) {
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner size="lg" />
      </div>
    );

  if (!patients.length)
    return (
      <div className="flex justify-center items-center h-40 text-gray-400">
        No patients found.
      </div>
    );

  return (
    <div>
      <TableHeader />
      <div>
        {patients.map((infos) => (
          <Row item={infos} key={infos.id} />
        ))}
      </div>
      <Footer page={page} total={total} setPage={setPage} />
    </div>
  );
}

export default Table;
