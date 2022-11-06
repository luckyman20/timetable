import Head from "next/head";
import React, { useState, useEffect } from "react";

export default function Home() {
  var [day, setDay] = useState(new Date().getDay() - 1);
  var [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setDay(new Date().getDay() - 1);
    days = temp_days;
  }, []);

  useEffect(() => {
    if (day === -1) {
      setSchedule(all_days[0]);
    } else {
      setSchedule(all_days[day]);
    }
    days = temp_days;
  }, [day]);

  function openWebsite(link) {
    window.open(link, "_blank");
  }

  var days = ["M", "T", "W", "Th", "F", "S"];
  var temp_days = ["M", "T", "W", "Th", "F", "S"];

  var monday = [
    {
      name: "FDAS - RY",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "CF - Amit",
      time: "10:00 AM - 11:00 AM",
    },
    {
      name: "CF - Amit",
      time: "11:00 AM - 12:00 AM",
    },
    {
      name: "Infy",
      time: "12:00 PM - 1:00 PM",
    },
    {
      name: "FMI - RY",
      time: "1:00 PM - 2:00 PM",
    },
    {
      name: "IT - NK",
      time: "2:00 PM - 3:00 PM",
    },
    {
      name: "IT - NK",
      time: "3:00 PM - 4:00 PM",
    },
    {
      name: "No Class",
      time: "4:00 PM - 5:00 PM",
    }
  ];

  var tuesday = [
    {
      name: "FDAS - RY",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "CF - Amit",
      time: "10:00 AM - 11:00 AM",
    },
    {
      name: "FMI - RY",
      time: "11:00 AM - 12:00 AM",
    },
    {
      name: "Infy",
      time: "12:00 PM - 1:00 PM",
    },
    {
      name: "FMI - RY",
      time: "1:00 PM - 2:00 PM",
    },
    {
      name: "FDAS Prac - NKS",
      time: "2:00 PM - 3:00 PM",
    },
    {
      name: "IT - NK",
      time: "3:00 PM - 4:00 PM",
    },
    {
      name: "BSI - SG",
      time: "4:00 PM - 5:00 PM",
    },
  ];

  var wednesday = [
    {
      name: "CF - Amit",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "CF - Amit",
      time: "10:00 AM - 11:00 AM",
    },
    {
      name: "IT - NK",
      time: "11:00 AM - 12:00 AM",
    },
    {
      name: "Infy",
      time: "12:00 PM - 1:00 PM",
    },
    {
      name: "BSI - SG",
      time: "1:00 PM - 2:00 PM",
    },
    {
      name: "BSI - SG",
      time: "2:00 PM - 3:00 PM",
    },
    {
      name: "FDAS Prac - NKS",
      time: "3:00 PM - 4:00 PM",
    },
    {
      name: "BSI - SG",
      time: "4:00 PM - 5:00 PM",
    },
  ];

  var thursday = [
    {
      name: "CF - Amit",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "FDAS Prac - NKS",
      time: "10:00 AM - 11:00 AM",
    },
    {
      name: "FM - RY",
      time: "11:00 AM - 12:00 AM",
    },
    {
      name: "Infy",
      time: "12:00 PM - 1:00 PM",
    },
    {
      name: "IT - NK",
      time: "1:00 PM - 2:00 PM",
    },
    {
      name: "ISM - SK",
      time: "2:00 PM - 3:00 PM",
    },
    {
      name: "ISM - SK",
      time: "3:00 PM - 4:00 PM",
    },
    {
      name: "No class",
      time: "4:00 PM - 5:00 PM",
    },
  ];

  var friday = [
    {
      name: "FM - RY",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "FMI - RY",
      time: "10:00 AM - 11:00 AM",
    },
    {
      name: "IT - NK",
      time: "11:00 AM - 12:00 AM",
    },
    {
      name: "Infy",
      time: "12:00 PM - 1:00 PM",
    },
    {
      name: "FDAS Prac - NKS",
      time: "1:00 PM - 2:00 PM",
    },
    {
      name: "BSI - SG / ISM - SK",
      time: "2:00 PM - 3:00 PM",
    },
    {
      name: "BSI - SG / ISM - SK",
      time: "3:00 PM - 4:00 PM",
    },
    {
      name: "No class",
      time: "4:00 PM - 5:00 PM",
    },
  ];

  var saturday = [
    {
      name: "BSI - SG / ISM - SK",
      time: "9:00 AM - 10:00 AM",
    },
    {
      name: "BSI - SG / ISM - SK",
      time: "10:00 AM - 11:00 AM",
    },
    {
      name: "No class",
      time: "11:00 AM - 12:00 AM",
    },
    {
      name: "Infy",
      time: "12:00 PM - 1:00 PM",
    },
    {
      name: "No class",
      time: "1:00 PM - 2:00 PM",
    },
    {
      name: "No class",
      time: "2:00 PM - 3:00 PM",
    },
    {
      name: "No class",
      time: "3:00 PM - 4:00 PM",
    },
    {
      name: "No class",
      time: "4:00 PM - 5:00 PM",
    },
  ];

  var all_days = [monday, tuesday, wednesday, thursday, friday, saturday];

  return (
    <div>
      <Head>
        <title>BFIA 2A Timetable</title>
      </Head>

      <div className="flex flex-col justify-center items-center min-h-screen min-w-screen bg-gray-200">
        <div className="flex flex-col justify-center items-center min-w-screen min-h-screen">
          <div className="flex flex-row justify-center items-center mt-4">
            {days.map((day_) => {
              console.log("Index of ", day_, " is ", days.indexOf(day_));
              console.log(day);
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
              {schedule.slice(0, 4).map((item, index) => {
                if (item.type !== undefined) {
                  return (
                    <div
                      key={index}
                      className="flex flex-row justify-center items-center gap-x-2 mt-8"
                    >
                      <div
                        className="flex flex-col justify-center items-center bg-white rounded-lg w-24 h-24 drop-shadow-xl p-2 gap-y-2"
                      >
                        <div className="text-sm"> {item.name[0]}</div>
                        <div className="text-xs"> {item.time} </div>
                      </div>
                      <div
                        className="flex flex-col justify-center items-center bg-white rounded-lg w-24 h-24 drop-shadow-xl p-2 gap-y-2"
                      >
                        <div className="text-sm"> {item.name[1]}</div>
                        <div className="text-xs"> {item.time} </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="flex flex-col mt-8 justify-center items-center text-lg bg-white drop-shadow-xl rounded-lg h-24 w-48 text-black-500"
                    >
                      <div>{item.name}</div>
                      <div className="text-base">{item.time}</div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex flex-col justify-center items-center">
              {schedule.slice(4, 8).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col mt-8 justify-center items-center text-lg bg-white drop-shadow-xl rounded-lg h-24 w-48 text-black-500"
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
