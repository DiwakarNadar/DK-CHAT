import React from 'react'
import { styled } from "@mui/material";
import { Link as LinkComponent } from 'react-router-dom';

export const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const InputBox=styled("input")({
  height: "100%",
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  padding: "0 3rem",
borderRadius:"0.8rem",
backgroundColor:"rgba(0,0,0,0.1)",})