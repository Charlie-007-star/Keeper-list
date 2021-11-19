import React from 'react'

let date = new Date()
let year = date.getFullYear()

const Footer = () => {
    return (
       <footer>
            <p>Copyright ©{year}</p>
        </footer>
    )
}

export default Footer