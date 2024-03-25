import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../Pages/Home";


export const AppRouter = () => {


  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />}>
          <Route path="/" element={<p> this site </p>} />
          {/* <Route path="/:area" element={<Platform />} />
          <Route path="/:area/base-maps" element={<Basemaps />} />
          <Route path="/:area/geocoding" element={<Geocoding />} />
          <Route path="/:area/map-services" element={<MapServices />} />
          <Route path="/:area/contact-us" element={<Contact />} />
          <Route path="/:area/plan" element={<Plan />} />
          <Route path="/:area/dashboard" element={<DashBoard />} />
          <Route path="/:area/documentation" element={<Documentation />} />
          <Route
            path="/:area/Keys"
            element={
              <PrivateRoute>
                <Keys />
              </PrivateRoute>
            }
          />
          <Route
            path="/:area/usage"
            element={
              <PrivateRoute>
                <Usage />
              </PrivateRoute>
            }
          /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
