import React from "react";
import Chart from "../components/charts/Chart";
import Feature from "../components/feature/Feature";
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import Table from "../components/table/Table";
import Widget from '../components/widget/Widget';

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
        </div>
        <div className="charts">
          <Feature/>
          <Chart aspect={3 / 1} title="Last 6 Months (Revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Activity</div>
          <Table/>
        </div>
      </div>
    </div>
  )
};

export default Home;
