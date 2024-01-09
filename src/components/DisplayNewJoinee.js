import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Button } from "react-bootstrap";
import html2canvas from "html2canvas";
import DesignVariant1 from "./DesignVariant1";
import DesignVariant2 from "./DesignVariant2";
import "../App.css";

const DisplayNewJoinee = ({ newJoineeId, variant }) => {
  console.log("Variant prop value:", variant);
  const [newJoinee, setNewJoinee] = useState({});
  const [downloadClicked, setDownloadClicked] = useState(false);

  useEffect(() => {
    if (newJoineeId < 0) {
      console.log("id less than 0");
    } else {
      axios
        .get(`http://localhost:8081/newjoinee/${newJoineeId}`)
        .then((response) => {
          console.log(response);
          setNewJoinee(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [newJoineeId]);

  const handleDownload = () => {
    setDownloadClicked(true);

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Use html2canvas to capture the content and convert it into an image
    html2canvas(document.getElementById("download-container"), {
      height: document.getElementById("download-container").scrollHeight,
    }).then((canvas) => {
      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL();

      // Create a temporary link element
      const a = document.createElement("a");
      a.href = dataURL;
      a.download = "employee_profile.png"; // Set the desired file name

      // Append the link to the body and trigger the click event
      document.body.appendChild(a);
      a.click();

      // Clean up: remove the temporary link and reset the state
      document.body.removeChild(a);
      setDownloadClicked(false);
    });
  };

  return (
    <>
      <Button
        className="button-download"
        variant="primary"
        onClick={handleDownload}
        disabled={downloadClicked}
      >
        {downloadClicked ? "Downloading..." : "Download"}
      </Button>
      {newJoineeId < 0 ? (
        <></>
      ) : (
        <>
      <div id="download-container">
          {variant === 1 && <DesignVariant1 newJoinee={newJoinee} />}
           {variant === 2 && <DesignVariant2 newJoinee={newJoinee} />}</div>
          
        </>
      )}
    </>
  );
};

export default DisplayNewJoinee;
