import {
  generateInitial,
  getColors,
  getIconAndColor,
  getUpcomingColors,
} from "../../../utils/helpers";

function Table({data}) {
  return (
    <div>
      {data.map((item) => (
        <TableItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Table;

function TableItem({item}) {
  const {colors, Icon} = getIconAndColor(item.type);
  return (
    <>
      <div className="flex justify-between items-center p-2 mb-3 w-full h-auto">
        <div className="flex justify-between space-x-2">
          <span
            className={`flex justify-center items-center px-3 rounded-full ${colors}`}
          >
            <Icon size={20} />
          </span>
          <div>
            <div className="flex space-x-2">
              <h1 className="font-bold">{item.title} </h1>
            </div>
            <div className="flex space-x-2">
              <h1 className="text-gray-500">{item.patient} &bull;</h1>
              <h1 className="text-gray-500"> {item.channel} &bull; </h1>
              <h1 className="text-gray-500"> {item.scheduledAt} </h1>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center items-center ${getUpcomingColors(item.status)} px-3 h-7  rounded-full border`}
        >
          {item.status}
        </div>
      </div>
      <hr className="h-1 text-gray-300" />
    </>
  );
}
