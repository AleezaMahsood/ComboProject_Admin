import React, { useState, useEffect } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {
  const url = 'http://localhost:5555'
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/food/listFood`)
      if (response.data.data) {
        setList(response.data.data)
      } else {
        toast.error('Failed to fetch the list.')
      }
    } catch (error) {
      toast.error('An error occurred while fetching the list.')
    }
  }
   useEffect(()=>{
    fetchList()
   },[])

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/food/removeFood`, { id: foodId });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred while removing the food.');
    }
  };
  

  return (
    <div>
      <div className="last add flex-col">
        <p>All Foods List</p>
        <div className="last-table">
          <div className="table-format-title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+item.image} alt='' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default List
