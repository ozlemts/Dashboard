// noinspection SpellCheckingInspection

import CalendarRow from "./CalendarRow";
import {useEffect, useState} from "react";

function HarvestCalender() {
  const data = [
    {
      origin_country: 'Indonesia',
      origin_region: 'Java',
      harvest: ['1', '1', '1', '', '', '', '', '', '', '', '', '1']
    },
    {
      origin_country: 'Indonesia',
      origin_region: 'Kalimantan',
      harvest: ['', '', '', '', '', '', '', '', '1', '1', '1', '1']
    }, {
      origin_country: 'Brazil',
      origin_region: 'Minas Gerais',
      harvest: ['', '', '1', '1', '1', '1', '', '', '', '', '', '',]
    }, {
      origin_country: 'Brazil',
      origin_region: 'Espirito Santo',
      harvest: ['', '2', '2', '2', '', '', '1', '1', '1', '1', '', '']
    }
  ]
  const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrigins, setFilteredOrigins] = useState(data);

  useEffect(() => {
    const results = data.filter(data =>
      data.origin_region.toLowerCase().includes(searchTerm)
    );
    setFilteredOrigins(results)
  }, [searchTerm]);

  return (
    <div className="w-full lg:w-1/2 p-4">
      <p className="font-semibold text-center mb-4">Harvest Calender of Coffee</p>
      <div className="flex items-center my-2">
        <input type="search"
               placeholder="Search by origins..."
               className="px-4 py-2 rounded-lg grow border placeholder:text-sm mx-1 lg:mx-24 my-4"
               onChange={(e => setSearchTerm(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-7 gap-1 my-3 text-xs lg:text-base">
        <div className="col-span-2">
          <p className="font-semibold">Origin</p>
        </div>
        <div className="grid grid-cols-12 col-span-4">
          {months.map((e, index) => (
            <p className="text-xs p-1 m-0 rotate-90 w-4 font-semibold" key={index}>{e}</p>
          ))}
        </div>
        <p className="font-semibold text-right">Country</p>
      </div>
      {filteredOrigins.map((e, index) => (
        <CalendarRow item={e} key={index}/>
      ))}

    </div>
  );
}

export default HarvestCalender;