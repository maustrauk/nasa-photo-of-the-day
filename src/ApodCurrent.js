import React from "react";

const ApodCurrent = prop => {
    const {apodObj} = prop;
  return (
    <div className="ApodCurrent">
        <h1>Astronomy Picture Of the Day: {apodObj.date}</h1>
        <img src={apodObj.url} alt={apodObj.title}></img>
        <h2>{apodObj.title}</h2>
        <div>{apodObj.explanation}</div>
        <a href={apodObj.hdurl}>HD picture</a>
        <p>Copyrigt: {apodObj.copyright}</p>
    </div>
  );
}

export default ApodCurrent;
