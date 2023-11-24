import arrow from "../assets/Arrow.svg"

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-8">
        <div className="bg-gray-800 p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg text-center relative shadow-md sm:w-3/4 md:w-4/5 lg:w-4/5 xl:w-4/5">
          {/* 'w-3/4', 'w-2/3', 'w-1/2', 'w-1/3' ajustam a largura em dispositivos menores */}
          <div className="text-white flex flex-col items-center justify-center md:flex-row lg:flex-row xl:flex-row">
            Vou trabalhar em
            <input
              type="text"
              className="bg-gray-700 text-gray-300 outline-none rounded-sm mx-1 my-2 sm:w-32 md:w-40 lg:w-48"
            />
            durante
            <input
              type="number"
              className="w-12 bg-gray-700 text-gray-300 outline-none rounded-sm mx-1 my-2"
            />
            minutos
          </div>

          <p className="text-white bg-black w-4/5 p-2 m-auto my-2">
            Preencha o nome e a duração antes de começar
          </p>
          <button className="text-white bg-green-700 p-2 w-4/5 flex items-center justify-center m-auto gap-2">
            <img src={arrow} className="w-5 h-5" /> Começar
          </button>
        </div>
      </div>
    </>
  )
}
