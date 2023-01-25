import { useState } from 'react'
import milk from '../public/milk.png';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Search from './components/Search';

function App() {

  return (
    <>
      <Header />
      <Search />
      <ProductList />
    </>
  )
};

export default App;
