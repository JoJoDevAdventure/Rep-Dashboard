import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../context/themeContext";

const SideBar = () => {
  const { isDarkMode } = useTheme();
  const currentPath = usePathname(); // Get the current route

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "../dashboard-menu/dashboard-icon.svg",
    },
    {
      name: "Cash to offers",
      path: "/cash-to-offers",
      icon: "../dashboard-menu/cash-icon.svg",
    },
    {
      name: "Listings",
      path: "/listings",
      icon: "../dashboard-menu/listings-icon.svg",
    },
    {
      name: "CRM",
      path: "/crm",
      icon: "../dashboard-menu/crm-icon.svg",
      isDisabled: true,
    },
  ];

  const accountItems = [
    {
      name: "My account",
      path: "/account",
      icon: "../dashboard-menu/account-icon.svg",
    },
    {
      name: "Help and support",
      path: "/support",
      icon: "../dashboard-menu/help-icon.svg",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "../dashboard-menu/logout-icon.svg",
    },
  ];

  return (
    <div
      className={`h-screen w-64 flex flex-col justify-between p-6 overflow-hidden z-50 ${
        isDarkMode ? "bg-s1 text-white" : "bg-gray-50 text-black shadow-light"
      }`}
    >
      {/* Logo */}
      <div>
        <img
          className="w-48 mx-0 mb-10"
          src={`/logo-${isDarkMode ? "white" : "black"}.png`}
          alt="Logo"
        />

        {/* Menu */}
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
                    ? "bg-s3/10 text-s3" // Active item styles
                    : isDarkMode
                    ? "hover:bg-s3/5"
                    : "hover:bg-s3/5"
                } ${
                  item.isDisabled
                    ? "opacity-50 pointer-events-none hover:bg-transparent"
                    : ""
                }`}
              >
                {/* Line for the active item */}
                {currentPath === item.path && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-s3" />
                )}

                <img
                  src={`/icons/${item.icon}`}
                  alt={`${item.name} icon`}
                  className="w-5 h-5"
                />
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Account */}
      <div>
        <p className="uppercase text-sm font-semibold text-gray-500 mb-4">
          Your account
        </p>
        <ul className="space-y-4">
          {accountItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-4 p-3 rounded-lg cursor-pointer"
            >
              <img
                src={`/icons/${item.icon}`}
                alt={`${item.name} icon`}
                className="w-5 h-5"
              />
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;