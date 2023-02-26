"use client"

import {FC, useEffect} from "react"
import * as Sentry from "@sentry/nextjs"

type Props = {
  error: Error
}

const ErrorPage: FC<Props> = ({error}) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)

    Sentry.captureException(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  )
}

export default ErrorPage
