import dbConnect from '../lib/dbConnect'
import User from '../../models/User'
import { useSession } from 'next-auth/react';


// @param {import('next').NextApiRequest} req
// @param {import('next').NextApiResponse} res
 

export default async function handler (req, res) {
  const { method } = req
  console.log(req.body);
  switch (method) {
    case 'GET':
      try {
        const users = await User.find({})
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        await dbConnect();
        const user = await User.create(req.body)
        console.log(req.body);
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PUT' :
      try {     
        await dbConnect();
        const user = await User.findOneAndUpdate(req.body)
        console.log(req.body);
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
    default:
      res.status(400).json({ success: false })
      break
  }
}