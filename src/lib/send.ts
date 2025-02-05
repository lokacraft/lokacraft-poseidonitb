"use server"
import { compileWelcomeTemplate, sendMail } from "./mail";

export const Send = async ({name,from,phone, subject, instansi, message, selectedCategory, customCategory}: {
      name: string,
      from: string,
      phone: string,
      subject: string,
      instansi: string,
      message: string,
      selectedCategory: string,
      customCategory: string,
}) => {
      await sendMail({
        to: process.env.SMTP_EMAIL as string,
        from: from,
        name: name,
        phone: phone,
        subject: name,
        instansi: instansi,
        selectedCategory: selectedCategory,
        customCategory: customCategory,
        body: compileWelcomeTemplate(name,from, process.env.SMTP_EMAIL as string, phone, subject, instansi, selectedCategory, customCategory, message),
      });
};