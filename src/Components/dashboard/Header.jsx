import ThemeSwitch from "@/Components/ThemeSwitch"; // The custom theme toggle component
import { useTheme } from "../../app/context/themeContext"; // Theme context to manage dark/light mode

const Header = ({ username }) => {
  const { isDarkMode } = useTheme(); // Retrieve the current theme (dark or light mode)

  return (
    <header
      className={`flex items-center justify-between px-6 py-12 border-s3/10 border-b-2 ${
        isDarkMode ? "bg-s1" : "bg-white" // Dynamic background based on theme
      }`}
    >
      {/* Greeting Section */}
      <div>
        {/* Greeting Message */}
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-200" : "text-gray-600" // Adjust text color for theme
          }`}
        >
          Good morning,
        </p>

        {/* Welcome Message */}
        <h1
          className={`text-4xl font-semibold ${
            isDarkMode ? "text-p4" : "text-black" // Dynamic heading color
          }`}
        >
          Welcome back,{" "}
          <span
            className={`text-4xl font-light ${
              isDarkMode ? "text-p5" : "text-gray-900" // Lighter color for username
            }`}
          >
            {username}
          </span>
        </h1>
      </div>

      {/* Upgrade Button and Theme Toggle */}
      <div className="flex items-center gap-4">
        {/* Upgrade Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600">
          Upgrade
        </button>

        {/* Theme Toggle Switch */}
        <ThemeSwitch /> {/* Renders the custom theme switch component */}
      </div>
    </header>
  );
};

export default Header;