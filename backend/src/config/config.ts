import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string
const JWT_SECRET = process.env.JWT_SECRET  as string
const API_PATH = process.env.API_PATH  as string
const PORT = process.env.PORT as string

const confgApp = {
    MONGO_URI,
    JWT_SECRET,
    API_PATH,
    PORT
}

export default confgApp
