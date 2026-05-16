import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div className="mx-auto p-6 bg-white min-h-screen shadow-lg">
      <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">NewWebsite</h1>
        <nav className="flex gap-6 text-lg font-medium">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-500 transition-colors"}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-500 transition-colors"}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-500 transition-colors"}>
            About
          </NavLink>
        </nav>
      </header>

      <main className="mt-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}