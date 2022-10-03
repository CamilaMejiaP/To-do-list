import { useEffect } from "react";

const Tarea = ({tarea, setTarea, eliminarTarea}) => {

    const {titulo,fecha, descripcion, id} =  tarea

    const handleEliminar = () =>{
        const respuesta =  confirm('¿Esta seguro que quiere eliminar esta tarea?')
       
        if (respuesta){
            eliminarTarea(id)
        }
    }
    return (
        <div className="bg-white shadow-md px-5 py-10 rounded-lg mb-5">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Titulo:{' '}
                <span className="font-normal normal-case"> {titulo}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha:{' '}
                <span className="font-normal normal-case"> {fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Descripcion:{" "}
                <span className="font-normal normal-case"> {descripcion}
                </span>
            </p>
            <div>
                <button className="bg-green-600 mt-4 py-2 px-10 mx-2 rounded-md text-white font-bold"
                 type="buttom"
                 onClick={() => setTarea(tarea)}
                 
                >
                    Actualizar
                </button>
                <button className="bg-red-600 mt-4 py-2 px-10 rounded-md text-white font-bold" 
                type="buttom"
                onClick={ handleEliminar }
                >
                Eliminar
                </button>
            </div>
        </div>
    );

};

export default Tarea;