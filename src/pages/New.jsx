import {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { MdDriveFolderUpload } from "react-icons/md";

const New = ({inputs, title}) => {
    const [file, setFile] = useState("")
   
    
  return (
    <div className="new">
        <Sidebar />
        <div className="newContainer">
            <Navbar/>
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
                <img src={file ? URL.createObjectURL(file) : "https://ik.imagekit.io/e99ob0o1vl/addImage.jpg?updatedAt=1680613060244"} alt="avatar" />
            </div>
            <div className="right">
                <form>
                <div className="formInput">
                        <label htmlFor="file" ><MdDriveFolderUpload className="icon"/></label>
                        <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} required style={{display:"none"}}  />
                    </div>
                    
                    {inputs.map((input) => (
                        <div className="formInput" key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder} />
                        </div>

                    ))}

                    
                    <button>Send</button>
                </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default New;
