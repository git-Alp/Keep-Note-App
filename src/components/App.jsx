import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [item, setItem] = useState([]);

    function addItem(newNote){
        setItem(prevItem => {
            return [...prevItem, newNote];
        });

      }
    
    function deleteItem(id){
        setItem(prevItem => {
            return prevItem.filter((note, index) => {
                return index !== id;
            });
        });
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {item.map((note, index) => 
      <Note 
      key={index}
      id={index}
      title={note.title}
      content={note.content}
      onDelete={deleteItem}
      />)}
      <Footer />
    </div>
  );
}

export default App;
