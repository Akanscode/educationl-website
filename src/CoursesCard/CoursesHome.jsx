import React from "react";
//import Back from "../CommonComponent/BackComponent/BackComponent";
import CoursesCard from "./CoureseCard";
import OnlineCourses from "./OnlineCourses";

const CoureseHome = () => {
  return (
    <>
      {/*<Back title="Explore Courses" />*/}
      <CoursesCard />

      <OnlineCourses />
    </>
  );
};
export default CoureseHome;
