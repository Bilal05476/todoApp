import React, {useState} from 'react';
import ToDoList from './List';
const App = () =>{
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfitems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(' ');
  };

  const deleteItems = (id) => {
      setItems((oldItems) => {
        return oldItems.filter((arrElement, index) => {
            return index !== id;
        });
      });
  };

  return(
    <>
      <div className='main-div'>
        <div className='center_div'>
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type='text' placeholder='Add an Items' value={inputList} onChange={itemEvent} />
          <button onClick={listOfitems} > + </button>
          <ol>
          {
            Items.map((itemValue, index) =>{
              return <ToDoList key={index} id={index} text={itemValue} onSelect = {deleteItems} />;
            })
          }
          </ol>
        </div>
      </div>

    </>
  );
};

export default App;