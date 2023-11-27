import { useForm, FormProvider } from "react-hook-form"
import arrow from "../../assets/Arrow.svg"
import pause from "../../assets/Pause.svg"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useContext } from "react"
import NewCycleForm from "./pagesHome/newCycleForm"
import Countdown from "./pagesHome/countdown"
import { CyclesContext } from "../../context/CyclesContext"

/*forms controlled = criar o state e usar nos inputs  | uncontrolled */

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O intervalo precisa ser de no mínimo 1 minutos")
    .max(60, "O intervalo precisa ser de no máximo 60 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)

    reset()
  }

  const task = watch("task")
  const isSubmitDisabled = !task

  return (
    <>
      <div className="flex justify-center pt-8">
        <div className="bg-gray-800 p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg text-center relative shadow-md sm:w-4/5 md:w-11/12 lg:w-11/12 xl:w-4/5">
          <form onSubmit={handleSubmit(handleCreateNewCycle)}>
            <FormProvider {...newCycleForm}>
              <NewCycleForm />
            </FormProvider>

            <Countdown />

            <p className="text-white bg-black w-[60%] py-1 m-auto mb-5">
              Preencha o nome e a duração antes de começar
            </p>
            {activeCycle ? (
              <button
                type="button"
                onClick={interruptCurrentCycle}
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
