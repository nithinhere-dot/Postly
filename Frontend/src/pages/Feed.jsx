import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Feed() {
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPosts(res.data.posts)
      }
    )
  },[])
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