import { useState, useEffect } from "react";

function DateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div>
      <h2 className="text-xl">
        <strong>
          {date.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </strong>
      </h2>
      <p>
        {date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}
      </p>
    </div>
  );
}

function Tanggal() {
  const dateNow = new Date();
  return (
    <>
      <p>
        <strong>
          {dateNow.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </strong>
      </p>
    </>
  );
}

export { DateTime, Tanggal };
