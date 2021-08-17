import React from "react";
import { dateParse } from "../utils/dateParse";
import { Icon } from "@iconify/react";
import calendarRange from "@iconify/icons-mdi/calendar-range";

export default function CharacterPreview({
  char_id,
  title: name,
  nickname,
  episodes,
  start_date,
  end_date,
  airing: status,
  image_url: image,
  full,
  appearance,
  portrayed,
}) {
  const start = dateParse(start_date);
  const end = dateParse(end_date);
  return (
    <div className="CharacterPreview">
      <div className="status">
        <div id={status?.toString()} className="dot"></div>
        <p>{status ? "Airing" : "Not Airing"}</p>
      </div>
      <h3 className="name">{name}</h3>
      <h6 className="nickname">{nickname}</h6>
      <div className="image">
        <img src={image} alt={`${name} photo`} />
      </div>
      <div className="dob">
        {start_date && (
          <>
            <p className="head">START DATE</p>
            <p className="date">
              {start.date} {start.month}
            </p>
            <div className="year">
              <Icon
                icon={calendarRange}
                style={{ color: "#bababa", fontSize: "1.5rem" }}
              />
              <p>{start.year}</p>
            </div>
          </>
        )}
      </div>
      <div className="dob">
        {end_date && (
          <>
            <p className="head">START DATE</p>
            <p className="date">
              {end.date} {end.month}
            </p>
            <div className="year">
              <Icon
                icon={calendarRange}
                style={{ color: "#bababa", fontSize: "1.5rem" }}
              />
              <p>{end.year}</p>
            </div>
          </>
        )}
      </div>
      <div className="details">
        {!!episodes && (
          <div className="occupation">
            <p>
              EPISODE{episodes > 1 && "S"}: {episodes}
            </p>
          </div>
        )}
        {full && (
          <>
            <div className="appearance">
              <h2>APPEARANCE</h2>
              <ul>
                {appearance?.map((n) => (
                  <li>SEASON {n}</li>
                ))}
              </ul>
            </div>
            <div className="portrayed">
              <h2>PORTRAYED BY</h2>
              <p>{portrayed}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
