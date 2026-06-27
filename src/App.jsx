import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Reminders from "./pages/Reminders";
import AppLayout from "./layouts/AppLayout";
import Billing from "./pages/Billing";
import Team from "./pages/Team";
import Notifications from "./pages/Notifications";
import {SettingsProvider} from "./context/SettingsContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/team" element={<Team />} />
            </Route>
          </Routes>
        </SettingsProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
