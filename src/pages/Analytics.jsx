import Main from "../components/analytics/Main";
import Summary from "../components/analytics/Summary";

function Analytics() {
  return (
    <div className="h-auto mt-16 flex flex-col gap-5">
      <Header />
      <Summary />
      <Main />
    </div>
  );
}

export default Analytics;

function Header() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
          <i className="ti ti-chart-bar text-blue-700 text-xl" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Analytics
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Performance insights for the last 12 months
          </p>
        </div>
      </div>
    </div>
  );
}
