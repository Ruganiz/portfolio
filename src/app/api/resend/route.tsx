import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const objective = formData.get("objective") as string;
    const message = formData.get("message") as string;
    
    // Process attachments
    const file = formData.get("file") as File | null;
    let attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nova Mensagem de Contato</h1>
        </div>
        <div style="padding: 30px; background-color: #f9f9f9; color: #333333;">
          <p style="font-size: 16px; margin-bottom: 10px;"><strong>Nome:</strong> ${name}</p>
          <p style="font-size: 16px; margin-bottom: 10px;"><strong>E-mail:</strong> ${email}</p>
          <p style="font-size: 16px; margin-bottom: 10px;"><strong>Objetivo:</strong> ${objective}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <h2 style="font-size: 18px; margin-bottom: 10px;">Mensagem:</h2>
          <p style="font-size: 15px; line-height: 1.6; white-space: pre-wrap; background: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #eaeaea;">${message}</p>
        </div>
        <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777777;">
          <p style="margin: 0;">Enviado a partir do seu portfólio.</p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rugani.dev@gmail.com",
      subject: `[Portfólio] ${objective || 'Contato'} - ${name}`,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}