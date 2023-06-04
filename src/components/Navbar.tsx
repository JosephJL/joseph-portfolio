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
      <button type="button" onClick={() => router.push("/")}>
        {/* Home{" "} */}
        <Tooltip content="Home" trigger="hover">
          <FontAwesomeIcon
            className={
              router.pathname == "/"
                ? "text-blue-600 dark:text-yellow-300"
                : "text-gray-900 hover:text-blue-200 dark:text-white hover:dark:text-gray-400"
            }
            icon={faHouse}
          />
        </Tooltip>
      </button>

      <button type="button" onClick={() => router.push("/posts")}>
        {/* Posts{" "} */}
        <Tooltip content="Posts" trigger="hover">
          <FontAwesomeIcon
            className={
              router.pathname == "/posts" || router.pathname == "/posts/[slug]"
                ? "text-blue-600 dark:text-yellow-300"
                : "text-gray-900 hover:text-blue-200 dark:text-white hover:dark:text-gray-400"
            }
            icon={faPenNib}
          />
        </Tooltip>
      </button>

      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="dark:text-whites text-white transition-all duration-100"
      >
        <Tooltip content="Mode" trigger="hover">
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
        </Tooltip>
      </button>
    </div>
  );
}
