import { Client, Databases, Account, ID } from "appwrite";

const client = new Client();
const database = new Databases(client);
const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite/v1") // Replace with your Appwrite endpoint
  .setProject("675c1f34003a0c58f87a"); // Replace with your Appwrite project ID

export const AppwriteService = {
  async createTask(title: string, description: string, status: string) {
    const response = await database.createDocument(
      "675c27e700352f3e8665", // Database ID
      "675c28a1002cd8eb0a8a", // Collection ID
      ID.unique(), // Auto-generate unique ID
      { title, description, status }
    );
    return response;
  },

  async getTasks() {
    const response = await database.listDocuments(
      "675c27e700352f3e8665", // Database ID
      "675c28a1002cd8eb0a8a"  // Collection ID
    );
    return response.documents;
  },

  async login(email: string, password: string) {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  },

  async register(email: string, password: string, role: string) {
    // Step 1: Create the user
    const user = await account.create(ID.unique(), email, password);
    
    // Step 2: Save user info in the database with role
    await database.createDocument(
      "675c27e700352f3e8665",
      "675c2d2100f4f3c8a123",
      ID.unique(), // Auto-generate unique ID
      {
        userId: user.$id,
        email: email,
        role: role,
        createdAt: new Date().toISOString(),
      }
    );
    return user;
  },

  async getUser() {
    const user = await account.get();
    return user;
  },
};
