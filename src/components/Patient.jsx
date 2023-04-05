
const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounder-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">Pedro</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha alta: {''}
            <span className="font-normal normal-case">10/10/2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nemo perspiciatis, quasi error quos voluptates. Deleniti facilis dolor consectetur perspiciatis mollitia itaque deserunt et labore veniam eveniet, fugit nobis quas?</span>
        </p>
    </div>
  )
}

export default Patient;
