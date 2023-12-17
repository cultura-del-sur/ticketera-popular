import { Titillium_Web, Unbounded } from "next/font/google"

const titilliumWeb = Titillium_Web({ subsets: ['latin'], weight: ['400', '700'] })
const unbounded = Unbounded({ subsets: ['latin'], weight: ['200', '700'] })

export {
  titilliumWeb,
  unbounded
}
