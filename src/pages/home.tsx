import arrow from "../assets/Arrow.svg"

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-8">
        <div className="bg-gray-800 p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg text-center relative shadow-md sm:w-4/5 md:w-11/12 lg:w-11/12 xl:w-4/5">
          {/* 'w-3/4', 'w-2/3', 'w-1/2', 'w-1/3' ajustam a largura em dispositivos menores */}
          <form>
            <div className="text-white flex flex-col items-center justify-center md:flex-row lg:flex-row xl:flex-row ">
              {" "}
              <label className="">
                {" "}
                Vou trabalhar em{" "}
                <input
                  id="task"
                  type="text"
                  list="task-sugestion"
                  placeholder="De um nome ao seu projeto"
                  className="bg-gray-700 text-gray-300 outline-none rounded-sm mx-1 my-2 w-52 sm:w-52 md:w-52 lg:w-56 border-b-2 border-green-600"
                />
                <datalist id="task-sugestion">
                  <option value="Projeto 1" />
                  <option value="Projeto 2" />
                  <option value="Projeto 3" />
                </datalist>
              </label>
              <label htmlFor="">
                durante{" "}
                <input
                  type="number"
                  id="number"
                  /*step={5} min e max*/
                  className="w-12 bg-gray-700 text-gray-300 outline-none rounded-sm mx-1 my-2 border-b-2 border-green-600 appearance-none"
                />
                <span>minutos.</span>
              </label>
            </div>

            <div className="text-white text-9xl flex items-center justify-center my-16">
              <span className="bg-gray-900 p-1 mr-3">0</span>
              <span className="bg-gray-900 p-1">0</span>

              <p className="text-green-600 mx-1">:</p>

              <span className="bg-gray-900 p-1 mr-3">0</span>
              <span className="bg-gray-900 p-1">0</span>
            </div>

            <p className="text-white bg-black w-[60%] py-1 m-auto mb-5">
              Preencha o nome e a duração antes de começar
            </p>
            <button
              type="submit"
              className="text-white bg-green-700 p-2 w-4/5 flex items-center justify-center m-auto gap-2 rounded-sm hover:bg-green-800"
            >
              <img src={arrow} className="w-5 h-5" /> Começar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
