import { NextFunction, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { ResponseCodes, emailTemplate } from '../types/constants';

export const postContact = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    html: emailTemplate
      .replace('{{name}}', name)
      .replace('{{email}}', email)
      .replace('{{message}}', message),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send(ResponseCodes.EMAIL_SENT_SUCCESSFULLY);
  } catch (e: any) {
    res.status(500).send(ResponseCodes.EMAIL_NOT_SENT);
  }
};
