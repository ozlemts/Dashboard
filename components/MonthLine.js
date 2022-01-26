
export function MonthLine(props) {
  return (
    <div>
        <div className="my-2">
          <div className="w-96 flex justify-between m-0 p-0">
                <div className="bg-green-300 w-5 h-5 rounded-full"></div>
                <div className="bg-green-300 w-5 h-5 rounded-full"></div>
                <div className="bg-green-300 w-5 h-5 rounded-full"></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className="bg-black w-5 h-5 rounded-full"></div>
                <div className="bg-black w-5 h-5 rounded-full"></div>
                <div className="bg-black w-5 h-5 rounded-full"></div>
                <div className="bg-black w-5 h-5 rounded-full"></div>
                <div className="bg-black w-5 h-5 rounded-full"></div>

            </div>
          <div className="w-96 border-b-2 absolute -translate-y-2.5 -z-50"></div>
        </div>

    </div>
  );
}

export default MonthLine;