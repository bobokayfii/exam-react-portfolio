import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import NavBar from '../NavBar'

const LayoutP = () => {
  return (
    <Fragment>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default LayoutP