import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const getAvoById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const db = new Database();

    const entry = await db.getById(id as string);
    if (entry) {
        res.status(200).json({ data: entry });
    } else {
        res.send({ statusCode: 404, message: 'Invalid ID' });
    }
}

export default getAvoById;