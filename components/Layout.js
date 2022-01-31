import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

function Layout({children, device_id, path}) {
  return (
    <div className="h-screen font-epilogue">
      <Head>
        <title>Taka Insight</title>
      </Head>
      <div className="flex">
        <Sidebar device_id={device_id} path={path}/>
        <div className="flex flex-col justify-between w-full">
          <Header/>
          <div className="flex-grow bg-gray-100">
            {children}
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Layout;