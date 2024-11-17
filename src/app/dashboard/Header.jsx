import ThemeSwitch from "@/Components/ThemeSwitch"; // The custom theme toggle component
import { useTheme } from "../context/themeContext";

const Header = ({ userName = "Brian Adams" }) => {
  const { isDarkMode } = useTheme();

  return (
    <header className={`flex items-center justify-between px-6 py-12 border-s3/10 border-b-2  ${isDarkMode ? "bg-s1" : "bg-white"}`}>
      {/* Greeting Section */}
      <div>
        <p className="text-sm text-gray-200">Good morning,</p>
        <h1 className={`text-4xl font-semibold ${isDarkMode ? "text-p4" : "text-black"}`}>
          Welcome back, <span className={`text-4xl font-light ${isDarkMode ? "text-p5" : "text-gray-900 " }`}>{userName}</span>
        </h1>
      </div>

      {/* Upgrade and Theme Toggle */}
      <div className="flex items-center gap-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600">
          Upgrade
        </button>
        <ThemeSwitch /> {/* Theme toggle switch */}
      </div>
    </header>
  );
};

export default Header;