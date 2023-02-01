import { Fragment } from "react"
import BtnLineItem from "./btn-line-item.component"

const OrderSummary = ({lineItem, OnFinish}) => {
  const orders = Object.values(lineItem.reduce((item, index) => {
    item[index.name] = item[index.name] || {
      name: index.name,
      price: index.price,
      quantity: 0
    };

    item[index.name].quantity += Number(index.quantity);
    

    return item;

  },{}));

  let total = 0;
  const vat = 0.12;

  return (
    <Fragment>
      {
        orders.map((order) => {
          total = total + order.price * order.quantity;
          return (
            <div>
              <span>{order.name}</span> 
              <span className="total-per-item">{(order.price * order.quantity).toFixed(2)}</span>
            </div>
          )
        })
      }
      
      <hr />

      <div className="mt-5">
        <span>Total</span>
        <span className="total-per-item">{total.toFixed(2)}</span>
      </div>

      <div>
        <span>VATable</span>
        <span className="total-per-item">{(total -= total * vat).toFixed(2)}</span>
      </div>

      <div className="mb-5">
        <span>VAT_Tax</span>
        <span className="total-per-item">{(total * vat).toFixed(2)}</span>
      </div>

      <BtnLineItem 
        onhandleLineItem={OnFinish}
        text='Finish'
      />
    </Fragment>
  )
}

export default OrderSummary
