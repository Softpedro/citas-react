
const Patient = ({ patient, setPatient, deletePatient }) => {
    const { name, date, owner, symptoms, id } = patient;

    const handleDelete = () => {
        const answer = confirm('Deseas eliminar este paciente');
        if(answer) deletePatient(id);
    } 

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounder-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{name}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha alta: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={ () => setPatient(patient) }>
                    Editar
                </button>
                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={ handleDelete }>
                    Eliminar
                </button>
            </div>
        </div>
    )
}
export default Patient;
