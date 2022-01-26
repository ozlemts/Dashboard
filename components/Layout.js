import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

function Layout({ children, device_id, path }) {
  return (
    <div className="h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
        <title>Taka Insight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <Sidebar device_id={device_id} path={path} />
        <div className="flex flex-col justify-between w-full">
          <Header />
          <div className="flex-grow bg-gray-100 dark:bg-black-800">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;