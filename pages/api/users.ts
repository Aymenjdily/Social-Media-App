// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../Constants/client';
import { allUsersQuery } from '../../Constants/queries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const data = await client.fetch(allUsersQuery());
    if(data) {
      res.status(200).json(data);
    } else {
      res.json([]);
    }
}