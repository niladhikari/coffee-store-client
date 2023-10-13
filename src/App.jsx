

import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'

function App() {

  const coffees = useLoaderData()


  return (
    <>
      
      <h1 className='text-green-500 text-5xl font-bold'>Hot Hot Cold Coffee : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-6 mt-20'>
        {
          coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    
    </>
  )
}

export default App
