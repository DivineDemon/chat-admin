import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import RouteGuard from "./components/route-guard";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Plans from "./pages/plans";
import Users from "./pages/users";

const App = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route
        element={
          <RouteGuard>
            <Layout />
          </RouteGuard>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/plans" element={<Plans />} />
      </Route>
    </Routes>
  );
};

export default App;
