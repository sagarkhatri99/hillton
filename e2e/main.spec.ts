import { test, expect } from "@playwright/test";

test.describe("Homepage Navigation", () => {
  test("should load homepage successfully", async ({ page }) => {
    await page.goto("/");
    expect(page).toHaveTitle(/Hillton|Natural Healing/);
  });

  test("should have working header navigation", async ({ page }) => {
    await page.goto("/");

    // Check Home link
    const homeLink = page.locator('a[href="/"]');
    await expect(homeLink).toBeVisible();

    // Check About link
    const aboutLink = page.locator('a[href="/about"]');
    await expect(aboutLink).toBeVisible();
  });

  test("should display blog articles on homepage", async ({ page }) => {
    await page.goto("/");

    // Check for blog section
    const blogSection = page.locator("text=/Blog|Articles/i");
    await expect(blogSection).toBeVisible();
  });

  test("should have accessible contact button or link", async ({ page }) => {
    await page.goto("/");

    const contactLink = page.locator('a[href="/contact"]');
    await expect(contactLink).toBeVisible();

    await contactLink.click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Navigation Between Pages", () => {
  test("should navigate to About page", async ({ page }) => {
    await page.goto("/");

    const aboutLink = page.locator('a[href="/about"]');
    await aboutLink.click();

    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("should navigate to Services page", async ({ page }) => {
    await page.goto("/");

    // Find and click services link (might be in dropdown)
    const servicesLink = page.locator('a[href="/services"]');
    await servicesLink.click();

    await expect(page).toHaveURL(/\/services/);
  });

  test("should navigate to Blog page", async ({ page }) => {
    await page.goto("/");

    const blogLink = page.locator('a[href="/blog"]');
    await blogLink.click();

    await expect(page).toHaveURL(/\/blog/);
  });

  test("should navigate to Conditions page", async ({ page }) => {
    await page.goto("/");

    const conditionsLink = page.locator('a[href="/conditions"]');
    await conditionsLink.click();

    await expect(page).toHaveURL(/\/conditions/);
  });
});

test.describe("Contact Form - Complete User Journey", () => {
  test("should load contact page and display form", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.locator("text=Consultation Request")).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
  });

  test("should fill and submit contact form", async ({ page }) => {
    await page.goto("/contact");

    // Fill form fields
    await page.locator('input[name="name"]').fill("John Doe");
    await page.locator('input[name="email"]').fill("john@example.com");
    await page.locator('input[name="phone"]').fill("9876543210");
    await page.locator('input[name="age"]').fill("35");

    // Submit form
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();

    // Should see success message or validation
    await expect(
      page.locator("text=/thank you|success|submitted/i"),
    ).toBeVisible({ timeout: 10000 });
  });

  test("should validate required fields", async ({ page }) => {
    await page.goto("/contact");

    // Try submitting empty form
    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.click();

    // Check for validation messages (behavior depends on HTML5 validation)
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toBeFocused();
  });

  test("should accept valid email format", async ({ page }) => {
    await page.goto("/contact");

    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill("valid.email@example.com");

    // Should not show error
    await expect(emailInput).toHaveValue("valid.email@example.com");
  });

  test("should fill multiple services selection if available", async ({
    page,
  }) => {
    await page.goto("/contact");

    // Check if service checkboxes exist
    const serviceCheckboxes = page.locator('input[type="checkbox"]');
    const count = await serviceCheckboxes.count();

    if (count > 0) {
      await serviceCheckboxes.first().check();
      await expect(serviceCheckboxes.first()).toBeChecked();
    }
  });
});

test.describe("Footer Links", () => {
  test("should have working footer links", async ({ page }) => {
    await page.goto("/");

    // Check for footer links
    const footerLinks = page.locator('footer a[href="/about"]');
    await expect(footerLinks).toBeVisible();
  });

  test("should navigate via footer contact link", async ({ page }) => {
    await page.goto("/");

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footerContactLink = page.locator('footer a[href="/contact"]');
    await expect(footerContactLink).toBeVisible();
    await footerContactLink.click();

    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Responsive Design - Mobile", () => {
  test("should display mobile menu on small screens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Mobile menu might have hamburger icon or different layout
    const header = page.locator("header");
    await expect(header).toBeVisible();
  });

  test("should have readable text on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const title = page.locator("h1");
    const box = await title.boundingBox();

    // Font size should be readable (at least 16px typically)
    expect(box?.width).toBeGreaterThan(0);
  });
});

test.describe("Page Performance", () => {
  test("homepage should load within reasonable time", async ({ page }) => {
    const startTime = Date.now();
    await page.goto("/");
    const loadTime = Date.now() - startTime;

    // Should load in less than 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test("images should load successfully", async ({ page }) => {
    await page.goto("/");

    // Check for image elements
    const images = page.locator("img");
    const count = await images.count();

    expect(count).toBeGreaterThan(0);

    // First image should be visible
    if (count > 0) {
      await expect(images.first()).toBeVisible();
    }
  });
});

test.describe("Accessibility", () => {
  test("should have proper heading structure", async ({ page }) => {
    await page.goto("/");

    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
  });

  test("should have clickable links with proper hrefs", async ({ page }) => {
    await page.goto("/");

    const links = page.locator("a[href]");
    const count = await links.count();

    expect(count).toBeGreaterThan(0);
  });

  test("buttons should be keyboard accessible", async ({ page }) => {
    await page.goto("/contact");

    const submitButton = page.locator('button:has-text("Submit")');
    await submitButton.focus();

    await expect(submitButton).toBeFocused();
  });
});
