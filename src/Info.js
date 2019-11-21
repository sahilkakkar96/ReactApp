import React from 'react';
import './App.css';

const lStyle = {
    fontSize: '18px',
    textAlign: 'left',
    float: 'left'
  };
  
function Info(props) {
  return (
    <div className="Info">
        <div>
            <p>
                Selected Song by: <br/><br/>
                <ul style={lStyle}>
                    <li onClick={props.changedValue1}>All of Me</li>
                    <li onClick={props.changedValue2}>Side to Side</li>
                    <li onClick={props.changedValue3}>Grenade</li>
                </ul>

                {props.name}
            </p>
           
        </div>
        
        
    </div>
  );
}

export default Info;