import dbConnect from '../lib/dbConnect'
import Userinfo from '../../models/Userinfo'
import { useSession } from 'next-auth/react';


// @param {import('next').NextApiRequest} req
// @param {import('next').NextApiResponse} res
 

export default async function handler (req, res) {
  const session = useSession

  const { method } = req
  console.log(req.body);
  switch (method) {
    case 'GET':
      try {
        const users = await Userinfo.find({})
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        await dbConnect();
        const user = await Userinfo.create(req.body)
        console.log(req.body);
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PUT' :
      try {     
        await dbConnect();
        const user = await Userinfo.findOneAndUpdate(req.body)
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