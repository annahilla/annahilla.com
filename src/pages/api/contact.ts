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
  const honeypot = form.get("website");
  const loadTime = Number(form.get("formLoadTime"));
  const now = Date.now();

  if (honeypot) {
    console.warn("Bot detected (honeypot filled)");
    return new Response("Bot detected", { status: 400 });
  }

    if (!loadTime || now - loadTime < 3000) {
    console.warn("Bot detected (too fast)");
    return new Response("Bot detected", { status: 400 });
  }

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

