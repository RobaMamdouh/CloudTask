import React, {useState} from 'react';
import { storeGroup } from '../apiService';
import { Link } from 'react-router-dom';
import '/src/Styling/form.css';


function Form() {
    const [groupName, setGroupName] = useState('');
    const [groupType, setGroupType] = useState('');
    
    function handleAddGroup() {
        event.preventDefault();
        storeGroup(groupName, groupType);
        setGroupName('');
        setGroupType('');
    }


    function handleChange() {
        window.location.href = '/data'; 
    }

  
    return (
      <center>
      <div>
        <form>
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Group Type"
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleAddGroup}>Add Group</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/data"><button>Retrieve Groups</button></Link>
        </form>
      </div>
      </center>
    );
}

export default Form;