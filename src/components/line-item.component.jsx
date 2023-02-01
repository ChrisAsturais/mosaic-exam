import { Fragment } from "react"
import BtnLineItem from "./btn-line-item.component";

const LineItem = ({
  products,
  lineItem,
  OnSubmit,
  handleFormChange,
  OnAddItem,
  OnRemoveItem
}) => {
  return (
    <Fragment>
      <BtnLineItem 
        text='ADD ITEM'
        onhandleLineItem={OnAddItem}
      />
      {
        lineItem.length > 1 ? 
        <BtnLineItem 
          text='REMOVE ITEM'
          onhandleLineItem={OnRemoveItem}
        /> : ''
      }

      <form onSubmit={OnSubmit} className='mt-5 mb-5'>
        {lineItem.map((form, index) => {
          return (
            <div key={index}>
              <select
                name="name"
                onChange={(event) => handleFormChange(event, index)}
              >
                <option>Select Item...</option>
                {products.map((product) => {
                  return <option key={product.id}>{product.name}</option>;
                })}
              </select>
              <input
                name="quantity"
                type="number"
                onChange={(event) => handleFormChange(event, index)}
              />
            </div>
          );
        })}

        <button className="btn-submit" type="submit">
          SUBMIT
        </button>
      </form>
    </Fragment>
  );
};

export default LineItem;
