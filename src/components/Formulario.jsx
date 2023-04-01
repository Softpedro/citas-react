import { useState, useEffect } from 'react';

const Formulario = ({ pacientes, setPacientes }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return;
        }
        setError(false)
        const objectoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }
        setPacientes([...pacientes, objectoPaciente])

        // Reiniciar el form
        setNombre('');
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

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
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && (
                    <div className="text-center bg-red-600 text-white p-3 uppercase font-bold mb-3 rounded-md">
                        <p>
                            todos los campos son obligatorios
                        </p>
                    </div>
                ) }
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
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
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
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
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
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
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
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
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
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
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
