import React, { useEffect, useState } from "react";
import AlertError from "./AlertError";

const Form = ({tareas, setTareas, tarea, setTarea}) => {
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const [error, setError] = useState(false)

  const generarId = ()=>{
    const id = Math.random().toString(20).substr(2)
    return id
  }

  useEffect(()=>{
    if(Object.keys(tarea).length > 0){
     setTitulo(tarea.titulo)
     setFecha(tarea.fecha)
     setDescripcion(tarea.descripcion)
    }
  }, [tarea])

  
  const hanleSubmit = (e)=>{
    e.preventDefault()
    if([titulo, fecha, descripcion].includes('')){
      setError(true)
      return;
    }
    setError(false);

    const objetoTareas = {
      id: generarId(),
      titulo: titulo,
      fecha: fecha,
      descripcion: descripcion
    }
    
    if(tarea.id){
      
      objetoTareas.id = tarea.id;
      const tareaNueva = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? objetoTareas : tareaState
      );
      setTareas(tareaNueva);
      setTarea({});
    }else{
      objetoTareas.id = generarId();
      setTareas([...tareas, objetoTareas])
    }

  
    setTitulo('')
    setFecha('')
    setDescripcion('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">
        Creación de tareas
      </h2>
      <div>
        <form onSubmit={hanleSubmit} className="bg-white shadow-md rounded-lg py-5 px-10">
          {error && <AlertError><p>Todos los campos son obligatorios</p></AlertError>}
          <div className="mb-5">
            <label
              htmlFor="titulo"
              className="block text-gray-700 uppercase font-bold"
            >
              Titulo
            </label>
            <input
              id="titulo"
              type="text"
              placeholder="Titulo de la tarea"
              className="border-2 w-full  p-2 mt-2 rounded-md placeholder-gray-600"
              value={titulo}
              onChange={(e)=> setTitulo(e.target.value)}
              
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="fecha"
              className="block text-gray-700 uppercase font-bold"
            >
              Fecha
            </label>
            <input
              id="fecha"
              type="date"
              className="border-2 w-full  p-2 mt-2 rounded-md placeholder-gray-600"
              value={fecha}
              onChange={(e)=> setFecha(e.target.value)}
              
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="descripcion"
              className="block text-gray-700 uppercase font-bold"
            >
              Descripcion
            </label>
            <textarea
              id="descripcion"
              type="text"
              placeholder="Descripcion de la tarea"
              className="border-2 w-full  p-2 mt-2 rounded-md placeholder-gray-600"
              value={descripcion}
              onChange={(e)=> setDescripcion(e.target.value)}
              
            />
          </div>
{tarea.id ? (
  
  
  <input
  type="submit"
  className="bg-blue-700 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-800 transition-colors cursor-pointer"
  value="Actualizar tarea"
/>
) : (
  
  <input
  type="submit"
  className="bg-orange-700 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-800 transition-colors cursor-pointer"
  value="Crear tarea"
/>
)}
        </form>
      </div>
    </div>
  );
};

export default Form