import {LuSparkles} from "react-icons/lu";
import {TbVaccine} from "react-icons/tb";
import {FaStethoscope, FaPaw} from "react-icons/fa";
import {PiPawPrintBold} from "react-icons/pi";
import {IoShieldCheckmarkOutline} from "react-icons/io5";
import {GoOrganization} from "react-icons/go";
import {IoNotificationsOutline} from "react-icons/io5";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";

function LeftSide() {
  return (
    <div className="flex relative justify-between overflow-hidden flex-col p-10 bg-[radial-gradient(circle_at_15%_10%,rgba(110,168,255,.35),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(79,142,247,.45),transparent_40%),radial-gradient(circle_at_70%_35%,rgba(168,204,255,.30),transparent_30%),linear-gradient(135deg,#F5FAFF_0%,#DCEEFF_45%,#CFE5FF_100%)] flex-4">
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25%      { transform: translate(10px, -15px) rotate(1deg); }
          50%      { transform: translate(-5px, -25px) rotate(-1deg); }
          75%      { transform: translate(-12px, -8px) rotate(0.5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          30%      { transform: translate(-12px, -18px) rotate(-1.5deg); }
          60%      { transform: translate(8px, -10px) rotate(1deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          40%      { transform: translate(14px, 12px) rotate(1deg); }
          70%      { transform: translate(-8px, 20px) rotate(-0.8deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          35%      { transform: translate(-10px, 14px) rotate(-6deg); }
          65%      { transform: translate(8px, -10px) rotate(5deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          45%      { transform: translate(12px, -10px) rotate(7deg); }
          80%      { transform: translate(-6px, 8px) rotate(-4deg); }
        }
        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          40%      { transform: translate(-14px, -10px) rotate(-8deg); }
          75%      { transform: translate(10px, 14px) rotate(6deg); }
        }
        @keyframes float7 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50%      { transform: translate(10px, 16px) rotate(8deg); }
        }
        .float-1 { animation: float1 7s ease-in-out infinite; }
        .float-2 { animation: float2 9s ease-in-out infinite; }
        .float-3 { animation: float3 8s ease-in-out infinite; }
        .float-4 { animation: float4 6s ease-in-out infinite; }
        .float-5 { animation: float5 10s ease-in-out infinite; }
        .float-6 { animation: float6 8.5s ease-in-out infinite; }
        .float-7 { animation: float7 11s ease-in-out infinite; }
      `}</style>

      {/* Decorative floating icons */}
      <div className="absolute top-16 right-20 float-4 text-blue-600 bg-blue-300 p-2 rounded-full pointer-events-none">
        <TbVaccine size={36} />
      </div>

      <div className="absolute bottom-32 right-32 float-5 text-blue-300 bg-blue-600 p-3 rounded-full pointer-events-none">
        <FaStethoscope size={32} />
      </div>

      {/* Dog paw */}
      <div className="absolute top-32 right-44 float-6 text-blue-400/40 pointer-events-none">
        <FaPaw size={35} />
      </div>

      {/* Cat paw */}
      <div className="absolute bottom-10 left-1/2 float-7 text-blue-400/40 pointer-events-none">
        <PiPawPrintBold size={35} />
      </div>

      <Header />
      <SecondSection />
      <FloatingCards />
      <Footer /> 
    </div>
  );
}

export default LeftSide;

function Header() {
  return (
    <div className="flex items-center gap-4">
      <img src="/images/logo_green.png" className="w-10 h-10 rounded-full" />
      <p className="font-black text-xl">
        Vet<span className="text-blue-500">Recall</span>
      </p>
    </div>
  );
}

function SecondSection() {
  return (
    <div className="flex flex-col gap-7 justify-center">
      <span className="flex justify-center items-center text-blue-600 font-medium gap-2 w-50 h-10 rounded-full bg-blue-200">
        <LuSparkles />
        <p>Smart Clinic OS</p>
      </span>
      <span className="font-black text-4xl">
        <h1>Smart Care.</h1>
        <h1 className="text-blue-600">Stronger Bonds.</h1>
      </span>
      <p className="text-gray-500 font-medium w-80">
        Manage appointments, reminders, patients, vaccinations and clinic
        operations from one powerful dashboard.
      </p>
    </div>
  );
}

function FloatingCards() {
  return (
    <div className="relative w-full h-105">
      <div className="absolute inset-0 flex items-center justify-center">
        <CenterImage />
      </div>

      <div className="absolute top-0 left-0 float-1 z-10">
        <TodayCard />
      </div>

      <div className="absolute top-4 right-0 float-2 z-10">
        <VisitsCard />
      </div>

      <div className="absolute bottom-0 left-0 float-3 z-10">
        <VaccineReminderCard />
      </div>
    </div>
  );
}

function CenterImage() {
  return (
    <img
      src="/images/login_image.png"
      className="h-80 w-auto object-contain"
      alt="Vet with pets"
    />
  );
}

function TodayCard() {
  const days = [
    {day: 12, color: "bg-blue-200"},
    {day: 13, color: "bg-blue-200"},
    {day: 14, color: "bg-blue-200"},
    {day: 15, active: true},
    {day: 16, color: "bg-blue-200"},
    {day: 17, color: "bg-green-300"},
    {day: 18, color: "bg-green-300"},
  ];

  return (
    <div className="bg-white rounded-2xl p-4 w-64">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-slate-900">Today</span>
        <i className="ti ti-calendar text-slate-400" />
      </div>
      <div className="flex items-center justify-between">
        {days.map((d) =>
          d.active ? (
            <div
              key={d.day}
              className="w-5.5 h-5.5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-medium"
            >
              {d.day}
            </div>
          ) : (
            <div key={d.day} className="flex flex-col items-center gap-1.5">
              <span className="text-xs text-slate-400">{d.day}</span>
              <div className={`w-4.5 h-0.75 rounded-full ${d.color}`} />
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function VisitsCard() {
  const bars = [55, 45, 65, 75, 80, 100, 70];

  return (
    <div className="bg-white rounded-2xl p-4 w-64">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-500">Visits this week</span>
        <i className="ti ti-trending-up text-green-500" />
      </div>
      <p className="text-2xl font-semibold text-slate-900 mb-2.5">142</p>
      <div className="flex items-end gap-1 h-6">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-md ${h === 100 ? "bg-blue-600" : h >= 70 ? "bg-blue-400" : "bg-blue-200"}`}
            style={{height: `${h}%`}}
          />
        ))}
      </div>
    </div>
  );
}

function VaccineReminderCard() {
  return (
    <div className="bg-blue-300 rounded-2xl p-4 w-64 flex gap-3">
      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
        <i className="ti ti-bell text-blue-600 text-lg" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">Vaccine reminder</p>
        <p className="text-xs text-slate-500 mt-0.5">Bella · Rabies booster</p>
        <p className="text-xs font-medium text-blue-600 mt-1">
          Tomorrow · 10:30
        </p>
      </div>
    </div>
  );
}

function Footer() {
    return (
      <div className="grid grid-cols-2 grid-rows-2">
        <p className="flex items-center gap-2 mb-3">
          <IoShieldCheckmarkOutline color="blue" /> Secure cloud platform
        </p>
        <p className="flex items-center gap-2">
          <GoOrganization color="blue" /> Multi-clinic support
        </p>
        <p className="flex items-center gap-2">
          <IoNotificationsOutline color="blue" /> Smart reminders
        </p>
        <p className="flex items-center gap-2 z-20">
          <IoMdCheckmarkCircleOutline color="blue" /> Trusted by vet pros
        </p>
      </div>
    );
}