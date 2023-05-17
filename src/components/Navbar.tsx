import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPenNib,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

export default function Navbar() {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(currentTheme);

  return (
    <div className="flex w-full flex-row justify-center space-x-4 bg-white p-4 text-gray-900 dark:bg-[#001440] dark:text-white">
      <button type="button" onClick={() => router.push("/")}>
        Home{" "}
        <FontAwesomeIcon
          className="text-gray-900 dark:text-white"
          icon={faHouse}
        />
      </button>
      <button type="button" onClick={() => router.push("/posts")}>
        Posts{" "}
        <FontAwesomeIcon
          className="text-gray-900 dark:text-white"
          icon={faPenNib}
        />
      </button>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="dark:text-whites text-white transition-all duration-100"
      >
        <span className="text-gray-900 dark:text-white">Mode </span>
        {theme == "dark" ? (
          <FontAwesomeIcon
            className="text-gray-900 dark:text-white"
            icon={faSun}
          />
        ) : (
          <FontAwesomeIcon
            className="text-gray-900 dark:text-white"
            icon={faMoon}
          />
        )}
      </button>
    </div>
  );
}
