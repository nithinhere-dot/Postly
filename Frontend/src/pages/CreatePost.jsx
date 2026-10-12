import React from 'react'
import axios from 'axios'

function CreatePost() {

  const handleSubmit=async (e)=>{
    e.preventDefault()

    const formData=new FormData(e.target)

    axios.post("http://localhost:3000/create-post",formData)
    }

  return (
    <section className='create-post-section'>
        <h1>Create post</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*"/>
            <input type="text" name='caption' required />
            <button type='submit'>Submit</button>
        </form>

    </section>
  )
}

export default CreatePost