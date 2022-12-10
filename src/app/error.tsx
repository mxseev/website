"use client"

import {FC, useEffect} from "react"

type Props = {
  error: Error
}

const ErrorPage: FC<Props> = ({error}) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  )
}

export default ErrorPage
