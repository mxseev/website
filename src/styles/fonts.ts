import localFont from "next/font/local"
import cn from "classnames"

const ptMono = localFont({
  src: [{path: "../../public/fonts/PTMono.ttf"}]
})

const roboto = localFont({
  src: [
    {path: "../../public/fonts/Roboto-Regular.ttf", weight: "400", style: "normal"},
    {path: "../../public/fonts/Roboto-Italic.ttf", weight: "400", style: "italic"},
    {path: "../../public/fonts/Roboto-Medium.ttf", weight: "500", style: "normal"},
    {path: "../../public/fonts/Roboto-MediumItalic.ttf", weight: "500", style: "italic"},
    {path: "../../public/fonts/Roboto-Bold.ttf", weight: "700", style: "normal"},
    {path: "../../public/fonts/Roboto-BoldItalic.ttf", weight: "700", style: "italic"}
  ]
})

const classNames = cn(ptMono.className, roboto.className)

export {ptMono, roboto}
export default classNames
