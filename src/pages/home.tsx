import { useForm } from "react-hook-form"
import arrow from "../assets/Arrow.svg"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useState } from "react"

/*forms controlled = criar o state e usar nos inputs  | uncontrolled */

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O intervalo precisa ser de no mínimo 5 minutos")
    .max(60, "O intervalo precisa ser de no máximo 60 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAMount: number
}

export default function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAMount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAMount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

  const task = watch("task")
  const isSubmitDisabled = !task

  return (
    <>
      <div className="flex justify-center pt-8">
        <div className="bg-gray-800 p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg text-center relative shadow-md sm:w-4/5 md:w-11/12 lg:w-11/12 xl:w-4/5">
          <form onSubmit={handleSubmit(handleCreateNewCycle)}>
            <div className="text-white flex flex-col items-center justify-center md:flex-row lg:flex-row xl:flex-row ">
              {" "}
              <label>
                {" "}
                Vou trabalhar em{" "}
                <input
                  id="task"
                  type="text"
                  list="task-sugestion"
                  placeholder="De um nome ao seu projeto"
                  {...register("task")}
                  className="bg-gray-700 text-gray-300 outline-none rounded-sm mx-1 my-2 w-52 sm:w-52 md:w-52 lg:w-56 border-b-2 border-green-600"
                />
                <datalist id="task-sugestion">
                  <option value="Projeto 1" />
                  <option value="Projeto 2" />
                  <option value="Projeto 3" />
                </datalist>
              </label>
              <label>
                durante{" "}
                <input
                  type="number"
                  id="number"
                  {...register("minutesAmount", { valueAsNumber: true })}
                  /*step={5} min e max*/
                  className="w-12 bg-gray-700 text-gray-300 outline-none rounded-sm mx-1 my-2 border-b-2 border-green-600 appearance-none"
                />
                <span>minutos.</span>
              </label>
            </div>

            <div className="text-white text-9xl flex items-center justify-center my-16">
              <span className="bg-gray-900 p-1 mr-3">{minutes[0]}</span>
              <span className="bg-gray-900 p-1">{minutes[1]}</span>

              <p className="text-green-600 mx-1">:</p>

              <span className="bg-gray-900 p-1 mr-3">{seconds[0]}</span>
              <span className="bg-gray-900 p-1">{seconds[1]}</span>
            </div>

            <p className="text-white bg-black w-[60%] py-1 m-auto mb-5">
              Preencha o nome e a duração antes de começar
            </p>
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className="text-white bg-green-600 p-2 w-4/5 flex items-center justify-center m-auto gap-2 rounded-sm hover:bg-green-700 disabled:bg-green-700 disabled:opacity-50"
            >
              <img src={arrow} className="w-5 h-5" /> Começar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
