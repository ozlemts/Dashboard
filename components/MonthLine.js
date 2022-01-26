
export function MonthLine(props) {
  return (
    <div>
        <div className="my-2">
          <div className="w-96 flex justify-between">
            <p className="text-xs p-1 m-0 rotate-45">Jan</p>
            <p className="text-xs p-1 m-0 rotate-45">Feb</p>
            <p className="text-xs p-1 m-0 rotate-45">Mar</p>
            <p className="text-xs p-1 m-0 rotate-45">Apr</p>
            <p className="text-xs p-1 m-0 rotate-45">May</p>
            <p className="text-xs p-1 m-0 rotate-45">Jun</p>
            <p className="text-xs p-1 m-0 rotate-45">Jul</p>
            <p className="text-xs p-1 m-0 rotate-45">Aug</p>
            <p className="text-xs p-1 m-0 rotate-45">Sep</p>
            <p className="text-xs p-1 m-0 rotate-45">Nov</p>
            <p className="text-xs p-1 m-0 rotate-45">Dec</p>
          </div>
          <div className="w-96 flex justify-between m-0 p-0">
                <div className="bg-green-300 w-5 h-5 rounded-full"></div>
                <div className="bg-green-300 w-5 h-5 rounded-full"></div>
                <div className="bg-green-300 w-5 h-5 rounded-full"></div>
                <div className="bg-green-300 w-5 h-5 rounded-full"></div>
                <div className="bg-green-300 w-5 h-5 rounded-full"></div>
                <div className="bg-green-300 w-5 h-5 rounded-full"></div>
                <div className="bg-black w-5 h-5 rounded-full"></div>
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