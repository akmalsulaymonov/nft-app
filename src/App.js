import {useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main'
import PunkList from './components/PunkList'
import './App.css';
import axios from 'axios';

function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect( () => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xBF6dFf28aE12D9Da0eC736D22170454d831CBA82&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()

  }, [])

  return (
    <div className="app">
      <Header />
      { punkListData.length > 0 && (
          <>
            <Main 
              selectedPunk={selectedPunk} 
              punkListData={punkListData} 
            />
            <PunkList 
              punkListData={punkListData} 
              setSelectedPunk={setSelectedPunk} 
            />
          </>
      )}
    </div>
  );
}

export default App;
