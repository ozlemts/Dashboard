import Bean from "./Bean";

export function CalendarRow(props) {

  const setColor = (type) => {
    if (type == '1')
      return '#ff007e'
    else if (type == '2')
      return '#582d80'
    else return '#CCC'
  }

  return (
    <div className="grid grid-cols-7 gap-1 my-2 text-xs lg:text-base row-color p-1">
      <p className="col-span-2 text-sm">{props.item.origin_region}</p>
      <div className="col-span-4">
        <div className="grid grid-cols-12">
          {props.item.harvest.map((e, index) => (
            <div key={index} className="tooltip relative block flex justify-center w-4">
              <Bean color={setColor(e)}/>
              <span className="tooltiptext absolute z-10 invisible hover:visible bg-indigo-500 text-white p-1 rounded mt-4 w-20 text-xs text-center">{index+1}. month</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-right text-sm">{props.item.origin_country}</p>
    </div>
  );
}

export default CalendarRow;