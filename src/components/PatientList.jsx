import { useEffect } from "react";
import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <div>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2> 
          <p className="text-center mt-5 mb-5 text-xl">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>
          { patients.map( patient => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </div>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes
          </h2> 
          <p className="text-center mt-5 mb-5 text-xl">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      ) }
    </div>
  )
}

export default PatientList;
