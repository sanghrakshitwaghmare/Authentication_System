import dotenv from "dotenv";

dotenv.config();

if(!process.env.JWT_SECRET){
    throw new Error("JWT_SECRET is not defined in env vaiable")
}

if(!process.env.MONGO_URI){
    throw  new Error("MONGO_URI is not defined in env variables")
}

if(!process.env.GOOGLE_CLIENT_ID){
    throw new Error("Google cilent id  is not found in env")
}


if(!process.env.GOOGLE_CLIENT_SECRET){
    throw new Error("Google cilent SECRET  is not found in env")
}


if(!process.env.GOOGLE_REFRESH_TOKEN){
    throw new Error("Google REFRESH TOKEN  is not found in env")
}


if(!process.env.GOOGLE_USER){
    throw new Error("Google USER  is not found in env")
}
const config={
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN:process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_USER:process.env.GOOGLE_USER
}

export default config;