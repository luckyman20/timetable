import Head from "next/head";
import React, { useState, useEffect } from "react";

export default function Home() {
  var [day, setDay] = useState(new Date().getDay() - 1);
  var [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(all_days[day]);
  }, [day]);

  function openWebsite(link) {
    window.open(link, "_blank");
  }

  var days = ["M", "T", "W", "Th", "F", "S"];

  var monday = [
    {
      name: "FAA - SKG",
      link: "https://meet.google.com/uon-hjbe-ack",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "ME - Raj",
      link: "https://meet.google.com/auq-tayk-cor",
      time: "10:10 AM - 11:10 AM",
    },
    {
      name: "English - AA",
      link: "http://meet.google.com/kso-gzji-bbw",
      time: "11:20 AM - 12:20 AM",
    },
    {
      name: "English - AA",
      link: "http://meet.google.com/kso-gzji-bbw",
      time: "12:30 PM - 1:30 PM",
    },
    {
      name: "Break",
      link: "",
      time: "1:30 PM - 2:00 PM",
    },
    {
      name: "No Class",
      link: "",
      time: "2:00 PM - 3:00 PM",
    },
  ];

  var tuesday = [
    {
      name: "No Class",
      link: "",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "FAA - SKG",
      link: "https://meet.google.com/peo-douk-txt",
      time: "10:10 AM - 11:10 AM",
    },
    {
      name: "ME - Raj",
      link: "https://meet.google.com/auq-tayk-cor",
      time: "11:20 AM - 12:20 AM",
    },
    {
      name: "FMM - Saima",
      link: "https://meet.google.com/qtn-vooz-nrz",
      time: "12:30 PM - 1:30 PM",
    },
    {
      name: "Break",
      link: "",
      time: "1:30 PM - 2:00 PM",
    },
    {
      name: "FMM - Saima",
      link: "https://meet.google.com/qtn-vooz-nrz",
      time: "2:00 PM - 3:00 PM",
    },
  ];

  var wednesday = [
    {
      name: "No Class",
      link: "",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "FAA - SKG",
      link: "https://meet.google.com/vha-ostu-xmh",
      time: "10:10 AM - 11:10 AM",
    },
    {
      type: "Tute",
      name: ["FAA - SKG - G2", "ME - Raj - G3"],
      link: [
        "https://meet.google.com/fof-qxpx-wdx",
        "https://meet.google.com/auq-tayk-cor",
      ],
      time: "11:20 AM - 12:20 AM",
    },
    {
      name: "ME - Raj",
      link: "https://meet.google.com/auq-tayk-cor",
      time: "12:30 PM - 1:30 PM",
    },
    {
      name: "Break",
      link: "",
      time: "1:30 PM - 2:00 PM",
    },
    {
      name: "FMM - Saima",
      link: "https://meet.google.com/qtn-vooz-nrz",
      time: "2:00 PM - 3:00 PM",
    },
  ];

  var thursday = [
    {
      name: "FAA - SKG",
      link: "https://meet.google.com/oke-kyft-quf",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "ME - Raj",
      link: "https://meet.google.com/auq-tayk-cor",
      time: "10:10 AM - 11:10 AM",
    },
    {
      type: "Tute",
      name: ["ME - Raj - G1", "FAA - SKG - G3"],
      link: ["https://meet.google.com/auq-tayk-cor", "https://meet.google.com/azc-ibyj-gku"],
      time: "11:20 AM - 12:20 AM",
    },
    {
      name: "FMM - Saima",
      link: "https://meet.google.com/qtn-vooz-nrz",
      time: "12:30 PM - 1:30 PM",
    },
    {
      name: "Break",
      link: "",
      time: "1:30 PM - 2:00 PM",
    },
    {
      name: "FMM - Saima",
      link: "https://meet.google.com/qtn-vooz-nrz",
      time: "2:00 PM - 3:00 PM",
    },
  ];

  var friday = [
    {
      name: "No Class",
      link: "",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "FAA - SKG",
      link: "meet.google.com/nqg-zdke-avp",
      time: "10:10 AM - 11:10 AM",
    },
    {
      type: "Tute",
      name: ["FAA - SKG - G1", "ME - Raj - G2"],
      link: ["https://meet.google.com/kzi-ubbo-tfg", "https://meet.google.com/auq-tayk-cor"],
      time: "11:20 AM - 12:20 AM",
    },
    {
      name: "ME - Raj",
      link: "https://meet.google.com/auq-tayk-cor",
      time: "12:30 PM - 1:30 PM",
    },
    {
      name: "Break",
      link: "",
      time: "1:30 PM - 2:00 PM",
    },
    {
      name: "No Class",
      link: "",
      time: "2:00 PM - 3:00 PM",
    },
  ];

  var saturday = [
    {
      name: "English - AA",
      link: "https://meet.google.com/emo-nyye-oqc",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "English - AA",
      link: "https://meet.google.com/emo-nyye-oqc",
      time: "10:10 AM - 11:10 AM",
    },
    {
      name: "FMM - Saima",
      link: "https://meet.google.com/qtn-vooz-nrz",
      time: "11:20 AM - 12:20 AM",
    },
    {
      name: "FMM - Saima",
      link: "https://meet.google.com/qtn-vooz-nrz",
      time: "12:30 PM - 1:30 PM",
    },
    {
      name: "Break",
      link: "",
      time: "1:30 PM - 2:00 PM",
    },
    {
      name: "No Class",
      link: "",
      time: "2:00 PM - 3:00 PM",
    },
  ];

  var all_days = [monday, tuesday, wednesday, thursday, friday, saturday];

  return (
    <div>
      <Head>
        <title>BFIA 1A Timetable</title>
      </Head>

      <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-200">
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <div className="flex flex-row justify-center items-center mt-4">
            {days.map((day_) => {
              if (days.indexOf(day_) === day) {
                return (
                  <div
                    key={day_}
                    className="flex justify-center items-center mx-8 text-violet-700 bg-violet-300 hover:cursor-pointer h-8 w-8 rounded-lg"
                    onClick={() => setDay(days.indexOf(day_))}
                  >
                    {day_}
                  </div>
                );
              } else {
                return (
                  <div
                    key={day_}
                    className="flex justify-center items-center mx-8 text-violet-700 hover:bg-violet-300 hover:cursor-pointer h-8 w-8 rounded-lg"
                    onClick={() => setDay(days.indexOf(day_))}
                  >
                    {day_}
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-row justify-center items-center gap-x-10">
            <div className="flex flex-col justify-center items-center">
              {schedule.slice(0, 3).map((item, index) => {
                if (item.type !== undefined) {
                  return (
                    <div
                      key={index}
                      className="flex flex-row justify-center items-center gap-x-2 mt-8"
                    >
                      <div onClick={() => openWebsite(item.link[0])} className="flex flex-col justify-center items-center bg-white rounded-lg w-24 h-24 drop-shadow-xl p-2 gap-y-2 hover:cursor-pointer">
                        <div className="text-sm"> {item.name[0]}</div>
                        <div className="text-xs"> {item.time} </div>
                      </div>
                      <div onClick={() => openWebsite(item.link[1])} className="flex flex-col justify-center items-center bg-white rounded-lg w-24 h-24 drop-shadow-xl p-2 gap-y-2 hover:cursor-pointer">
                        <div className="text-sm"> {item.name[1]}</div>
                        <div className="text-xs"> {item.time} </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="flex flex-col mt-8 justify-center items-center text-lg bg-white drop-shadow-xl rounded-lg h-24 w-48 text-black-500 hover:cursor-pointer"
                      onClick={() => openWebsite(item.link)}
                    >
                      <div>{item.name}</div>
                      <div className="text-base">{item.time}</div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex flex-col justify-center items-center">
              {schedule.slice(3, 6).map((item, index) => (
                <div
                  key={index}
                  onClick={() => openWebsite(item.link)}
                  className="flex flex-col mt-8 justify-center items-center text-lg bg-white drop-shadow-xl rounded-lg h-24 w-48 text-black-500 hover:cursor-pointer"
                >
                  <div>{item.name}</div>
                  <div className="text-base">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
