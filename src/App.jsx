import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Orders from './Pages/Orders/Orders'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
           <Route path='/' element={<Add />} />
            <Route path='/add' element={<Add/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/orders' element={<Orders />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;