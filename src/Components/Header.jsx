const Header = ({valor, valorw}) =>{

    console.log("valor1", valor, "valor2", valorw)
    return(
        <h1 className="font-black text-5xl text-center mx-auto md:w-1/2">
            Aplicacion {''}<span className=" text-blue-700 ">TODO</span>
        </h1>
    )
}

export default Header