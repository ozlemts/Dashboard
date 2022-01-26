import Link from "next/link";
import Logo from "./Logo";

function Sidebar(props) {
  return (
    <aside className="flex flex-col justify-between py-2 text-white bg-blue-900 dark:bg-black-900 w-72 min-h-screen hidden md:block ">
      <nav>
        <Link href="/">
          <div className="p-4 flex items-center">
            <span className="sr-only">Taka Insight Home Page</span>
            <Logo width="48" height="48"/>
            <p className="ml-2 font-semibold">Coffee Harvest Calender</p>
          </div>
        </Link>
        <ul>
          <li className="flex hover:opacity-70 w-100 p-4">
            <img className="mr-4" src="/icons/kontrol-paneli.svg" />
            <Link href="/dictionary">Dictionary</Link>
          </li>
        </ul>
      </nav>

      <li className="flex hover:opacity-70 hover:opacity-70 w-100 p-4">
        <img className="mr-4" src="/icons/settings.svg" />
        <Link href="/devices">Settings</Link>
      </li>
    </aside>
  );
}

export default Sidebar;