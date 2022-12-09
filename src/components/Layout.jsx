
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import {Link, NavLink, Outlet} from "react-router-dom"



// export default function ButtonAppBar() {
  
//   return (
//     <>
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//         {/* <Box sx={{display:"flex" , justifyContent:"space-evenly"}}> */}
//           <Typography variant="h6" component="div" sx={{ flexGrow: 5 , marginLeft:60 }}>
//             Author
//           </Typography>
       
//           <Typography variant='h6'  sx={{ flexGrow: 1 , marginLeft:-200 }}>
//             All books
//           </Typography>
//         {/* </Box> */}
        
//         </Toolbar>
//       </AppBar>
//     </Box>

// <Outlet />
// </>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        <Box sx={{display:"flex" , justifyContent:"center"}}>
          <Link to={`./getallbooks`}>
          <Typography variant="h6" component="div" sx={{marginLeft:90}} >
            All Books
          </Typography>
          </Link>
          <Link to={`/`}>
          <Typography  variant="h6" component="div" sx={{marginLeft:10}} >
            All Author
          </Typography>
          </Link>
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet />
    </>
  );
}