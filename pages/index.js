import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timetable</title>
      </Head>

      <main className={styles.main}>
        <div className="flex justify-content items-center">
          <table className="border border-gray-500">
            <thead>
              <tr>
                <th className="border border-gray-500 p-2">Day</th>
                <th className="border border-gray-500">9:00 to 10:00</th>
                <th className="border border-gray-500">10:10 to 11:10</th>
                <th className="border border-gray-500">11:20 to 12:20</th>
                <th className="border border-gray-500">12:30 to 13:30</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 p-8 text-center">
                  Monday
                </td>
                <td className="border border-gray-500 text-center bg-slate-500 text-white">
                  <a href="https://meet.google.com/uon-hjbe-ack"> FAA - SKG</a>
                </td>
                <td className="border border-gray-500 text-center bg-slate-500 text-white">
                  <a href="https://meet.google.com/tqo-nbxu-sno"> FAA - SKG</a>
                </td>
                <td className="border border-gray-500 text-center bg-amber-400 text-white">
                  English
                </td>
                <td className="border border-gray-500 text-center bg-amber-400 text-white">
                  English
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-8 text-center">
                  Tuesday
                </td>
                <td className="border border-gray-500 text-center bg-green-500 text-white">
                  <a href="https://meet.google.com/nrd-sezq-asf">FMM - SS</a>
                </td>
                <td className="border border-gray-500 text-center bg-slate-500 text-white">
                  <a href="https://meet.google.com/peo-douk-txt"> FAA - SKG</a>
                </td>
                <td className="border border-gray-500 text-center bg-cyan-500 text-white">
                  <a href="https://meet.google.com/auq-tayk-cor"> ME - Raj</a>
                </td>
                <td className="border border-gray-500 text-center bg-cyan-500 text-white">
                  <a href="https://meet.google.com/auq-tayk-cor"> ME - Raj</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-8 text-center">
                  Wednesday
                </td>
                <td className="border border-gray-500 text-center">
                  <p className="text-teal-700 mx-2">
                    <a href="https://meet.google.com/nrd-sezq-asf">
                      FMM - SS - Group3
                    </a>
                  </p>
                </td>
                <td className="border border-gray-500 text-center bg-slate-500 text-white">
                  <a href="https://meet.google.com/vha-ostu-xmh">FAA - SKG</a>
                </td>
                <td className="border border-gray-500 text-center">
                  <p className="text-red-600">
                    <a href="https://meet.google.com/nrd-sezq-asf">
                      FMM - SS - Group1
                    </a>
                  </p>{" "}
                  <p className="text-lime-700">
                    <a href="https://meet.google.com/fof-qxpx-wdx">
                      FAA - SKG - Group2
                    </a>
                  </p>{" "}
                  <p className="text-teal-700">
                    {" "}
                    <a href="https://meet.google.com/auq-tayk-cor">
                      ME - Raj - Group3
                    </a>
                  </p>
                </td>
                <td className="border border-gray-500 text-center bg-cyan-500 text-white">
                  <a href="https://meet.google.com/auq-tayk-cor"> ME - Raj</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-8 text-center">
                  Thursday
                </td>
                <td className="border border-gray-500 text-center">No Class</td>
                <td className="border border-gray-500 text-center bg-green-500 text-white">
                  <a href="https://meet.google.com/nrd-sezq-asf">FMM - SS</a>
                </td>
                <td className="border border-gray-500 text-center break-all">
                  <p className="text-red-600">
                    <a href="https://meet.google.com/auq-tayk-cor">
                      ME - Raj - Group1
                    </a>
                  </p>{" "}
                  <p className="text-lime-700">
                    <a href="https://meet.google.com/nrd-sezq-asf">
                      FMM - SS - Group2
                    </a>
                  </p>{" "}
                  <p className="text-teal-700">FAA - SKG - Group3</p>
                </td>
                <td className="border border-gray-500 text-center bg-cyan-500 text-white">
                  <a href="https://meet.google.com/auq-tayk-cor"> ME - Raj</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-8 text-center">
                  Friday
                </td>
                <td className="border border-gray-500 text-center bg-green-500 text-white">
                  <a href="https://meet.google.com/nrd-sezq-asf">FMM - SS</a>
                </td>
                <td className="border border-gray-500 text-center bg-slate-500 text-white">
                  FAA - SKG
                </td>
                <td className="border border-gray-500 text-center">
                  <p className="text-red-600 mx-4">FAA - SKG - Group1</p>{" "}
                  <p className="text-lime-700">
                    <a href="https://meet.google.com/auq-tayk-cor">
                      ME - Raj - Group2
                    </a>
                  </p>
                </td>
                <td className="border border-gray-500 text-center bg-cyan-500 text-white">
                  <a href="https://meet.google.com/auq-tayk-cor"> ME - Raj</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-8 text-center">
                  Saturday
                </td>
                <td className="border border-gray-500 text-center bg-green-500 text-white">
                  <a href="https://meet.google.com/nrd-sezq-asf">FMM - SS</a>
                </td>
                <td className="border border-gray-500 text-center bg-green-500 text-white">
                  <a href="https://meet.google.com/nrd-sezq-asf">FMM - SS</a>
                </td>
                <td className="border border-gray-500 text-center bg-amber-400 text-white">
                  English
                </td>
                <td className="border border-gray-500 text-center bg-amber-400 text-white">
                  English
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
