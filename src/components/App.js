import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // State to store all plant data
  const [plants, setPlants] = useState([]);
  // State to hold the search term entered by the user
  const [search, setSearch] = useState("");

  // Fetch plant data from server when the component loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        // Set the plants state with the fetched data
        setPlants(data);
        // Log data for debugging purposes
        console.log(data);
      });
  }, []); // Empty array makes sure this only runs once

  // Filter plants based on search input
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      {/* Pass filtered plants and functions to PlantPage as props */}
      <PlantPage
        plants={filteredPlants}
        setPlants={setPlants}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
