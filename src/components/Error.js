import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError(); //More info about the error
    console.log(err);
  return (
    <div>
      <h1>OOPS !!!! Something went wrong my friend</h1>
    </div>
  )
}

export default Error
