import React, { useState } from 'react' ; 
import { gql, useQuery } from '@apollo/client';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link  } from 'react-router-dom';
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system';


const GET_AUTHORS = gql`
query GetAuthors {
  getAuthors {
    _id
    name
    createdAt
  }
}
`

const GetAllBooks = () => {


  const colorgrey = grey[400];
  const { data, loading,error, refetch } = useQuery(GET_AUTHORS );
  //rename


  if(error) return <>Error!</>
  if(loading) return <>loading...</>




  return (
    <>
    <Box sx={{display:"flex" , flexWrap:"wrap" , flex:1 , justifyContent:"space-evenly" , marginTop:3 , marginBottom:6}}>


    {data.getAuthors.map((item)=>{
      return(
        <>
        
        <Card sx={{ minWidth: 275 , backgroundColor:colorgrey , width:200 , height: 300 , display:"flex" , flexDirection:"column" , marginTop:2  }}>
      <CardContent>
        <Typography sx={{display:"flex" , justifyContent:"center" , marginTop:2}} variant="h5" component="div">
        {item.name}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex" , justifyContent:"center" , marginTop:10}}>
      <Link   to={`./editauthor/${item._id}`}><Button variant="contained">Edit</Button></Link>
      <Link   to={`./createbook/${item._id}`}><Button variant="contained">Create book</Button></Link>
      </CardActions>
    </Card>
    
      </>
      )
    })}

    
</Box>

   


      </> 
      )
    }

export default GetAllBooks