
const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
            Seguimiento de pacientes
        </h2>
        <p className="mt-5 text-center text-lg mb-5">
            Aniade pacientes {' '}
            <span className="font-bold text-indigo-600">
                Administralos
            </span>
        </p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <div className="mb-5">
                <label
                    className="block text-gray-700 uppercase font-bold"
                    htmlFor="mascota"
                >Nombre Mascota</label>
                <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label
                    className="block text-gray-700 uppercase font-bold"
                    htmlFor="propietario"
                >Nombre Propietario</label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre de la propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label
                    className="block text-gray-700 uppercase font-bold"
                    htmlFor="email"
                >Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email contacto propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label
                    className="block text-gray-700 uppercase font-bold"
                    htmlFor="alta"
                >Alta</label>
                <input
                    id="alta"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label
                    className="block text-gray-700 uppercase font-bold"
                    htmlFor="sintomas"
                >Sintomas</label>
                <textarea
                    id="sintomas"
                    className="border-w w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los sintomas"
                />
            </div>
            <input
                type="submit"
                className="transition-all w-full bg-indigo-600 font-bold p-3 cursor-pointer uppercase text-white hover:bg-indigo-700"
            />

        </form>
    </div>
  )
}

export default Formulario;
