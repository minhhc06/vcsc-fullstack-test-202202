import React, {useState} from 'react';
import './App.css';
import MyDropdown from './Dropdown';
import { DropDowndirections } from './Dropdown/types';
import { CustomItemComponent } from './CustomItemComponent';
import './default.scss';


function App() {

  const [value, setInput] = useState<string>() 

  return (
    <div style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
    }} >
      
      <MyDropdown align={DropDowndirections.CENTER} trigger={<div className='title-dropdown'>
        <input value={value} aria-label="Text input with dropdown button" className="form-control"
        disabled></input>
        <button type="button" id="input-group-dropdown-2" aria-expanded="false" className="dropdown-toggle btn btn-outline-secondary">Dropdown</button>
      </div>} closeOnDropdownClicked = {true} closeOnClickOut ={true}>
       <CustomItemComponent callBack={(value)=> setInput(value)} />
      </MyDropdown>
    </div>
  );
}

export default App;
