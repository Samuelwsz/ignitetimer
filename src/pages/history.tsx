import { useContext } from "react"
import circle from "../assets/Ellipse.png"
import { CyclesContext } from "../context/CyclesContext"

export default function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <>
      <main className="bg-gray-700 p-4 rounded-lg text-center relative shadow-md sm:w-4/5 md:w-11/12 lg:w-11/12 xl:w-11/12 m-auto mt-12">
        <h1 className="text-white text-3xl text-left font-semibold mb-4">
          Meu Histórico
        </h1>

        <pre>{JSON.stringify(cycles, null, 2)}</pre>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-800">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4">Tarefa</th>
                <th className="py-2 px-4">Duração</th>
                <th className="py-2 px-4">Início</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              <tr>
                <td className="py-2 px-4">Tarefa 11</td>
                <td className="py-2 px-4">20 minutos</td>
                <td className="py-2 px-4">Há 2 meses</td>
                <td className="py-2 px-4 flex items-center gap-2 justify-center">
                  <img src={circle} /> Concluído
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">Tarefa 2</td>
                <td className="py-2 px-4">20 minutos</td>
                <td className="py-2 px-4">Há 2 meses</td>
                <td className="py-2 px-4">Em andamento</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Tarefa 3</td>
                <td className="py-2 px-4">20 minutos</td>
                <td className="py-2 px-4">Há 2 meses</td>
                <td className="py-2 px-4">Concluído</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
