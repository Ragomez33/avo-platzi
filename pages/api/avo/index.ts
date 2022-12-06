import { IncomingMessage, ServerResponse } from "http";
import Database from "../../../database/db";

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new Database();
  const avocados = await db.getAll();
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify({data: avocados, length: avocados.length}));
}

export default allAvos;