import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';


const useStyles = makeStyles((theme) => ({
    hero : {
        height: '300px',
        backgroundPosition:'center'
    }
}))

const Authlayout = ({title='Title', description="Description", className, children}) => {
    
    const classes = useStyles();

    return (
       <div >
       <Menu/>
        <div className = {className}>{children}</div>
        <div>
        <stickyFooter/>
        </div>
        </div>
    )
}

export default Authlayout;
