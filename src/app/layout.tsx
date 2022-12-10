import {FC, PropsWithChildren} from "react"

import fontClassnames from "styles/fonts"
import "styles/globals.css"

const RootLayout: FC<PropsWithChildren> = ({children}) => (
  <html lang="en" className={fontClassnames}>
    <head />
    <body>{children}</body>
  </html>
)

export default RootLayout
