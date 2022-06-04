import React, { useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemsList from "./components/ItemsList";

function App() {
  const [cars, setCars] = useState([
    { id: 1, brand: "BMW", model: "X1", color: "black" },
    { id: 2, brand: "BMW", model: "X2", color: "red" },
    { id: 3, brand: "BMW", model: "X3", color: "green" },
  ]);

  const addCar = (newCars) => {
    setCars([...cars, newCars]);
  };

  const removeCar = (car) => {
    setCars(cars.filter((c) => c.id !== car.id));
  };

  return (
    <div className="wrapeer">
      <ItemForm createCar={addCar} />
      {cars.length ? (
        <ItemsList remove={removeCar} cars={cars} title="List of cars:" />
      ) : (
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          No cars added!
        </h2>
      )}
    </div>
  );
}

export default App;
