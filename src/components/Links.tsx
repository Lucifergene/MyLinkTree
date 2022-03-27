import React from "react";

function Links({ link }: any) {
  return (
    <div>
      <div className="links links_first">
        <a
          className="links links_first"
          href={link.portfolioURL}
          target="_blank"
        >
          Portfolio
        </a>
      </div>
      <div className="links links_second">
        <a className="links links_second" href={link.githubURL} target="_blank">
          GitHub
        </a>
      </div>
      <div className="links links_third">
        <a
          className="links links_third"
          href={link.linkedinURL}
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <div className="links links_fourth">
        <a
          className="links links_fourth"
          href={link.twitterURL}
          target="_blank"
        >
          Twitter
        </a>
      </div>
      <div className="links links_fifth">
        <a className="links links_fifth" href={link.mediumURL} target="_blank">
          Medium
        </a>
      </div>
      <div className="links links_first">
        <a className="links links_first" href={link.devURL} target="_blank">
          Dev Community
        </a>
      </div>
      <div className="links links_second">
        <a
          className="links links_second"
          href={link.speakerdeckURL}
          target="_blank"
        >
          Specker Deck
        </a>
      </div>
      <div className="links links_third">
        <a
          className="links links_third"
          href={link.hackerrankURL}
          target="_blank"
        >
          Hackerrank
        </a>
      </div>
      <div className="links links_fourth">
        <a
          className="links links_fourth"
          href={link.instagramURL}
          target="_blank"
        >
          Instagram
        </a>
      </div>
      <div className="links links_fifth">
        <a
          className="links links_fifth"
          href={link.facebookURL}
          target="_blank"
        >
          Facebook
        </a>
      </div>
    </div>
  );
}

export default Links;
