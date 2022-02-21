import React from 'react'

function heroes() {
return (
    <div>
        <h2 className="user">User choice is:</h2>
        <h2 className="user">Computer choice is:</h2>
        <button href="#" className="btn" onClick={()=> {console.log('clicked')}}>Rock</button>
        <button href="#" className="btn" onClick={()=> {console.log('clicked')}}>Paper</button>
        <button href="#" className="btn" onClick={()=> {console.log('clicked')}}>Scissorc</button>
    </div>
)
}

export default heroes