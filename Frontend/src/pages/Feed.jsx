import React from 'react'
import { useState } from 'react'

function Feed() {
  const [posts,setPosts]=useState([])
  return (
    <section>
      {
        posts.length>0 ? (
          posts.map((post)=>(
            <div key={post._id} >
              <img src={post.image}/>
              <p>{post.caption}</p>
            </div>
          ))
        ):(
          <h1>No Posts available</h1>
        )
      }
    </section>
  )
}

export default Feed