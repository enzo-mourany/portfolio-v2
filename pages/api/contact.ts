import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const body = req.body
  const { email, message } = body

  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)
  const msg = {
    to: 'enzo.mourany@outlook.com',
    from: email,
    subject: 'Sending with SendGrid is Fun',
    text: message,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })

  res.status(200).json({ data: `${body.first} ${body.last}` });
}