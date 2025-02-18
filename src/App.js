import logo from './logo.svg';
import './App.css';
import Services from './compenents/Services';
import List from './compenents/List';
import Header from './compenents/Header';
import Home from './compenents/Home';
import Tabs from './compenents/Tabs';
import { useState } from 'react';
import Search from './compenents/Search';
function App() {
  const [data, setData] = useState(null); // Holds fetched weather data
 const [dataSearch,setSearch]=useState('');
 const [selectedTab, setSelectedTab] = useState("");


  return (
    <div className="App">

      <Header  />
      <Home  />
      <Tabs data={data} TabonChange={setSelectedTab} />
      <Search onSearch={setSearch}  />
      <Services  searchValue={dataSearch} onDataFetched={setData} />
      <List data={data} tabValue={selectedTab} />



    </div>
  );
}

export default App;
