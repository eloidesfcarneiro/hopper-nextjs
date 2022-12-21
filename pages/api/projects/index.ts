// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  name: string,
  slug: string,
  stack: string,
  image: string,
  description: string
}

type DataE = {
  message : string
}

const ps = require('./data.json');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data |DataE>,
) {
  if(req.method === 'GET') {
  res.status(200).json(ps) } else
  {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allow`})
  }
}
