import logo from './logo.svg';
import './App.css';
import Services from './compenents/Services';
import List from './compenents/List';
import Header from './compenents/Header';
import Home from './compenents/Home';


import { useState } from 'react';
function App() {
  const [data, setData] = useState(null); // Holds fetched weather data

  return (
    <div className="App">

      <Header  />
      <Home  />
<Services onDataFetched={setData} />
<List data={data} />



    </div>
  );
}

export default App;
