import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  // State for holding form input values
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevents page refresh on form submission

    // Create new plant data object from input values
    const newPlant = { name, image, price };

    // Send new plant data to the server
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON data format
      },
      body: JSON.stringify(newPlant), // Convert data to JSON format
    })
      .then((response) => response.json())
      .then((data) => setPlants([...plants, data])); // Add new plant to list
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        {/* Input for plant name */}
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
        />
        {/* Input for plant image URL */}
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
        />
        {/* Input for plant price */}
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
        />
        {/* Submit button */}
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
