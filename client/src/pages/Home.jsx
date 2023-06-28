import React, { useState, useEffect } from 'react'

const Home = () => {

  const [posts, setPosts] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPosts(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post => (
          <>
            <div className='post' key={post.id}>
              <span>{post.id}</span>
              <span>{post.title}</span>
              <div>{post.body}</div>
            </div>

          </>
        ))}
      </div>
    </div>
  )
}

export default Home

