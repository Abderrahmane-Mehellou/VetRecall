import {generateInitial, getAvatarColors, getColors} from "../../utils/helpers";

function Row({item}) {
  console.log(item);
  return (
    <div className="flex justify-around p-3 h-14 items-center w-full text-start border-b hover:bg-gray-100  dark:hover:bg-slate-800 transition-all">
      <div className="flex flex-2 text-sm gap-3">
        <span
          className={`flex justify-center items-center ${getAvatarColors(item.name)} border-2 px-2 py-1 rounded-full`}
        >
          {generateInitial(item.name)}
        </span>
        <div>
          <h1 className="font-bold">{item.name}</h1>
          <h1 className="font-thin text-gray-500">{item.ownerName}</h1>
        </div>
      </div>
      <p className="flex-1 text-sm">{item.species}</p>
      <p className="flex-2 text-sm">{item.breed}</p>
      <p className="flex-1 text-sm">{item.age}</p>
      <p className="flex-2 text-sm">
        {item.lastVisit.toDate().toLocaleDateString()}
      </p>
      <p className="flex-2 text-sm">
        {item.nextAppointment.toDate().toLocaleDateString()}
      </p>
      <div className="flex-2 text-sm ">
        <span
          className={` px-4 py-1 border-2 rounded-full text-sm ${getColors(item.status)}`}
        >
          {item.status}
        </span>
      </div>
      <p className="flex-1">Actions</p>
    </div>
  );
}

export default Row;
