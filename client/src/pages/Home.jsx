import { nanoid } from 'nanoid'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ratingStar from "../img/star.png"
import { useLocation } from 'react-router-dom';
// import arrayShuffle from 'array-shuffle';
// import { shuffle } from 'fast-shuffle'



const Home = () => {
  //Get selected category
  const cat = useLocation().search;

  const [itemServer, setItemServer] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/items/${cat}`);
        setItemServer(res.data)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData();
  }, [cat])


  //   useEffect(() => {
  //     //Gets Rest fake api from fakestore and store to 'posts' state
  //     const fetchUserData = async () => {
  //       await fetch("https://fakestoreapi.com/products")
  //         .then(response => {
  //           return response.json()
  //         })
  //         .then(data => {
  //           setItems(data)
  //         })
  //     }
  //     fetchUserData()
  //   }, [])

  return (
    <div className='home'>
      <div className='posts'>

        {itemServer.map(item => (

          <div className='post' key={nanoid()}>
            <div className="img">
              <img src={item.image} />
              <div className='price'>${item.price}</div>
              <div className='rating'>
                <span>{item.rating}.0</span>
                <img src={ratingStar} />
              </div>
            </div>
            <div className="contents">
              <Link className='link' to={`/post/${item.id}`}>
                <h1>{item.title}</h1>
              </Link>
              <p>{item.description}</p>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

