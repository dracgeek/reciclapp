import React, { PureComponent } from "react";
// import { Link } from "react-router-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
} from 'recharts';

const data = [
  {
    name: 'Enero', uv: 4000, Material_mes: 1000, amt: 2400,
  },
  {
    name: 'Febrero', uv: 3000, Material_mes: 1398, amt: 2210,
  },
  {
    name: 'Marzo', uv: 2000, Material_mes: 1400, amt: 2290,
  },
  {
    name: 'Abril', uv: 2780, Material_mes: 2908, amt: 2000,
  },
  {
    name: 'Mayo', uv: 1890, Material_mes: 3800, amt: 2181,
  },
  {
    name: 'Junio', uv: 2390, Material_mes: 4300, amt: 2500,
  },
  {
    name: 'Julio', uv: 3490, Material_mes: 4900, amt: 2100,
  },
];
class index extends PureComponent {
  

  render() {
    return (
      <div className="container mt-5">
         <h4>Reciclaje</h4>
         <br></br>
        <LineChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Material_mes" stroke="#55db3d" activeDot={{ r: 8 }} />
        
      </LineChart>
      
      </div>
    );
  }
}


export default index;