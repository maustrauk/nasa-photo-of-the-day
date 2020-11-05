import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';

const ApodCurrent = prop => {
    const {apodObj} = prop;
  return (
    <div className="ApodCurrent">
        <StyledH1>Astronomy Picture Of the Day: {apodObj.date}</StyledH1>
        <StyledImg src={apodObj.url} alt={apodObj.title}></StyledImg>
        <StyledH2>{apodObj.title}</StyledH2>
        <StyledText>{apodObj.explanation}</StyledText>
        <Button variant="contained" color="primary" href={apodObj.hdurl} >HD picture</Button>
        <p>Copyrigt: {apodObj.copyright}</p>
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
    transform: scale(1.085);
    transition: transform 1.5s ease-in-out;
  }
  transition: transform 1.5s ease-in-out;
`;

const StyledH1 = styled.h1`
  font-size: ${pr => pr.theme.h1FontSize};
`;

const StyledH2 = styled.h2`
  font-size: ${pr => pr.theme.h2FontSize};
  font-family: ${pr => pr.theme.h1FontFamily};
`;

export default ApodCurrent;
