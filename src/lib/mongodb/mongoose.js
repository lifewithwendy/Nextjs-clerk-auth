import mongoose from 'mongoose'

let initialized = false

export const connect = async () => {
    if (initialized) {
        console.log('MongoDB already initialized')
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
            dbName: 'next-auth-clerk',
            // bufferCommands: false,
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        })
        initialized = true
        console.log('MongoDB connected')
    } catch (error) {
        console.error('MongoDB connection error:', error)
    }
}

