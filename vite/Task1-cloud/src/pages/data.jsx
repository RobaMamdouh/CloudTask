import React, {useState, useEffect} from 'react';
import { getGroups , storeGroup } from '../apiService';
import { Link } from 'react-router-dom';
import '/src/Styling/data.css';


function Data() {
    const [groups, setGroups] = useState([]);
  
    function handleGetGroups() {
            getGroups().then((groups) => {
            console.log(groups);
            setGroups(groups);
        });
    }
    useEffect(() => {
        handleGetGroups();
    }, []);

    return(
        <>
        <div>
        <Link to="/"><button className = "back-button">Back</button></Link>
        </div>
        <center>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Group Name</th>
                        <th>Group Type</th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map((group) => (
                        <tr>
                            <td>{group.groupName}</td>
                            <td>{group.groupType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </center>
        </>
        
    )
}

export default Data;