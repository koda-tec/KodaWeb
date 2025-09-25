import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request:Request) {
    try {
        const {nombre, email, mensaje} = await request.json();

        if (!nombre || !email || !mensaje) {
            return NextResponse.json({error: 'Todos los campos son obligatorios'}, {status:400});
        }

        const transporter = nodemailer.createTransport({host:process.env.EMAIL_SERVER_HOST,
            port: Number(process.env.EMAIL_SERVER_PORT),
            secure:true,
            auth:{
                user:process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            },
        });

         const mailOptions = {
      from: `"KODA WEB" <${process.env.EMAIL_SERVER_USER}>`, // Quien envía
      to: process.env.EMAIL_TO, // A quien le llega 

      subject: `Nuevo mensaje de contacto de: ${nombre}`,
      html: `
        <h1>Nuevo mensaje desde la web de KODA</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);


    return NextResponse.json({message: 'Mensaje enviado con éxito'}, {status:200})
    } catch (error) {
        console.error(error);

        return NextResponse.json({error:'Hubo un error al enviar el mensaje. Inténtalo de nuevo.'},{status:500});
        
    }
}