import React from 'react'
import { useRouteError } from 'react-router-dom'


const NotFound = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
        <h1>Oops...</h1>
        <h2>Something went wrong</h2>
        <h3>{error.data}</h3>
        <h3>{error.status}</h3>
        <h3>{error.statusText}</h3>
    </div>
  )
}

export default NotFound