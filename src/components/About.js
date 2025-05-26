import React from "react";
import user from "../data/user";
import { default as Links } from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio !== "" && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
