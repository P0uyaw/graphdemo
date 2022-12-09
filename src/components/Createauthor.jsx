import { gql, useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { useState } from 'react';


const CREATE_AUTHOR =gql`
mutation createAuthor($name: String!) {
  createAuthor(name: $name) {
    msg
    status
  }
}
`


const Createauthor = () => {
  const [submit] = useMutation(CREATE_AUTHOR);
  const [name , setName] = useState("")

  const click = async () =>{
    try {
      const {
        data : {createAuthor: {msg, status}}
      } = await submit({
        variables: {
          name: name
        }
      })
      console.log(msg, status)
    } catch (error) {
      console.log(error)
    }

  }
  console.log(name)
  return (
    <>
    <body>
    <h3 >Createauthor</h3>
    <input className='input' type="text" required="required" value={name}  onChange={e => setName(e.target.value)} />
    <button className='btnadd' type='submit' onClick={click}>Add Author</button>
    </body>
    </>
  )
}

export default Createauthor