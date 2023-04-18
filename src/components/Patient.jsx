
const Patient = ({patient}) => {
    const { name, date, owner, symptoms } = patient;
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
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold upper
                 rounded-lg">
                    Editar
                </button>
                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold upper
                 rounded-lg">
                    Eliminar
                </button>
            </div>
        </div>
    )
}
export default Patient;
