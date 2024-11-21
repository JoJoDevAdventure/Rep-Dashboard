
import { useTheme } from "@/app/context/themeContext";

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
    const { isDarkMode } = useTheme();
  return (
    <div className="flex border-b border-p1/10">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-4 py-2 ${
            activeTab === index
              ? "border-orange-500 text-orange-500 border-b-2"
              : isDarkMode ? "text-p4":"text-gray-500"
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;