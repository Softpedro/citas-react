import { useState, useEffect } from 'react';
import Error from './Error';
const Form = ({ patients, setPatients }) => {

    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [error, setError] = useState(false)

    const generateId = () => {
        const random = Math.random().toString(36).slice(4);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if([name, owner, email, date, symptoms].includes('')){
            setError(true)
            return;
        }
        setError(false)
        const objectPatient = {
            name,
            owner,
            email,
            date,
            symptoms,
            id: generateId()
        }
        setPatients([...patients, objectPatient])

        // Restart el form
        setName('');
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento de pacientes
            </h2>
            <p className="mt-5 text-center text-lg mb-5">
                Agregar pacientes {' '}
                <span className="font-bold text-indigo-600">
                    Administralos
                </span>
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && <Error><p>todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="pet"
                    >Nombre Mascota</label>
                    <input
                        id="pet"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="owner"
                    >Nombre Propietario</label>
                    <input
                        id="owner"
                        type="text"
                        placeholder="Nombre de la propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange={ (e) => setOwner(e.target.value) }
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
                        value={date}
                        onChange={ (e) => setDate(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="symptoms"
                    >Sintomas</label>
                    <textarea
                        id="symptoms"
                        className="border-w w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={symptoms}
                        onChange={ (e) => setSymptoms(e.target.value) }
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

export default Form;
