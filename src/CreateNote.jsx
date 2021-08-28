import React, { useState } from 'react'
import Note from './Note'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'
import CollectionsIcon from '@material-ui/icons/Collections';
import RefreshIcon from '@material-ui/icons/Refresh';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

<link href="F:\Web Notes and Projects\Visual studio codes\bootstrap css\fontawesome.css" rel="stylesheet" />


const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    let [title, setTitle] = useState();
    let [content, setContent] = useState();

    let [arrTitle, setArrTitle] = useState([]);
    let [arrContent, setArrContent] = useState([]);

    const titleFun = ("click", (event) => {
        setTitle(event.target.value);
    })

    const contentFun = (event) => {
        setContent(event.target.value);
    }
    const btnClicked = () => {
        props.passNote(title, content);
        setTitle("");
        setContent("");
    }

    const expandIt = () => {
        setExpand(true);
    }

    return (
        <>
            <div className=" adiv  col-lg-6 col-md-4 col-sm-3 form-floating ">
                <div className="bdiv   ">
                    {(expand) ?
                        <input placeholder="Title"  onChange={titleFun} value={title} className="cdiv " />
                        : null}
                </div>

                <div>
                    <textarea placeholder="Write a note.." value={content} onChange={contentFun} onClick={expandIt} row="2" cols="100" className=" form-control">
                    </textarea>
                    {/* <RefreshIcon className=" text-white ddiv" /> */}

                </div>
                <div>
                    {(expand) ?
                        <Button onClick={btnClicked} className=" fdiv shadow " style={{ borderRadius: '50px', outline: "none" }}  ><AddIcon className="ediv " style={{ fontSize: '60px' }} /></Button>
                        : null}
                </div>


            </div>
        </>
    );
}

export default CreateNote;