import React from 'react'

import Header from './Header.jsx';
import Banner from './banner.jsx';
import Footer from './Footer.jsx';
import RowList from './Row_bar/rowList.jsx';



const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </div>
  )
}

export default App