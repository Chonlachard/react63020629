import * as react from 'react'

function getTitle (title) {
  return title ;
}

function App() {
  return (
    <div>
     <div>
      <h1>Hello {getTitle('React')}</h1>

      <label htmlFor="search">search:</label>
      <input type="text" id="search" />
     </div>
    </div>
  )
}

export default App
