import React, { useEffect } from "react";
const axios = require("axios");


const profilePage = () => {
  let data;
  const callProfilePage = async () => {
    console.log("function called");
    try {
      console.log("11");
      const response = await axios.get("/profilePage", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log("19");

      data = await response.data;
      console.log(data);
      console.log("23");
      if (response.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("29");
      console.log("error in profile page ", err);
    }
  };
  useEffect(() => {
    callProfilePage();
  }, []);

  return (
    <div>
      <h1>About</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default profilePage;
