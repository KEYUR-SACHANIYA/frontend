import { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Table from './components/Table';
import { fetchLists, fetchListsByName } from './service';
import Pagination from './components/Pagination';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [lists, setLists] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [inputNumber, setInputNumber] = useState(5);
  const [loading, setLoading] = useState(false);
  
  const handleSearchValue = (value) => {
    if (value.key === 'Enter' || value.keyCode === 13) {
      setLoading(true)
      fetchListsByName(searchValue).then((res) => {
        setLists(res.data)
        setInputNumber(5)
        res.data && res.data.length ? setCurrentPage(1) : setCurrentPage(0)
      }).catch(error => console.log(error))
      .finally(() => setLoading(false))
    }
  }

  useEffect(() => {
      setLoading(true)
      fetchLists(inputNumber, searchValue).then((res) => {
        setLists(res.data)
        res.data && res.data.length ? setCurrentPage(1) : setCurrentPage(0)
      }).catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const handleInput = () => {
    if(inputNumber <= 10) {
      setLoading(true)
      fetchLists(inputNumber, searchValue).then((res) => {
        setLists(res.data)
        res.data && res.data.length ? setCurrentPage(1) : setCurrentPage(0)
      }).catch(error => console.log(error))
      .finally(() => setLoading(false))
    }
  }

  return (
    <>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} handleSearchValue={handleSearchValue} />
      {loading ? <h1>Loading...</h1> :
      <>
         <Table data={lists} currentPage={currentPage} />
         {lists && <Pagination data={lists} currentPage={currentPage} setCurrentPage={setCurrentPage} inputNumber={inputNumber} setInputNumber={setInputNumber} handleInput={handleInput} />} 
      </>}
    </>
  );
}

export default App;
