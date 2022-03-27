import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Redirect from "./components/Redirect";

function App() {
  const socialLinks = { 
    linkedinURL: "https://www.linkedin.com/in/avik-kundu-0b837715b",
    githubURL: "https://github.com/Lucifergene/",
    twitterURL: "https://twitter.com/avik6028",
    mediumURL: "https://avikkundu.medium.com/",
    devURL: "https://dev.to/avik6028",
    speakerdeckURL: "https://speakerdeck.com/avik6028",
    facebookURL: "https://www.facebook.com/avikonweb",
    hackerrankURL: "https://www.hackerrank.com/avik6028",
    instagramURL: "https://www.instagram.com/avik6028/",
    portfolioURL: "https://www.avikkundu.in/",
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main url={socialLinks}/>} />

        <Route path="/@linkedin" element={<Redirect url={socialLinks.linkedinURL} />} />
        <Route path="/@github" element={<Redirect url={socialLinks.githubURL} />} />
        <Route path="/@twitter" element={<Redirect url={socialLinks.twitterURL} />} />
        <Route path="/@medium" element={<Redirect url={socialLinks.mediumURL} />} />
        <Route path="/@dev" element={<Redirect url={socialLinks.devURL} />} />
        <Route path="/@speakerdeck" element={<Redirect url={socialLinks.speakerdeckURL} />} />
        <Route path="/@facebook" element={<Redirect url={socialLinks.facebookURL} />} />
        <Route path="/@instagram" element={<Redirect url={socialLinks.instagramURL} />} />
        <Route path="/@portfolio" element={<Redirect url={socialLinks.portfolioURL} />} />
      </Routes>
    </Router>
  );
}

export default App;
