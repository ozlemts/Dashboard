
function Header() {
  return (
    <div className="min-w-full py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <svg
          width="26"
          height="16"
          viewBox="0 0 26 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3.18679C0 1.42688 1.4268 0 3.18679 0H22.3075C24.0675 0 25.4943 1.42688 25.4943 3.18679V12.7471C25.4943 14.507 24.0675 15.9339 22.3075 15.9339H3.18679C1.4268 15.9339 0 14.507 0 12.7471V3.18679Z"
            fill="#E1E1E3"
          />
          <path
            d="M7.56865 10.357C8.66864 10.357 9.56039 9.46551 9.56039 8.36528C9.56039 7.26504 8.66864 6.37354 7.56865 6.37354C6.46865 6.37354 5.5769 7.26504 5.5769 8.36528C5.5769 9.46551 6.46865 10.357 7.56865 10.357Z"
            fill="#979797"
          />
          <path
            d="M18.7225 10.357C19.8225 10.357 20.7142 9.46551 20.7142 8.36528C20.7142 7.26504 19.8225 6.37354 18.7225 6.37354C17.6225 6.37354 16.7307 7.26504 16.7307 8.36528C16.7307 9.46551 17.6225 10.357 18.7225 10.357Z"
            fill="#979797"
          />
          <path
            d="M13.1455 10.357C14.2455 10.357 15.1373 9.46551 15.1373 8.36528C15.1373 7.26504 14.2455 6.37354 13.1455 6.37354C12.0456 6.37354 11.1538 7.26504 11.1538 8.36528C11.1538 9.46551 12.0456 10.357 13.1455 10.357Z"
            fill="#979797"
          />
        </svg>
        <img src="/down-arrow.svg" className="transform -rotate-90 mx-2" />
        <img src="/file.svg" className="mr-2" />
        <p className="text-gray-400">Harvest Calenders </p>
        <img src="/down-arrow.svg" className="transform -rotate-90 mx-2" />
        <img src="/file.svg" className="mr-2" />
        <p className="text-gray-400">Coffee</p>
      </div>
      <div className="flex">
        <p className="text-gray-400">Logout</p>
        <img src="/down-arrow.svg" />
      </div>
    </div>
  );
}

export default Header;