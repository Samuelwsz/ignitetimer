export default function NewCycleForm() {
  return (
    <>
      {" "}
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
            disabled={!!activeCycle}
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
            disabled={!!activeCycle}
            /*step={5} min e max*/
            className="w-12 bg-gray-700 text-gray-300 outline-none rounded-sm mx-1 my-2 border-b-2 border-green-600 appearance-none"
          />
          <span>minutos.</span>
        </label>
      </div>
    </>
  )
}
