import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { fromEnv } from "@aws-sdk/credential-providers";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: fromEnv(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const toAddress =
      process.env.CONTACT_TO_EMAIL || "info@hilltonprakritikchikitsa.in";
    const sourceAddress =
      process.env.CONTACT_FROM_EMAIL || "no-reply@hilltonprakritikchikitsa.in";

    const emailBody = [
      `Name: ${body.name || ""}`,
      `Email: ${body.email || ""}`,
      `Phone: ${body.phone || ""}`,
      `Age: ${body.age || ""}`,
      `Concern: ${body.concern || ""}`,
      `Description: ${body.description || ""}`,
      `Services: ${(body.services || []).join(", ")}`,
      `Preferred Contact Method: ${body.contactMethod || ""}`,
      `Preferred Time: ${body.time || ""}`,
      `Additional Message: ${body.message || ""}`,
    ].join("\n");

    const command = new SendEmailCommand({
      Source: sourceAddress,
      Destination: {
        ToAddresses: [toAddress],
      },
      Message: {
        Subject: {
          Data: `New Consultation Request from ${body.name || "Website"}`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: emailBody,
            Charset: "UTF-8",
          },
        },
      },
    });

    await sesClient.send(command);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("SES send failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 },
    );
  }
}
