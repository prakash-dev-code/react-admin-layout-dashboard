import './chart.css';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name:"January",Total:1200
    },
    {
        name:"February",Total:3200
    },
    {
        name:"March",Total:400
    },
    {
        name:"April",Total:9200
    },
    {
        name:"May",Total:900
    },
    {
        name:"June",Total:1700
    }
];

const Chart = ({aspect, title}) => {
    return (
        <div className="chart">
         <div className="title">{title}</div>

            <ResponsiveContainer width="100%" aspect={aspect}  >
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        
                    </defs>
                    <XAxis dataKey="name" stroke='gray' />
                  
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                    {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
};

export default Chart;

