export default function OrdersTable({ orders }) {

  return (

    <div className="tableWrapper">

      <table>

        <thead>
          <tr>
            <th>S.No</th>   
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Buyer</th>
            <th>City</th>
            <th>State</th>
            
            {/* <th>SKU</th> */}
            <th>Description</th>
            <th>Quantity</th>
            <th>Amount (₹)</th>
            <th>Event Time</th>
          </tr>
        </thead>

        <tbody>

          {orders.map((o,i)=>(

            <tr key={i}>
              <td>{i + 1}</td>   {/* ✅ Serial Number */}
              <td>{o.order_id}</td>
              <td>{o.buyer_name}</td>
              <td>{o.city}</td>
              <td>{o.state}</td>
              <td>{o.order_date}</td>
              {/* <td>{o.sku}</td> */}
              <td className="description">{o.description}</td>
              <td>{o.quantity}</td>
              <td>{o.amount}</td>
              <td>
  {o.event_time
    ? new Date(Number(o.event_time)).toLocaleString()
    : ""}
</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}