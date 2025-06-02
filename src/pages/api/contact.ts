import { Resend } from 'resend';
import { mail } from '../../constants/site';
import type { APIRoute } from "astro";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const name = form.get('name');
  const email = form.get('email');
  const message = form.get('message');

  if (!name || !email || !message) {
        return new Response(
          JSON.stringify({
            message: "Required fields are missing",
          }),
          { status: 400 }
        );
}

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: mail,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Missatge:</strong><br/>${message}</p>
      `,
    });

    return redirect("/contact?sent=true");
  } catch (error) {
    console.error(error);
    return redirect("/contact?sent=error");
  }
}

