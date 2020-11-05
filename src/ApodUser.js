import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';

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
        <StyledImg src={userApodObj.url} alt={userApodObj.title}></StyledImg>
        <StyledH2>{userApodObj.title}</StyledH2>
        <StyledText>{userApodObj.explanation}</StyledText>
        <Button variant="contained" color="primary" href={userApodObj.hdurl} >HD picture</Button>
        <p>Copyrigt: {userApodObj.copyright}</p>
    </div>
  );
}

const StyledText = styled.div`
  font-size: ${pr => pr.theme.textFontSize};
  font-family: ${pr => pr.theme.textFontFamily};
  text-align: center;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
`;

const StyledImg = styled.img`
  &:hover {
    transform: scale(0.985);
    transition: transform 1.5s ease-in-out;
  }
  transition: transform 1.5s ease-in-out;
`;

const StyledH2 = styled.h2`
  font-size: ${pr => pr.theme.h2FontSize};
  font-family: ${pr => pr.theme.h1FontFamily};
`;

export default ApodUser;
