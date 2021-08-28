import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Note from './Note';
import { useState } from 'react';


function App() {

  let [objTitle, setObjTitle] = useState([]);
  let [objContent, setObjContent] = useState([]);

  const addNote = (title,content) => {

    setObjTitle((oldVal) => {
      return [...oldVal, title]
    })

    setObjContent((oldVal)=>{
      return [...oldVal,content]
    })
  }

  const deleteNote=(id)=>{
    setObjTitle((oldVal)=>{
        return (oldVal.filter((val,ind)=>{
          return (ind!==id)
        }))
    })
    
    setObjContent((oldVal)=>{
      return (oldVal.filter((val,ind)=>{
          return (ind!==id)
      }))
    })
    console.log(objTitle);

    


    console.log("app componenet to delete has been triggered")

  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {objTitle.map((val, index) => {
        console.log(val);
        console.log(objContent[index]);
        return <Note title={val}
         content={objContent[index]}
          id={index}
          delete={deleteNote} />
      })
      }
      

      <Footer  />
    </>
  );
}

export default App;
