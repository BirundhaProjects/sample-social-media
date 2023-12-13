import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import Feed from './Feed'

function Home() {
  const {searchResults} = useContext(DataContext)
  return (
    <main className='Home'>
        {searchResults.length ? (
          <Feed/>
        ) : (
          <p style={{marginTop: "2rem"}}>
            No posts to display.
          </p>
        )}
    </main>
  )
}

export default Home