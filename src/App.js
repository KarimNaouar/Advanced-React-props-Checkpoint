import React from "react";
import "./App.css";
import PropTypes from 'prop-types';


const products = [
  { price: "125", name: "product1", category: "clothes" },
  { price: "524", name: "product2", category: "electronic" },
  { price: "625", name: "product3", category: "clothes" },
  { price: "25", name: "product4", category: "clothes" },
];
const ProductTable = (props) => {
  return (
    <>
      {props.products.map((el, i) => (
        <tr key={i}>
          <td style={tableStyle}>{el.name}</td>
          <td style={tableStyle}>{el.price}</td>
          <td style={tableStyle}>{el.category}</td>
        </tr>
      ))}
    </>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array,
}

var tableStyle = {
  "border": "1px solid white"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableStyle}>name</th>
              <th style={tableStyle}>price</th>
              <th style={tableStyle}>category</th>
            </tr>
          </thead>
          <tbody>
            <ProductTable products={products} />
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
