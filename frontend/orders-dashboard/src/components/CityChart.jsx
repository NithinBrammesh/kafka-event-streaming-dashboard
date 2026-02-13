import {
 AreaChart,
 Area,
 XAxis,
 YAxis,
 Tooltip,
 ResponsiveContainer,
 CartesianGrid
} from "recharts";

export default function CityChart({ orders }) {

 const data = orders.map((o,i)=>({
   index:i,
   amount:Number(o.amount)
 }));

 return(
   <div className="chartCard">
     <h3>Revenue Fluctuation</h3>

     <ResponsiveContainer width="100%" height={300}>
       <AreaChart data={data}>
         <defs>
           <linearGradient id="colorUv">
             <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
             <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
           </linearGradient>
         </defs>

         <CartesianGrid strokeDasharray="2 4" opacity={0.3} />
         <XAxis dataKey="index"/>
         <YAxis/>
         <Tooltip/>
         <Area
           type="monotone"
           dataKey="amount"
           stroke="#6366f1"
           fillOpacity={1}
           fill="url(#colorUv)"
         />
       </AreaChart>
     </ResponsiveContainer>
   </div>
 );
}