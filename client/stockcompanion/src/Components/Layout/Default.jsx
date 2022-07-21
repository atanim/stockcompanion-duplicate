import React from 'react'
import Sidebar from '../Header/Sidebar'
import Nav from '../Nav'

const Default = (props) => {
  return (
    <div>
        <Nav />
        <div>
            <div> <Sidebar /> </div>
            <div className='container main-content'>
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default Default