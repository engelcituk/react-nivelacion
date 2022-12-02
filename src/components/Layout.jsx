import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <header>
            <h2>React nivelation</h2>
        </header>
        <main>
            {children}
        </main>
        <footer>
            &copy; Copyright eCituk - {new Date().getFullYear()}
        </footer>
    </>
  )
}

export default Layout