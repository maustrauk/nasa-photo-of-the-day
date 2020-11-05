import React, {useState, useEffect} from "react";
import axios from "axios";

import ApodCurrent from "./ApodCurrent.js";
import ApodUser from "./ApodUser.js";

import {APOD_API_URL, API_KEY} from "./const.js";

const Apod = prop => {

const [apodObj, setApodObj] = useState({});
const [apodDate, setApodDate] = useState('2020-10-04');

useEffect(() => {
    axios
    .get(`${APOD_API_URL}?api_key=${API_KEY}`)
    .then(res => {
        setApodObj(res.data);
    })
    .catch(err => {
        console.log("Error: ",err);
    })
},[]);

const [userApodObj, setUserApodObj] = useState({});

useEffect(() => {
    axios
    .get(`${APOD_API_URL}?api_key=${API_KEY}&date=${apodDate}`)
    .then(res => {
        setUserApodObj(res.data);
    })
    .catch(err => {
        console.log("Error: ",err);
    })
},[apodDate]);

const changeDate = date => {
    setApodDate(date);
}

  return (
    <div className="Apod">
        <ApodCurrent apodObj={apodObj}/>
        <ApodUser userApodObj={userApodObj} changeDate={changeDate}/>
    </div>
  );
}

export default Apod;
