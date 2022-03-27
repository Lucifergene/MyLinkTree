import React from "react";
import Bio from "./Bio";
import Links from "./Links";
import ProfilePic from "./ProfilePic";

function Main({url}:any) {
  return (
    <div>
      <ProfilePic />
      <Bio />
      <Links link={url} />
      <br />
    </div>
  );
}

export default Main;
