import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  const [hiddenTitle, setHiddenTitle] = useState(false);
    const [inputText, setInputText] = useState({
        title: "", 
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setInputText((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event){
        props.onAdd(inputText);
        setInputText({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleHidden(){
      setHiddenTitle(true);
    }

  return (
    <div>
      <form className="create-note">
      <input 
        name="title" 
        placeholder="Title" 
        autoComplete="off"
        value={inputText.title}
        onChange={handleChange} 
        style={{display: hiddenTitle ? null : "none"}}
        />
        <textarea 
        name="content" 
        placeholder="Take a note..." 
        rows={hiddenTitle ? "3" : "1"} 
        autoComplete="off"
        value={inputText.content}
        onChange={handleChange}
        onClick={handleHidden}
        />
        <Zoom in={hiddenTitle}
          style={{ transformOrigin: '10 0 0' }}
          {...(hiddenTitle ? { timeout: 1000 } : {})}>
        <Fab onClick={submitNote}> <AddIcon /> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
