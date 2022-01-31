import Link from "next/link";
import Logo from "./Logo";
import DownArrow from "./icons/DownArrow";

function Sidebar(props) {
  return (
    <aside className="flex flex-col justify-between py-2 text-white bg-indigo-900 w-72 min-h-screen hidden md:block ">
      <nav>
        <Link href="/" passHref>
          <div className="flex justify-end">
            <span className="sr-only">Taka Insight Home Page</span>
            <Logo width="200" height="120"/>
          </div>
        </Link>
        <ul>
          <li className="text-pink-700 flex hover:opacity-70 w-100 p-4">
            <DownArrow/>
            <Link href="/dictionary">Dictionary</Link>
          </li>
        </ul>
      </nav>

      <li className="text-pink-700 flex  hover:opacity-70 hover:opacity-70 w-100 p-4">
        <DownArrow/>
        <Link href="/settings">Settings</Link>
      </li>
    </aside>
  );
}

export default Sidebar;