import './widget.css';
import {FaArrowUp,FaList,FaRupeeSign,FaShoppingCart,FaUser} from "react-icons/fa"

const Widget = ({type}) => {
  let data;

  // temprary
  const amount = 100
  const diff = 20
  switch(type){
    case "user" :
      data = {
        title: "Users",
        isMoney: false,
        all: "See all users",
        use: <FaUser className='use' style={{color:"orange"}}/>
      };
      break;
      case "order" :
        data = {
          title: "Orders",
          isMoney: false,
          all: "See all orders",
          use: <FaShoppingCart className='use' style={{color:"blue"}}/>
        };
        break;
        case "earning" :
          data = {
            title: "Earnings",
            isMoney: true,
            all: "View net earnings",
            use: <FaRupeeSign className='use' style={{color:"brown"}}/>
          };
          break;
          case "balance" :
            data = {
              title: "Balance",
              isMoney: true,
              all: "See details",
              use: <FaList className='use' style={{color:"darkgreen"}}/>
            };
            break;
      default:
      break;
  }
  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="number">{data.isMoney && "₹"} {amount}</span>
          <span className="all">{data.all}</span> 
        </div>
        <div className="right">
          <div className="percentage positive">
            <FaArrowUp/>
            {diff} %
          </div>
          {data.use}
        </div>
    </div>
  )
};

export default Widget;
