import Tareas from "./Tareas";
import React, { useEffect } from 'react'

const LisTarea = ({ tareas, setTarea }) => {
  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll ">
        {}
        {tareas && tareas.length ?
          (
            <>
              <h2 className="font-black text-3x1 text-center mb-10"> Mis tareas pendientes</h2>
              {}
              {tareas.map((tarea,) => {
                return (
                  <Tareas
                    key={tarea.id}
                    tarea={tarea}
                    setTarea={setTarea}
                  />

                )
              })
              }
            </>
          ) : <h2 className="font-black text-3x1 text-center mb-10"> No  tengo tareas</h2>}




      </div>
    </>
  );
};

export default LisTarea