import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'; 
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const Note=(props)=>{


    const btnClicked=()=>{
        props.delete(props.id);


    }

    return(
        <>
        <div className="shadow aadiv">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <Button onClick={btnClicked} className="shadow" style={{borderRadius:'80%',outline:'none'}}><DeleteIcon style={{borderColor:'orange'}}/></Button>
        </div>
        </>
    );
}

export default Note;