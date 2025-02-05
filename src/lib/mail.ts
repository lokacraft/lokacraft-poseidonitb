import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { welcomeTemplate } from "./templates/welcome";

export async function sendMail({
  to,
  from,
  name,
  phone,
  subject,
  instansi,
  selectedCategory,
  customCategory= '',
  body,
}: {
  to: string;
  from: string;
  name: string; 
  phone: string;
  subject: string;
  instansi: string;
  selectedCategory: string;
  customCategory: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: from,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileWelcomeTemplate(name: string, from: string, to: string, phone: string, subject: string, instansi: string, selectedCategory: string, customCategory: string, body: string) {
  const template = handlebars.compile(welcomeTemplate);
  if(customCategory !== '') {
    const newCategory = customCategory;
    const htmlBody = template({
      name: name,
      from: from,
      to: to,
      phone: phone,
      subject: subject,
      instansi: instansi,
      selectedCategory: newCategory,
      body: body,
    });
    return htmlBody;
  } else {
    const newCategory = selectedCategory;
    const htmlBody = template({
      name: name,
      from: from,
      to: to,
      phone: phone,
      subject: subject,
      instansi: instansi,
      selectedCategory: newCategory,
      body: body,
    });
    return htmlBody;
  }
}