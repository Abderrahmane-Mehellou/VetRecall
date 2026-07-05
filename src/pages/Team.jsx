import {LuUserPlus} from "react-icons/lu";
import {TfiMoreAlt} from "react-icons/tfi";
import { generateInitial, getAvatarColors, getColors } from "../utils/helpers";

function Team() {
  return (
    <div className="mt-16 space-y-8">
      {/* Header */}
      <Header />
      <TeamList />
      <Permisions />
    </div>
  );
}

export default Team;

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Team Management
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Invite colleagues and manage roles & permissions.
        </p>
      </div> 
      <buton className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700">
        <LuUserPlus size={20} className="inline-block mr-2" />
        Invite user
      </buton>
    </div>
  );
}

const users = [
  {
    name: "Poland Alyoun",
    email: "poland.alyoun@example.com",
    role: "Clinic Owner",
    status: "Active",
    lastActive: "2023-08-15",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=PolandAlyoun&backgroundColor=FDFDFD",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Veterinarian",
    status: "Inactive",
    lastActive: "2023-08-10",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=JohnDoe&backgroundColor=FDFDFD",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Receptionist",
    status: "Active",
    lastActive: "2023-08-12",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=JaneSmith&backgroundColor=FDFDFD",
  },
  {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "Veterinarian",
    status: "Invited",
    lastActive: "2023-08-14",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=MichaelJohnson&backgroundColor=FDFDFD",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Receptionist",
    status: "Inactive",
    lastActive: "2023-08-11",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=EmilyDavis&backgroundColor=FDFDFD",
  },
];

function TeamList() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 space-y-4">
      <div>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">Users</h1>
        <h1 className="text-sm text-gray-600 dark:text-gray-300">5 members in your clinic</h1>
      </div>
      <div>
        <TableHeader />
        <div>
          {users.map((user, index) => (
            <TableRow key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TableHeader(){
  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-slate-700 p-4 rounded-t-lg">
      <div className="flex-2">
        <h1 className="text-gray-900 dark:text-white font-medium">Member</h1>
      </div>
      <div className="flex-1">
        <h1 className="text-gray-900 dark:text-white font-medium">Role</h1>
      </div>
      <div className="flex-1">
        <h1 className="text-gray-900 dark:text-white font-medium">Status</h1>
      </div>
      <div className="flex-1">
        <h1 className="text-gray-900 dark:text-white font-medium">Last Active</h1>
      </div>
      <div className="flex-1">
        <h1 className="text-gray-900 text-end dark:text-white font-medium">Actions</h1>
      </div>
    </div>
  )
}

function TableRow({user}){

  return (
    <div className="flex justify-between items-center h-15 bg-gray-50 dark:bg-slate-800 p-4 border-b border-gray-200 dark:border-slate-700">
      <div className=" flex gap-2 flex-2">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className={`w-10 h-10 rounded-full inline-block border-2 ${getAvatarColors(user.name)}`}
          />
        ) : (
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${getAvatarColors(user.name)}`}
          >
            {generateInitial(user.name)}
          </div>
        )}
        <div>
          <p className="text-gray-900 dark:text-white font-semibold">
            {user.name}
          </p>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-gray-900 dark:text-white">{user.role}</p>
      </div>
      <div className="flex-1">
        <p
          className={`font-medium flex items-center justify-center ${getColors(user.status)} px-4 py-1 rounded-full border w-20`}
        >
          {user.status}
        </p>
      </div>
      <div className="flex-1">
        <p className="text-gray-900 dark:text-white">{user.lastActive}</p>
      </div>
      <div className="flex-1 flex justify-end">'
        <button className="bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-slate-600 transition-all duration-300 cursor-pointer">
        <TfiMoreAlt />
        </button>
      </div>
    </div>
  );}

const stats = [
  {
    title: "Clinic Owner",
    description: "Full access to clinic, billing and team management.",
    permitions: [
      "All clinic data",
      "Billing and invoices",
      "Team management",
      "Reports and analytics",
    ],
  },
  {
    title: "Veterinarian",
    description: "Access to patient records, appointments and prescriptions.",
    permitions: [
      "Patient records",
      "Appointments and scheduling",
      "Medical records and prescriptions",
      "Reminders and notifications",
    ],
  },
  {
    title: "Receptionist",
    description: "Access to appointments, billing and customer communication.",
    permitions: ["Appointments", "Reminders", "Limited patient view"],
  },
];

function Permisions() {
  return (
    <div className="dark:bg-slate-800 rounded-lg p-4 space-y-4 bg-white shadow-md">
      <div>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
          Permissions
        </h1>
        <h1 className="text-sm text-gray-600 dark:text-gray-300">
          Manage roles & permissions for your team members
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 
             border border-slate-200/70 dark:border-slate-700/70
             shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-8px_rgba(15,23,42,0.08)]
             hover:shadow-[0_1px_2px_rgba(15,23,42,0.06),0_20px_40px_-12px_rgba(15,23,42,0.18)]
             hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-500/30
             transition-all duration-300 ease-out overflow-hidden"
          >
            {/* accent glow on hover */}
            <div
              className="absolute -top-16 -right-16 w-32 h-32 bg-indigo-500/10 rounded-full 
                  blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="relative space-y-3">
              <h1 className="text-slate-900 dark:text-white font-semibold text-lg tracking-tight">
                {stat.title}
              </h1>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {stat.description}
              </p>

              <ul className="space-y-2 pt-1">
                {stat.permitions.map((permition, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 
                            dark:bg-indigo-500 shrink-0"
                    />
                    <span>{permition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}