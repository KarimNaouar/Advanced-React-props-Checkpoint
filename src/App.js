import React from "react";
import "./App.css";
import "./style.css";

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
          <td>{el.name}</td>
          <td>{el.price}</td>
          <td>{el.category}</td>
        </tr>
      ))}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>category</th>
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
