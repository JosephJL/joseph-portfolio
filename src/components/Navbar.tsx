import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPenNib,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { Tooltip } from "flowbite-react";

export default function Navbar() {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(currentTheme);

  return (
    <div className="sticky top-0 z-10 flex w-full flex-row justify-center space-x-4 bg-white p-4 text-gray-900 dark:bg-[#001440] dark:text-white">
      <Tooltip content="Home" trigger="hover">
        <button type="button" onClick={() => router.push("/")}>
          {/* Home{" "} */}
          <FontAwesomeIcon
            className="text-gray-900 hover:text-blue-200 dark:text-white hover:dark:text-gray-400"
            icon={faHouse}
          />
        </button>
      </Tooltip>
      <Tooltip content="Posts" trigger="hover">
        <button type="button" onClick={() => router.push("/posts")}>
          {/* Posts{" "} */}
          <FontAwesomeIcon
            className="text-gray-900 hover:text-blue-200 dark:text-white hover:dark:text-gray-400"
            icon={faPenNib}
          />
        </button>
      </Tooltip>
      <Tooltip content="Mode" trigger="hover">
        <button
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className="dark:text-whites text-white transition-all duration-100"
        >
          {/* <span className="text-gray-900 dark:text-white">Mode </span> */}
          {theme == "dark" ? (
            <FontAwesomeIcon
              className="text-gray-900 hover:text-blue-200 dark:text-white hover:dark:text-gray-400"
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              className="text-gray-900 hover:text-blue-200 dark:text-white hover:dark:text-gray-400"
              icon={faMoon}
            />
          )}
        </button>
      </Tooltip>
    </div>
  );
}
