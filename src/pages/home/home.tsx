import { useForm } from "react-hook-form"
import arrow from "../../assets/Arrow.svg"
import pause from "../../assets/Pause.svg"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useEffect, useState } from "react"
import { differenceInSeconds } from "date-fns"
import NewCycleForm from "./pagesHome/newCycleForm"
import Countdown from "./pagesHome/countdown"

/*forms controlled = criar o state e usar nos inputs  | uncontrolled */

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O intervalo precisa ser de no mínimo 1 minutos")
    .max(60, "O intervalo precisa ser de no máximo 60 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAMount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
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
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAMount * 60 : 0

  useEffect(() => {
    let interaval: number

    if (activeCycle) {
      interaval = setInterval(() => {
        const secondDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        )

        if (secondDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            })
          )

          setAmountSecondsPassed(totalSeconds)
          clearInterval(interaval)
        } else {
          setAmountSecondsPassed(secondDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interaval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAMount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      })
    )
    setActiveCycleId(null)
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

  const task = watch("task")
  const isSubmitDisabled = !task

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <>
      <div className="flex justify-center pt-8">
        <div className="bg-gray-800 p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg text-center relative shadow-md sm:w-4/5 md:w-11/12 lg:w-11/12 xl:w-4/5">
          <form onSubmit={handleSubmit(handleCreateNewCycle)}>
            <NewCycleForm />
            <Countdown />

            <p className="text-white bg-black w-[60%] py-1 m-auto mb-5">
              Preencha o nome e a duração antes de começar
            </p>
            {activeCycle ? (
              <button
                type="button"
                onClick={handleInterruptCycle}
                className="text-white bg-red-600 p-2 w-4/5 flex items-center justify-center m-auto gap-2 rounded-sm hover:bg-red-700"
              >
                <img src={pause} className="w-5 h-5" /> Interromper
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className="text-white bg-green-600 p-2 w-4/5 flex items-center justify-center m-auto gap-2 rounded-sm hover:bg-green-700 disabled:bg-green-700 disabled:opacity-50"
              >
                <img src={arrow} className="w-5 h-5" /> Começar
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  )
}
