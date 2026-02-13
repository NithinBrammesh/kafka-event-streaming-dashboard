export default function Metrics({orders}) {

  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum,o)=> sum + Number(o.amount),
    0
  );

  const avg = totalOrders ? (totalRevenue/totalOrders).toFixed(0) : 0;

  return(
    <div className="metrics">

      <div className="metricCard">
        <h4>Total Orders</h4>
        <h2>{totalOrders}</h2>
      </div>

      <div className="metricCard">
        <h4>Total Revenue</h4>
        <h2>₹ {totalRevenue}</h2>
      </div>

      <div className="metricCard">
        <h4>Avg Order</h4>
        <h2>₹ {avg}</h2>
      </div>

    </div>
  );
}