import React from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import CatFacts from './component/CatFacts'

const App = () => {
  return (
    <div className="container">
      <h1>Catfact</h1>
      <CatFacts />
    </div>
  )
}

export default App
