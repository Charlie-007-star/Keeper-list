import React from 'react'

let date = new Date()
let year = date.getFullYear()

const Footer = () => {
    return (
        <div className="footer">
            <h4>@Copyright {year}</h4>
        </div>
    )
}

export default Footer