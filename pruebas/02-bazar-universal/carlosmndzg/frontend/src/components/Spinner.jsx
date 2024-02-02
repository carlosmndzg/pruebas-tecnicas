function Spinner() {
  return (
    <div className="absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 transform ">
      <div className="h-32 w-32 animate-spin rounded-full border-8  border-solid border-blue-400 border-t-transparent md:h-48 md:w-48"></div>
    </div>
  )
}

export default Spinner
