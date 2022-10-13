import { ObjectId, Collection } from 'mongodb';
import { User } from '../models/user';
import { getDbConnection } from '../utils/mongo-client';

let collection: Collection<User>;

getDbConnection().then(connection =>
    collection = connection.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME));

export async function getAllUsers() {
    return await collection.find({}).toArray();
}

export async function getUserById(id: string) {
    return await collection.findOne({ _id: new ObjectId(id) });
}

export async function createUser(user: User) {
    return await collection.insertOne(user);
}

export async function deleteUser(id: string) {
    return await collection.deleteOne({ _id: new ObjectId(id) });
}

export async function updateUser(user: Partial<User>) {
    return await collection.updateOne({ _id: new ObjectId(user.id) }, { $set: user });
}