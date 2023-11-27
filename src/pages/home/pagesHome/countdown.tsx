import { differenceInSeconds } from "date-fns"
import { useContext, useEffect } from "react"
import { CyclesContext } from "../../../context/CyclesContext"

export default function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interaval: number

    if (activeCycle) {
      interaval = setInterval(() => {
        const secondDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        )

        if (secondDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setSecondsPassed(totalSeconds)
          clearInterval(interaval)
        } else {
          setSecondsPassed(secondDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interaval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <>
      <div className="text-white text-9xl flex items-center justify-center my-16">
        <span className="bg-gray-900 p-1 mr-3">{minutes[0]}</span>
        <span className="bg-gray-900 p-1">{minutes[1]}</span>

        <p className="text-green-600 mx-1">:</p>

        <span className="bg-gray-900 p-1 mr-3">{seconds[0]}</span>
        <span className="bg-gray-900 p-1">{seconds[1]}</span>
      </div>
    </>
  )
}
