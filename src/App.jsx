import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Settings, {
  Roles,
  Subscription,
  Users,
  Billing as SettingsBilling,
  Notifications as SettingsNotification,
} from "./pages/Settings";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Reminders from "./pages/Reminders";
import AppLayout from "./layouts/AppLayout";
import Billing from "./pages/Billing";
import Team from "./pages/Team";
import Notifications from "./pages/Notifications";
import {SettingsProvider} from "./context/SettingsContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import {  Toaster } from "react-hot-toast";
import ProtectedRoute from "./routes/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import { Profile } from "./components/settings/Profile";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <AuthProvider>
            <Toaster position="top-center" />
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="settings" element={<Settings />}>
                    <Route index element={<Profile />} />
                    {/* <Route
                      path="notification"
                      element={<SettingsNotification />}
                    />
                    <Route path="subscription" element={<Subscription />} />
                    <Route path="billing" element={<SettingsBilling />} />
                    <Route path="users" element={<Users />} />
                    <Route path="roles" element={<Roles />} /> */}
                  </Route>
                  <Route path="notifications" element={<Notifications />} />
                  <Route path="patients" element={<Patients />} />
                  <Route path="appointments" element={<Appointments />} />
                  <Route path="billing" element={<Billing />} />
                  <Route path="reminders" element={<Reminders />} />
                  <Route path="team" element={<Team />} />
                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </SettingsProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
