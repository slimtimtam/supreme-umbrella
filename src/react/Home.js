import React from "react";
import Test from './Test.js'
import Timetable from './Timetable.js'

class Home extends React.Component
{
  render() {
    return (
      <div>
        <p> Welcome Students Tara</p>
        <Test/>
        <Timetable/>
      </div>
    );
  }
}
export default Home
