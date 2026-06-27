import {generateInitial, getColors} from "../../../utils/helpers";

function Table({data}) {
  return (
    <div className="w-full">
      {data.map((item) => (
        <TableItem item={item} key={item.name} />
      ))}
    </div>
  );
}

export default Table;

function TableItem({item}) {
  return (
    <>
      <div className="flex justify-between items-center mb-3 w-full h-auto">
        <div className="flex justify-between space-x-2">
          <span className="flex justify-center items-center bg-slate-300 text-slate-500 px-3 rounded-full">
            {generateInitial(item.name)}
          </span>
          <div>
            <div className="flex space-x-2">
              <h1 className="font-bold">{item.name} </h1>
              <h1 className="text-gray-500">&bull; {item.breed}</h1>
            </div>
            <div className="flex space-x-2">
              <h1 className="text-gray-500">Owner {item.owner} &bull;</h1>
              <h1 className="text-gray-500">Last visit {item.lastVisit}</h1>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center items-center ${getColors(item.status)} px-3 h-7  rounded-full border`}
        >
          {item.status}
        </div>
      </div>
      <hr className="h-1 text-gray-300" />
    </>
  );
}
