import {NextApiHandler} from "next"

const livez: NextApiHandler = (_request, response) => {
  return response.json({status: "ok", hostname: process.env.HOSTNAME})
}

export default livez
