import React from 'react'
import { useState, useEffect } from 'react'
// import arrayShuffle from 'array-shuffle';
import { shuffle } from 'fast-shuffle'
import { nanoid } from 'nanoid';

const Menu = () => {

  const [otherPosts, setOtherPosts] = useState([])

  const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setOtherPosts(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {(shuffle(otherPosts).slice(0, 4)).map(post => (
        <div className="post" key={nanoid()}>
          <img src={post.image} alt="" />
          <h3>{post.title}</h3>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu