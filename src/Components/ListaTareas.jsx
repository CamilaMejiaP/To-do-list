import { useEffect } from "react"
import Tarea from "./Tarea"

const ListaTareas = ({ tareas, setTarea, eliminarTarea }) => {

    // console.log("ey estas son tus tareas", tareas.length)

    // useEffect(() => {
    //   if (tareas.length > 0){
    //     console.log('inciando')
    //   }
    // }, [tareas])
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10  md:h-screen overflow-scroll">

            {tareas && tareas.length ? (
            <><h2 className="font-black text-3xl text-center m-5  md:mb-10 md:m-0">Mis tareas</h2> 

                {tareas.map((tarea) => {
                    return (
                        <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            setTarea = {setTarea}
                            eliminarTarea = {eliminarTarea}
                        />

                    )
                }
             
                )}
             </> 
             ) : <h2 className="font-black text-3xl text-center m-5  md:mb-10 md:m-0">No tengo tareas</h2> }


        </div>
    )
}

export default ListaTareas