import { useState } from "react"
import Form from "./Components/Form"
import Headers from "./Components/Headers"
import LisTarea from "./Components/LisTarea"

function App() {

  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState({})

  return (
    <>
      <div className="container mx-auto mt-20">
      <Headers />
        <div className="mt-12 md:flex">
        <Form
        tarea={tarea}
         tareas={tareas}
        setTareas={setTareas}
        />
        <LisTarea 
        tareas={tareas}
        setTarea={setTarea}
        />
        </div>
      </div>
    </>
  )
}
export default App