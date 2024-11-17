import { useTheme } from "@/app/context/themeContext";

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`relative inline-flex items-center h-6 w-11 cursor-pointer ${
        isDarkMode ? "bg-gray-700" : "bg-gray-300"
      } rounded-full transition-colors duration-300`}
      onClick={toggleTheme}
    >
      {/* Toggle Circle */}
      <div
        className={`absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 transform ${
          isDarkMode ? "translate-x-5" : "translate-x-1"
        }`}
      ></div>
    </div>
  );
};

export default ThemeSwitch;