import { Client, Databases, ID , Storage} from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

export const databases = new Databases(client);
export const storage = new Storage(client)

export { ID };

