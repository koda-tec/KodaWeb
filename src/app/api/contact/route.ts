import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

const emailKoda = process.env.EMAIL_TO;

export async function POST(request: Request) {
  try {
   
    const { nombre, email, telefono, mensaje } = await request.json();

   
    if (!nombre || !email || !mensaje || !emailKoda) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios o la configuración del servidor es incorrecta.' },
        { status: 400 }
      );
    }

    await Promise.all([
     
      resend.emails.send({
        from: 'Sitio Web KODA <onboarding@resend.dev>',
        to: emailKoda,
        subject: `Nuevo mensaje de contacto de: ${nombre}`,
   
        replyTo: email, 
        html: `
          <h1>Nuevo mensaje desde la web de KODA</h1>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email del remitente:</strong> ${email}</p>
          ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ''}
          <hr />
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje.replace(/\n/g, '<br>')}</p>
        `,
      }),

    
      resend.emails.send({
        from: 'KODA <onboarding@resend.dev>',
        to: email,
        subject: 'Hemos recibido tu mensaje | KODA',
        html: `
          <h1>¡Gracias por contactarnos, ${nombre}!</h1>
          <p>Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo a la brevedad.</p>
          <p>Este es un correo de confirmación automática.</p>
          <br>
          <p>Atentamente,</p>
          <p>El equipo de KODA</p>
        `,
      }),
    ]);

  
    return NextResponse.json({ message: 'Mensaje enviado con éxito' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hubo un error al procesar tu solicitud.' }, { status: 500 });
  }
}