import React, {useEffect, useRef, useState} from 'react'
import './App.css';
import axios from 'axios'

const Card = ({name}) => <div>{name}</div>

function App() {
  const [airports, setAirports] = useState([])
  const mounted = useRef(false)

  const getAirports = async () => {
    await axios.get('http://localhost:8080/airports')
    .then((res) => {
      const response = res.data
      console.log('the response', response)
      setAirports(response)
    })
  }

  useEffect(() => {
    mounted.current = true
    if(mounted.current) getAirports() 
    return () => mounted.current = false 
  },[])

  return (
    <div className="App">
      {airports.length && airports.map((a, i) => (
        <Card 
          key={i} 
          name={a.icao} 
        />
      ))};
    </div>
  )
}

export default App;
