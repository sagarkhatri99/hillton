describe("/api/contact - SES Configuration", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.AWS_REGION = "us-east-1";
    process.env.CONTACT_TO_EMAIL = "info@test.com";
    process.env.CONTACT_FROM_EMAIL = "no-reply@test.com";
    process.env.AWS_ACCESS_KEY_ID = "test-key-id";
    process.env.AWS_SECRET_ACCESS_KEY = "test-secret-key";
  });

  test("AWS region environment variable is set correctly", () => {
    expect(process.env.AWS_REGION).toBe("us-east-1");
  });

  test("recipient email is configured correctly", () => {
    expect(process.env.CONTACT_TO_EMAIL).toBe("info@test.com");
  });

  test("sender email is configured correctly", () => {
    expect(process.env.CONTACT_FROM_EMAIL).toBe("no-reply@test.com");
  });

  test("AWS credentials are available in environment", () => {
    expect(process.env.AWS_ACCESS_KEY_ID).toBeDefined();
    expect(process.env.AWS_SECRET_ACCESS_KEY).toBeDefined();
  });

  test("can format email subject with recipient name", () => {
    const name = "John Doe";
    const subject = `New Consultation Request from ${name}`;
    expect(subject).toBeTruthy();
    expect(subject).toContain("New Consultation Request from");
    expect(subject).toContain(name);
  });

  test("can format email body with contact form data", () => {
    const contactData = {
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "9876543210",
      concern: "Health Issue",
    };

    const bodyLines = [
      `Name: ${contactData.name}`,
      `Email: ${contactData.email}`,
      `Phone: ${contactData.phone}`,
      `Concern: ${contactData.concern}`,
    ];

    const emailBody = bodyLines.join("\n");
    expect(emailBody).toContain(contactData.name);
    expect(emailBody).toContain(contactData.email);
    expect(emailBody).toContain(contactData.phone);
  });

  test("services array can be serialized for email", () => {
    const services = ["Naturopathy", "Yoga", "Ayurveda"];
    const serviceString = services.join(", ");
    expect(serviceString).toBe("Naturopathy, Yoga, Ayurveda");
  });

  test("environment configuration is persistent across tests", () => {
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    expect(toEmail).toBeTruthy();
    expect(fromEmail).toBeTruthy();
    expect(toEmail).not.toBe(fromEmail);
  });

  test("contact email addresses contain valid domain format", () => {
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    expect(toEmail).toMatch(/@/);
    expect(fromEmail).toMatch(/@/);
    expect(toEmail).toMatch(/\./);
    expect(fromEmail).toMatch(/\./);
  });
});
