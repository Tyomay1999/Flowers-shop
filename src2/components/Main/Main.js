import React from 'react'

const Main = () => {
    let letStyle = [
        {
            border:`3px solid var(--f-clr)`
        },
        {
            border:`3px solid var(--be-clr)`
        }
    ]
    return (
        <main>
            <ul className="categories g">
                <li><div className="crcl" style={letStyle[0]}></div></li>
                <li><div className="crcl" style={letStyle[1]}></div></li>
                <li><div className="crcl" style={letStyle[1]}></div></li>
                <li><div className="crcl" style={letStyle[0]}></div></li>
                <li><div className="crcl" style={letStyle[1]}></div></li>
                <li><div className="crcl"></div></li>
            </ul>
        </main>
    )
}

export default Main
