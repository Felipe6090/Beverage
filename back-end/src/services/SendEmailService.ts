import nodemailer from "nodemailer";
import "dotenv/config";

import { Request, Response } from "express";

type IClient = {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  text: string;
};

export async function SendEmailService(req: Request, res: Response) {
  const user = process.env.SENDER_EMAIL_ADRESS;
  const pass = process.env.EMAIL_PASSWORD;

  const data: IClient = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass,
    },
  });

  const mail = {
    from: user,
    to: data.clientEmail,
    subject: `${data.clientName} te enviou uma mensagem`,
    html: `<p>Nova Mensagem de ${data.clientName}</p> </br>
      <p>Dados do Cliente:</p>
      <p>Nome: ${data.clientName}</p>
      <p>Email de Contato: ${data.clientEmail}</p>
      <p>Telefone de Contato: ${data.clientPhone}</p>
      <p>Mensagem:</p></br>${data.text}`,
  };

  await transporter.sendMail(mail);
}
