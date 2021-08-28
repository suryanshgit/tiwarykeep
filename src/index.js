import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import RefreshIcon from '@material-ui/icons/Refresh';
import AddIcon from '@material-ui/icons/Add';

ReactDOM.render(
  <>

    {/* <Navigation />

    <div className=" adiv">
      
      <div className="bdiv shadow">
     
      <input placeholder="Title" className="cdiv" contentEditable="true"/>
      <textarea className="" placeholder="Write a note.." contentEditable="true" ></textarea><RefreshIcon className=" text-white ddiv" />
      <AddIcon className="ediv shadow" style={{fontSize:'60px'}}/>
      </div>
      
    </div> */}
    <App/>

  </>
  , document.getElementById('root')
);

// className="bg-success text-white"