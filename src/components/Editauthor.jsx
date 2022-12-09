import { gql , useMutation } from '@apollo/client'
import React, { useState } from 'react'



const Edit_Author = gql`
mutation Mutation($id: ID!, $name: String!) {
    editAuthor(_id: $id, name: $name) {
      msg
      status
    }
  }
`

const Editauthor = () => {
    const [edit] = useMutation(Edit_Author);
  const [name , setName] = useState('')
  

  const Edit = async () =>{
    try {
      const {
        data : {createAuthor: {msg, status}}
      } = await edit({
        variables: {
          name: name,
          // id: 
        }
      })
      console.log(msg, status)
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <>
    <div>EditAuthor</div>
    <input className='input' type="text" required="required" value={name}  onChange={e => setName(e.target.value)} />
    <button className='btnadd' type='submit' onClick={Edit}>Edit Author</button>
    </>
  )
}

export default Editauthor