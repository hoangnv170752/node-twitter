import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const uri = "mongodb+srv://hoangnv:1@backend.pbxpq.mongodb.net/Twitter?retryWrites=true&w=majority";

class DatabaseService {
    private client: MongoClient
    constructor() {
        this.client = new MongoClient(uri)
    }
    async connect() {
        try {
            await this.client.db('admin').command({ping: 1})
            console.log("Testing connection")
        } finally {
            await this.client.close();
        }
    }
}

const databaseService = new DatabaseService();
export default databaseService;