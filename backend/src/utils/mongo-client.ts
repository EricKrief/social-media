import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv';

dotenv.config();

let connection: MongoClient;

export async function getDbConnection(): Promise<MongoClient> {
    if (!connection) {
        const client = new MongoClient(process.env.CONNECTION_STRING);
        connection = await client.connect();
        console.log('Connected to DB!');
        return connection;
    }
    return Promise.resolve(connection);
}