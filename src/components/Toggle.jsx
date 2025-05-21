import React from 'react'
import '../css/public.css'

function Toggle({value,onChange}) {
    return (
        <div>
            <div className="check">
                <input checked={value} onChange={onChange} id="check" type="checkbox" />
                <label htmlFor="check"></label>
            </div>
        </div>
    )
}

export default Toggle
