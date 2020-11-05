import React from "react";
import styled from "styled-components";

const ApodUser = prop => {
    const {userApodObj, changeDate} = prop;

  return (
    <div className="ApodUser">
        <div>
            <label>Choose your date:</label>
            <input type="date" value={userApodObj.date}
             min="2020-09-01" max="2020-11-05"
             onChange={(e) => changeDate(e.target.value)} ></input>
        </div>
        <img src={userApodObj.url} alt={userApodObj.title}></img>
        <h2>{userApodObj.title}</h2>
        <div>{userApodObj.explanation}</div>
        <a href={userApodObj.hdurl}>HD picture</a>
        <p>Copyrigt: {userApodObj.copyright}</p>
    </div>
  );
}


export default ApodUser;
