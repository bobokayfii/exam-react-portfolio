import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterP from "./components/RegisterP";
import LoginP from "./components/LoginP";
import AdminLayout from "./layout/admin";
import { TOKEN} from "./const";
import { ROLE } from "./utils";
import HomeP from "./components/HomeP";
import { adminRoutes } from "./const/menus";

function App() {
  const isAuthorized = localStorage.getItem(TOKEN) && ROLE !== "user";
const token = localStorage.getItem(TOKEN);
const role = localStorage.getItem(ROLE);
const isAuthorizedd = token && role !== null;
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeP />} exact />
        <Route
          path="/"
          element={
            isAuthorizedd ? (
              role === "user" ? (
                <Navigate to="/" replace />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            ) : (
              <Navigate to="/register" replace />
            )
          }
        />

        <Route path="/register" element={<RegisterP />} />
        <Route path="/login" element={<LoginP />} />
      </Routes>
        <Routes>
          {isAuthorized &&
            adminRoutes.map(({ url, page: Page }, i) => (
              <Route
                key={i}
                path={"/" + url}
                element={
                  <AdminLayout>
                    <Page />
                  </AdminLayout>
                }
              />
            ))}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
