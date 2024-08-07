import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || 'your-mongodb-connection-string';

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface CachedMongoose {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    // eslint-disable-next-line no-var
    var mongoose: CachedMongoose;
}

let cached: CachedMongoose = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Mongoose> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
            return mongooseInstance;
        });
    }

    cached.conn = await cached.promise;
    console.log('Connected to MongoDB');
    return cached.conn;
}

export default dbConnect;
