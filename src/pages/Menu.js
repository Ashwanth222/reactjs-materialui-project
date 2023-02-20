/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { MenuItem } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Menu() {
  
  return (
    <div role="presentation" onClick={handleClick}>
     {/* <Link to='/about' style={{ textDecoration: 'none' }}>
   <MenuItem>Notifications</MenuItem>
</Link> */}
<Link to={`/`}>hello</Link>
    </div>
  );
}
