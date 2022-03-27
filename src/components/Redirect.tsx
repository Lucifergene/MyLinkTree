import React, { useEffect } from "react";

const Redirect = ({ url }:any) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <h5>Redirecting to <br/> {url}</h5>;
};

export default Redirect;
