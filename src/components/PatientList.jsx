import Patient from "./Patient";

const PatientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-3xl text-center">
            Listado de pacientes
        </h2>
        <p className="text-center mt-5 mb-5 text-xl">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>

        <Patient />
        <Patient />
        <Patient />
        <Patient />
    </div>
  )
}

export default PatientList;
