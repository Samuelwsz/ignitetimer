export default function Countdown() {
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
