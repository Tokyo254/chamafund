// AppRoutes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
         <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
           
            {/* Catch all route - 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;