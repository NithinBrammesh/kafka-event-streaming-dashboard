import { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import OrdersTable from "./components/OrdersTable";
import CityChart from "./components/CityChart";
import Navbar from "./components/Navbar";
import Metrics from "./components/Metrics";

export default function OrdersDashboard() {

  const [orders,setOrders] = useState([]);
  const [city,setCity] = useState("");
  const [name,setName] = useState("");
  const [limit,setLimit] = useState("");

  // ✅ API FETCH (Initial Load + Filters)
  useEffect(()=>{

  setOrders([]); // IMPORTANT reset old data

  fetch(`http://localhost:1880/orders?city=${city}&name=${name}&limit=${limit}`)
    .then(res=>res.json())
    .then(data=>{
      setOrders(data);
    });

},[city,name,limit]);

  // 🚀 REALTIME WEBSOCKET CONNECTION
useEffect(() => {

  const ws = new WebSocket("ws://localhost:1880/orders-live");

  ws.onmessage = (event) => {

    const newOrder = JSON.parse(event.data);

    if (!newOrder || !newOrder.order_id) return;

    if (city && newOrder.city.toUpperCase() !== city.toUpperCase()) return;

    if (name && !newOrder.buyer_name.toUpperCase().includes(name.toUpperCase())) return;

    setOrders(prev => {

      const exists = prev.some(o => o.order_id === newOrder.order_id);
      if (exists) return prev;

      return [newOrder, ...prev];
    });

  };

  return () => ws.close();

}, [city, name]);


  return(

    <div className="dashboard">

      {/* NAVBAR HEADER */}
      <Navbar/>

      {/* METRICS */}
      <Metrics orders={orders} />

      {/* CHART */}
      <CityChart orders={orders} />

      <h2>Orders Dashboard</h2>

      {/* FILTER BAR */}
      <FilterBar
        city={city}
        setCity={setCity}
        name={name}
        setName={setName}
        limit={limit}
        setLimit={setLimit}
      />

      {/* TABLE */}
      <OrdersTable orders={orders}/>

    </div>
  );
}