import React from 'react'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

let year=new Date().getFullYear();
const Footer=()=>{
    return(
        <div className=" footer ">
        <h3  style={{position:'absolute',display:'inline',bottom:'0px',left:'700px',wordSpacing:'5px',color:'gray'}}>Copyright © {year}</h3>
        </div>
    );
}
export default Footer;