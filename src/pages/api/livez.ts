import {NextApiHandler} from "next"

const livez: NextApiHandler = (_request, response) => {
  return response.json({status: "ok"})
}

export default livez
