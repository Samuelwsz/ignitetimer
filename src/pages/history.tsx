import { useContext } from "react"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { CyclesContext } from "../context/CyclesContext"
import { XCircleIcon } from "@heroicons/react/24/outline"

export default function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <>
      <main className="bg-gray-700 p-4 rounded-lg text-center relative shadow-md sm:w-4/5 md:w-11/12 lg:w-11/12 xl:w-11/12 m-auto mt-12">
        <h1 className="text-white text-3xl text-left font-semibold mb-4">
          Meu Histórico
        </h1>

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
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td className="py-2 px-4">{cycle.task}</td>
                    <td className="py-2 px-4">{cycle.minutesAmount} minutos</td>
                    <td className="py-2 px-4">
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    {cycle.finishedDate && (
                      <td className="py-2 px-4 flex items-center gap-2 justify-center">
                        <XCircleIcon className="w-3 h-3 bg-green-500 text-green-500 rounded-[50%]" />
                        Concluído
                      </td>
                    )}
                    {cycle.interruptedDate && (
                      <td className="py-2 px-4 flex items-center gap-2 justify-center">
                        <XCircleIcon className="w-3 h-3 bg-red-500 text-red-500 rounded-[50%]" />
                        Interrompido
                      </td>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <td className="py-2 px-4 flex items-center gap-2 justify-center">
                        <XCircleIcon className="w-3 h-3 bg-yellow-500 text-yellow-500 rounded-[50%]" />
                        Em andamento
                      </td>
                    )}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
