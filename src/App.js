import { useState } from 'react';
import './App.css';
import LineItem from './components/line-item.component';
import OrderSummary from './components/order-summary.component';

const App = () => {
  const [submit, setSubmit] = useState(false);
  const [lineItem, setLineItem] = useState([
    {
      name: '',
      price: 0,
      quantity: 0,
    }
  ]);
  const products = [
    {
      id: 1,
      name: 'Apple',
      price: 29.99
    },
    {
      id: 2,
      name: 'Oranges',
      price: 35.00
    },
    {
      id: 3,
      name: 'lemons',
      price: 40.00
    },
  ];

  const OnAddItem = () => {
    let item = {
      name: '',
      price: 0,
      quantity: 0,
    };

    setLineItem([...lineItem, item]);
  };

  const OnRemoveItem = (index) => {
    let removeItem = [...lineItem];
    removeItem.splice(index, 1)
    setLineItem(removeItem)
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    setSubmit(true)
  }

  const OnFinish = () => {
    setLineItem([
      {
        name: '',
        price: 0,
        quantity: 0,
      }
    ])
    setSubmit(false)
  }

  const handleFormChange = (event, index) => {
    let item = [...lineItem];
    item[index][event.target.name] = event.target.value;

    if (event.target.name === 'name') {
      products.forEach(product => {
        if (product.name === event.target.value) {
          item[index]['price'] = product.price;
        }
      })
    }
    

    setLineItem(item);
  }

  return (
    <div className="App">
      {
        submit ? 
        <OrderSummary
          OnFinish={OnFinish}
          lineItem={lineItem}
        /> : 
        <LineItem
          OnSubmit={OnSubmit}
          handleFormChange={handleFormChange}
          OnRemoveItem={OnRemoveItem}
          OnAddItem={OnAddItem}
          lineItem={lineItem}
          products={products}
        />
      }
    </div>
  );
}

export default App;
