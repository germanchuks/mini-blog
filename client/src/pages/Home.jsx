import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import arrayShuffle from 'array-shuffle';
import { shuffle } from 'fast-shuffle'

const Home = () => {

  const [posts, setPosts] = useState([])
  
  //Gets Rest fake api from fakestore and store to 'posts' state
  const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPosts(data)
      })
  }

  //Runs fetch api request only on load
  useEffect(() => {
    fetchUserData()
  }, [])
  
  return (
    <div className='home'>
      <div className='posts'>
        
        {posts.map(post => (
          <>
            <div className=  'post' key={post.id}>
              <div className="img">
                <img src={post.image} />
              </div>
               <div className="contents">
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.description}</p>
                <button>See more</button>
              </div>
            </div>

          </>
        ))}
      </div>
    </div>
  )
}

export default Home

