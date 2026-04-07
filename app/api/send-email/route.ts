import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey === "YOUR_RESEND_API_KEY") {
      if (process.env.NODE_ENV !== "production") {
        console.warn("RESEND_API_KEY non configurée: envoi d'email simulé en développement.");
        return NextResponse.json(
          {
            success: true,
            message:
              "Mode développement: message reçu mais email non envoyé. Configurez RESEND_API_KEY dans .env.local.",
          },
          { status: 200 }
        );
      }

      console.error("RESEND_API_KEY n'est pas configurée");
      return NextResponse.json(
        { error: "Clé API Resend non configurée. Veuillez ajouter RESEND_API_KEY dans .env.local" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail =
      process.env.CONTACT_TO_EMAIL || "belhassen.jouini1919@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    // Envoyer l'email au propriétaire du portfolio
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #00ff88;">Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; color: #666;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">Message envoyé depuis votre formulaire de contact</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Erreur Resend:", result.error);
      return NextResponse.json(
        { error: `Erreur lors de l'envoi: ${result.error.message || "Erreur inconnue"}` },
        { status: 500 }
      );
    }

    console.info("Email envoye via Resend", {
      id: result.data?.id,
      to: toEmail,
      from: fromEmail,
    });

    return NextResponse.json(
      { success: true, message: "Email envoyé avec succès", id: result.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json(
      { error: `Erreur serveur: ${errorMessage}` },
      { status: 500 }
    );
  }
}
