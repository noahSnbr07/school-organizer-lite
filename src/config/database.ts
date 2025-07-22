import { PrismaClient } from "@prisma/client";

//create client
const database = new PrismaClient();

//globally accessable
export default database;