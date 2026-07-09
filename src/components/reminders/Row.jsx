import {TbMessage, TbMail} from "react-icons/tb";
import {getColors, getReminderColor} from "../../utils/helpers";
import { FaWhatsapp } from "react-icons/fa";

const channelIcon = {
  SMS: TbMessage,
  Email: TbMail,
  Whatsapp: FaWhatsapp
};

export default function Row({item}) {
  const ChannelIcon = channelIcon[item.channel];

  return (
    <div
      className="flex items-center px-4 py-3 border-b border-slate-100 dark:border-slate-700/60
                     hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
    >
      <p className="flex-[2] text-sm font-medium text-slate-800 dark:text-white truncate">
        {item.petName}
      </p>

      <p className="flex-2 text-sm text-slate-500 dark:text-slate-400 truncate">
        {item.type}
      </p>

      <div className="flex-1 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        {ChannelIcon && <ChannelIcon size={15} />}
        {item.channel}
      </div>

      <p className="flex-[2] text-sm text-slate-500 dark:text-slate-400 font-mono">
        {item.date}
      </p>

      <div className="flex-1">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full border ${getColors(item.status)}`}
        >
          {item.status}
        </span>
      </div>
    </div>
  );
}
