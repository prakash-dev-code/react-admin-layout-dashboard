import * as React from 'react';
import './ordertable.css'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../Ordertablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function DataTable() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const  actionColum = [{ field: "action", headerName: "Action", width:200 , renderCell:(params)=>{
    return(
      <div className='cellAction'>
       <Link to="/order/profile_view " > <div className="viewButton">View</div>
       </Link>
        <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>

      </div>
    )
  }}]
  return (
    <div className='ordertable'>
      <div className="ordertableTitle">
        Add New Order 
        <Link to="/order/new"  className='link'>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColum)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}



