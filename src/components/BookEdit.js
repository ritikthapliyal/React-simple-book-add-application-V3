import React, { useState } from 'react'

function BookEdit({id,handleEdit,onEdit}) {

    const [title,setTitle] = useState('')

    const handleClick = ()=>{
        onEdit(id,title)
        handleEdit(false)
    }

    return (
        <div className='bookedit'>
            <label>New Title</label>
            <input value={title}
            onChange={(e)=>setTitle(e.target.value)} ></input>
            <div className='buttons' style={{position:"unset"}}>
                <button onClick={handleClick}>Save</button>
                <button onClick={()=>handleEdit(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default BookEdit