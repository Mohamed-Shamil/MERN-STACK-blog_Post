// eslint-disable-next-line no-unused-vars
import React from "react";
import LandingPage from "../../Components/landingPage/landingPage";
import LandingPageNavbar from "../../Components/navbar/landingPagenavbar";

function landingPage() {
  return (
    <div>
      <LandingPageNavbar />
      <LandingPage />
    </div>
  );
}

export default landingPage;
