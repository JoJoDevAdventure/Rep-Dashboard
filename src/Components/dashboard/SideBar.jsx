import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../../app/context/themeContext";

const SideBar = () => {
  const { isDarkMode } = useTheme(); // Get the current theme (dark or light mode)
  const currentPath = usePathname(); // Get the current route

  // Define menu items for the main navigation
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "dashboard-icon.svg",
    },
    {
      name: "Listings",
      path: "/dashboard/listings",
      icon: "listings-icon.svg",
    },
    {
      name: "CRM",
      path: "/dashboard/crm",
      icon: "crm-icon.svg",
      isDisabled: true, // Example of a disabled menu item
    },
  ];

  // Define menu items for the account section
  const accountItems = [
    {
      name: "My account",
      path: "/account",
      icon: "account-icon.svg",
    },
    {
      name: "Help and support",
      path: "/support",
      icon: "help-icon.svg",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "logout-icon.svg",
    },
  ];

  return (
    <div
      className={`h-screen w-64 flex flex-col justify-between p-6 overflow-hidden z-50 ${
        isDarkMode
          ? "bg-s1 text-white" // Dark mode styles
          : "bg-gray-50 text-black shadow-light" // Light mode styles
      }`}
    >
      {/* Logo Section */}
      <div>
        <img
          className="w-48 mx-0 mb-10"
          src={`/logo-${isDarkMode ? "white" : "black"}.png`} // Adjust logo based on theme
          alt="Logo"
        />

        {/* Main Menu Section */}
        <div>
          <p className="uppercase text-sm font-semibold text-gray-500 mb-4">
            Menu
          </p>
          <ul className="space-y-0 w-full">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`relative -mx-6 flex items-center gap-4 py-4 px-6 cursor-pointer ${
                  currentPath === item.path
                    ? "bg-s3/10 text-s3" // Highlight active menu item
                    : isDarkMode
                    ? "hover:bg-s3/5" // Hover styles for dark mode
                    : "hover:bg-s3/5" // Hover styles for light mode
                } ${
                  item.isDisabled
                    ? "opacity-50 pointer-events-none hover:bg-transparent" // Styles for disabled items
                    : ""
                }`}
              >
                {/* Vertical line for active menu item */}
                {currentPath === item.path && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-s3" />
                )}

                {/* Menu Icon */}
                <img
                  src={`/dashboard-icons/${item.icon}`}
                  alt={`${item.name} icon`}
                  className={`w-5 h-5 ${
                    currentPath === item.path ? "filter-p1" : ""
                  }`} // Add a color filter for active icons
                />

                {/* Menu Link */}
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Account Section */}
      <div>
        <p className="uppercase text-sm font-semibold text-gray-500 mb-4">
          Your account
        </p>
        <ul className="space-y-4">
          {accountItems.map((item) => (
            <li
              key={item.name}
              className={`relative flex items-center gap-4 p-3 rounded-lg cursor-pointer ${
                currentPath === item.path
                  ? " text-s3" // Highlight active account item
                  : isDarkMode
                  ? "hover:bg-s3/5" // Hover styles for dark mode
                  : "hover:bg-s3/5" // Hover styles for light mode
              }`}
            >
              {/* Account Item Icon */}
              <img
                src={`/dashboard-icons/${item.icon}`}
                alt={`${item.name} icon`}
                className={`w-5 h-5 ${
                  currentPath === item.path ? "filter-p1" : ""
                }`} // Add a color filter for active icons
              />

              {/* Account Item Link */}
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;