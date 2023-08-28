import Arrow from '../../assets/images/arrow_open.png'
import React, { useState } from "react";
import './collapse.css'

function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapseTitle' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img
                        className={`arrow ${toggle ? 'arrowUp' : 'arrowDown'}`}
                        src={Arrow}
                        alt="show content"
                    />
                </h3>
                <div className={toggle ? 'collapseContent' : 'collapseContentHidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div>
            </div>
        </>
    )
}

export default Collapse;