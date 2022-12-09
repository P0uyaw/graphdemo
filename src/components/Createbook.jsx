import { gql , useMutation } from '@apollo/client'
import React, { useState } from 'react'
import {useParams} from "react-router-dom";


const CREATE_BOOK =gql`
mutation CreateBook($title: String!, $authorId: ID!) {
  CreateBook(title: $title, authorId: $authorId) {
      msg
      status
    }
  }
  `

const Createbook = () => {
    const [submit] = useMutation(CREATE_BOOK);
    const [title , setTitle] = useState("")
    // const [id , setId] = useState("")
    const params = useParams();

console.log(title)
console.log(params)


    const click = async () =>{
        try {
          const {
            data : {CreateBook: {msg, status}}
          } = await submit({
            variables: {
              title: title,
                authorId:params.id
              }
          })
          console.log(msg, status)
        } catch (error) {
          console.log(error)
        }
    
      }
// console.log(title)



  return (
    <>
    <div>Createbook</div>
    <input className='input' type="text" required="required" onClick={click} value={title}  onChange={e => setTitle(e.target.value)} />
    {/* <input className='input' type="text" required="required" value={id}  onChange={e => setId(e.target.value)} /> */}
    <button className='btnadd' type='submit' onClick={click}>Add Book</button>
    </>
  )
}

export default Createbook