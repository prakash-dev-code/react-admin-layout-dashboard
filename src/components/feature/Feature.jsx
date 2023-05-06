import {BsThreeDotsVertical} from 'react-icons/bs';
import './feature.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaArrowDown } from 'react-icons/fa';

const Feature = () => {
  return (
    <div className='feature'>
        <div className="top">
            <h1 className="title">
                Total Revenue
            </h1>
            <BsThreeDotsVertical />
        </div>
        <div className="bottom">
            <div className="featureChart">
           <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
            </div>
            <p className="title">Total sale made today</p>
            <p className="amount">₹ 6000</p>
            <p className="desc">Previous transactions processing. Last payment may not be included.</p>

            <div className="summary">

                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <FaArrowDown fontSize="small"/>
                        <div className="resultAmount">₹ 1200</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last week</div>
                    <div className="itemResult positive">
                        <FaArrowDown/>
                        <div className="resultAmount">₹ 1200</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last month</div>
                    <div className="itemResult negative">
                        <FaArrowDown/>
                        <div className="resultAmount">₹ 1200</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
};

export default Feature;
