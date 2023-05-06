import './../App.css';
import Navbar from "../components/Navbar";
import View from './view.jpg'
import Sidebar from "../components/Sidebar";
import Chart from '../components/charts/Chart'
import List from '../components/table/Table';

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src={View} alt="avatar" className='itemImg' />
                            <div className="details">
                                <div className="itemTitle">Steve Smith</div>
                                <div className="detailItem">
                                    <div className="itemKey">Email:</div>
                                    <div className="itemValue">stevesmith@gamil.com</div>
                                </div>
                                <div className="detailItem">
                                    <div className="itemKey">Phone:</div>
                                    <div className="itemValue">+91-9878952102</div>
                                </div>
                                <div className="detailItem">
                                    <div className="itemKey">Address:</div>
                                    <div className="itemValue">Govindpura, Bhopal</div>
                                </div>
                                <div className="detailItem">
                                    <div className="itemKey">Country:</div>
                                    <div className="itemValue">India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="Perfomance of last 6 Months" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};


export default Single;
