import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NJLogoHover from "./assets/NJLogoHover.png";

export default function App() {
  return (
    <div className="mx-auto p-6 bg-black/100 min-h-screen shadow-lg">
      <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b pb-4">
        <div className="flex items-center gap-3">
          <img
            src={NJLogoHover}
            alt="NewWebsite"
            className="h-20 w-auto object-contain"
          />
          <h1 className="text-2xl font-semibold text-white">Noah Jacobs</h1>
        </div>
        <nav className="flex gap-6 text-lg font-medium text-white">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-300" : "hover:text-blue-300 hover:[text-shadow:0_0_10px_rgba(147,197,253,0.95)] transition-all duration-300"}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-blue-300" : "hover:text-blue-300 hover:[text-shadow:0_0_10px_rgba(147,197,253,0.95)] transition-all duration-300"}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-300" : "hover:text-blue-300 hover:[text-shadow:0_0_10px_rgba(147,197,253,0.95)] transition-all duration-300"}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-300" : "hover:text-blue-300 hover:[text-shadow:0_0_10px_rgba(147,197,253,0.95)] transition-all duration-300"}>
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="mt-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}