
import Navbar from "../components/Navbar";
import DataTable from "../components/ordertable/Ordertable";
import Sidebar from "../components/Sidebar";


const Order = () => {
  return (
    <div className="order">
      <Sidebar/>
      <div className="orderContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
};

export default Order;
