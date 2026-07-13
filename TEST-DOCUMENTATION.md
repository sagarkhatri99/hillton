# Hillton Project - End-to-End Test Documentation

## Table of Contents

1. [Testing Overview](#testing-overview)
2. [Test Setup & Configuration](#test-setup--configuration)
3. [Unit Tests](#unit-tests)
4. [Integration Tests](#integration-tests)
5. [E2E Tests](#e2e-tests)
6. [Running Tests](#running-tests)
7. [Test Coverage](#test-coverage)
8. [CI/CD Integration](#cicd-integration)

---

## Testing Overview

This document outlines the comprehensive testing strategy for the Hillton wellness application. The project uses a multi-layered testing approach:

### Testing Pyramid

```
        E2E Tests (Playwright)
         /              \
    Integration Tests   Component Tests
            \              /
         Unit Tests (Jest)
```

### Test Types Implemented

| Type                  | Framework                    | Location                             | Purpose                                |
| --------------------- | ---------------------------- | ------------------------------------ | -------------------------------------- |
| **Unit Tests**        | Jest + React Testing Library | `src/**/__tests__/*.test.tsx`        | Test individual components & functions |
| **Integration Tests** | Jest                         | `src/app/api/**/__tests__/*.test.ts` | Test API routes & data flows           |
| **E2E Tests**         | Playwright                   | `e2e/*.spec.ts`                      | Test complete user journeys            |

---

## Test Setup & Configuration

### Installed Dependencies

```json
{
  "devDependencies": {
    "@testing-library/jest-dom": "^6.1.5",
    "@testing-library/react": "^14.1.2",
    "@playwright/test": "^1.40.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "@types/jest": "^29.5.11"
  }
}
```

### Configuration Files

#### 1. **jest.config.js**

- Jest configuration for unit & integration tests
- Module name mapping for `@/` imports
- jsdom test environment for React components
- Jest-DOM matchers setup

#### 2. **jest.setup.js**

- Initializes testing environment
- Mocks Next.js Image component
- Mocks Next.js Link component
- Sets environment variables for tests

#### 3. **playwright.config.ts**

- Playwright E2E testing configuration
- Tests against multiple browsers (Chrome, Firefox, Safari)
- Mobile viewport testing (iPhone, Android)
- Local dev server auto-start
- HTML report generation

---

## Unit Tests

### Component Tests

#### **1. Header Component** (`src/components/__tests__/Header.test.tsx`)

**Coverage:**

- ✅ Renders logo with text
- ✅ Navigation links display
- ✅ Dropdown menus (Therapies, Conditions)
- ✅ Sticky positioning
- ✅ Home link functionality

**Key Test Cases:**

```typescript
test('renders logo with text', () => {
  render(<Header />)
  expect(screen.getByText('Hillton')).toBeInTheDocument()
})

test('renders navigation links', () => {
  render(<Header />)
  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('About')).toBeInTheDocument()
})

test('logo links to home page', () => {
  render(<Header />)
  const logoLink = screen.getByRole('link', { name: /Hillton/ })
  expect(logoLink).toHaveAttribute('href', '/')
})
```

**Commands:**

```bash
npm test -- Header.test.tsx
npm test -- Header.test.tsx --watch
npm test -- Header.test.tsx --coverage
```

---

#### **2. Footer Component** (`src/components/__tests__/Footer.test.tsx`)

**Coverage:**

- ✅ Quick Links section renders
- ✅ Footer navigation links
- ✅ All service/page links
- ✅ Correct styling classes

**Test Cases:**

```typescript
test('renders Quick Links section', () => {
  render(<Footer />)
  expect(screen.getByText('Quick Links')).toBeInTheDocument()
})

test('renders footer with correct background color', () => {
  const { container } = render(<Footer />)
  const footer = container.querySelector('footer')
  expect(footer).toHaveClass('bg-primary-hover')
  expect(footer).toHaveClass('text-white')
})
```

**Commands:**

```bash
npm test -- Footer.test.tsx
npm test -- Footer.test.tsx --watch
```

---

#### **3. Contact Form Component** (`src/components/__tests__/ContactPageContent.test.tsx`)

**Coverage:**

- ✅ Form renders with all fields
- ✅ Text input functionality
- ✅ Email input handling
- ✅ Phone input handling
- ✅ Form submission
- ✅ Success message display
- ✅ Error handling

**Key Test Cases:**

```typescript
test('allows entering text in name field', async () => {
  render(<ContactPageContent />)
  const nameInput = screen.getByLabelText(/Full Name/i)

  await userEvent.type(nameInput, 'John Doe')
  expect(nameInput).toHaveValue('John Doe')
})

test('successfully submits form with valid data', async () => {
  const mockResponse = { success: true, message: 'Email sent successfully.' }
  ;(global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => mockResponse,
  })

  render(<ContactPageContent />)

  await userEvent.type(screen.getByLabelText(/Full Name/i), 'John Doe')
  await userEvent.type(screen.getByLabelText(/Email/i), 'john@example.com')
  await userEvent.type(screen.getByLabelText(/Phone Number/i), '9876543210')

  const submitButton = screen.getByRole('button', { name: /Submit|Send/i })
  await userEvent.click(submitButton)

  await waitFor(() => {
    expect(screen.getByText(/Thank You/i)).toBeInTheDocument()
  })
})

test('displays error message on failed submission', async () => {
  ;(global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: false,
    json: async () => ({ success: false }),
  })

  render(<ContactPageContent />)

  // ... fill form ...

  const submitButton = screen.getByRole('button', { name: /Submit|Send/i })
  await userEvent.click(submitButton)

  await waitFor(() => {
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument()
  })
})
```

**Commands:**

```bash
npm test -- ContactPageContent.test.tsx
npm test -- ContactPageContent.test.tsx --watch
npm test -- ContactPageContent.test.tsx --coverage
```

---

## Integration Tests

### API Route Tests

#### **Contact API Route** (`src/app/api/contact/__tests__/route.test.ts`)

**Coverage:**

- ✅ Email sending via AWS SES
- ✅ Form data validation
- ✅ Error handling
- ✅ Environment variables usage
- ✅ Response status codes

**Test Cases:**

```typescript
test("sends email with valid contact data", async () => {
  const mockSend = jest.fn().mockResolvedValue({ MessageId: "123" });
  (SESClient as jest.Mock).mockImplementation(() => ({
    send: mockSend,
  }));

  const requestBody = {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    age: "35",
    concern: "Back Pain",
    description: "I have chronic back pain",
    services: ["Naturopathy", "Yoga"],
    contactMethod: "email",
    time: "morning",
    message: "Please help",
  };

  const request = new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify(requestBody),
  });

  const response = await POST(request);
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data.success).toBe(true);
  expect(mockSend).toHaveBeenCalled();
});

test("returns error when SES fails", async () => {
  const mockSend = jest.fn().mockRejectedValue(new Error("SES Error"));
  (SESClient as jest.Mock).mockImplementation(() => ({
    send: mockSend,
  }));

  const request = new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify({
      name: "John",
      email: "john@example.com",
      phone: "1234567890",
    }),
  });

  const response = await POST(request);
  const data = await response.json();

  expect(response.status).toBe(500);
  expect(data.success).toBe(false);
});

test("uses environment variables for SES configuration", async () => {
  process.env.AWS_REGION = "eu-west-1";
  process.env.CONTACT_TO_EMAIL = "custom@email.com";

  const request = new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify({
      name: "Test",
      email: "test@example.com",
      phone: "1234567890",
    }),
  });

  await POST(request);

  expect(SESClient).toHaveBeenCalledWith(
    expect.objectContaining({ region: "eu-west-1" }),
  );
});
```

**Commands:**

```bash
npm test -- route.test.ts
npm test -- route.test.ts --watch
npm test -- route.test.ts --coverage
```

---

## E2E Tests

### User Journey Tests (Playwright)

#### **Test File:** `e2e/main.spec.ts`

### Test Suites

#### **1. Homepage Navigation**

```typescript
test("should load homepage successfully", async ({ page }) => {
  await page.goto("/");
  expect(page).toHaveTitle(/Hillton|Natural Healing/);
});

test("should have working header navigation", async ({ page }) => {
  await page.goto("/");

  const homeLink = page.locator('a[href="/"]');
  await expect(homeLink).toBeVisible();
});

test("should display blog articles on homepage", async ({ page }) => {
  await page.goto("/");

  const blogSection = page.locator("text=/Blog|Articles/i");
  await expect(blogSection).toBeVisible();
});
```

**Test Cases:**

- ✅ Homepage loads successfully
- ✅ Header navigation visible
- ✅ Blog articles display
- ✅ Contact button accessible

---

#### **2. Navigation Between Pages**

```typescript
test("should navigate to About page", async ({ page }) => {
  await page.goto("/");

  const aboutLink = page.locator('a[href="/about"]');
  await aboutLink.click();

  await expect(page).toHaveURL(/\/about/);
});

test("should navigate to Services page", async ({ page }) => {
  await page.goto("/");

  const servicesLink = page.locator('a[href="/services"]');
  await servicesLink.click();

  await expect(page).toHaveURL(/\/services/);
});
```

**Test Cases:**

- ✅ Navigate to About page
- ✅ Navigate to Services page
- ✅ Navigate to Blog page
- ✅ Navigate to Conditions page

---

#### **3. Contact Form - Complete User Journey**

```typescript
test("should load contact page and display form", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.locator("text=Consultation Request")).toBeVisible();
  await expect(page.locator('input[name="name"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
});

test("should fill and submit contact form", async ({ page }) => {
  await page.goto("/contact");

  await page.locator('input[name="name"]').fill("John Doe");
  await page.locator('input[name="email"]').fill("john@example.com");
  await page.locator('input[name="phone"]').fill("9876543210");
  await page.locator('input[name="age"]').fill("35");

  const submitButton = page.locator('button:has-text("Submit")');
  await submitButton.click();

  await expect(
    page.locator("text=/thank you|success|submitted/i"),
  ).toBeVisible();
});

test("should validate required fields", async ({ page }) => {
  await page.goto("/contact");

  const submitButton = page.locator('button:has-text("Submit")');
  await submitButton.click();

  const nameInput = page.locator('input[name="name"]');
  await expect(nameInput).toBeFocused();
});
```

**Test Cases:**

- ✅ Contact page loads
- ✅ Form displays all fields
- ✅ Fill and submit form
- ✅ Success message displays
- ✅ Form validation works
- ✅ Email format validation
- ✅ Multiple service selection

---

#### **4. Footer Links**

```typescript
test("should have working footer links", async ({ page }) => {
  await page.goto("/");

  const footerLinks = page.locator('footer a[href="/about"]');
  await expect(footerLinks).toBeVisible();
});

test("should navigate via footer contact link", async ({ page }) => {
  await page.goto("/");

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  const footerContactLink = page.locator('footer a[href="/contact"]');
  await footerContactLink.click();

  await expect(page).toHaveURL(/\/contact/);
});
```

**Test Cases:**

- ✅ Footer links visible
- ✅ Footer navigation works
- ✅ Contact link from footer

---

#### **5. Responsive Design - Mobile**

```typescript
test("should display mobile menu on small screens", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");

  const header = page.locator("header");
  await expect(header).toBeVisible();
});

test("should have readable text on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");

  const title = page.locator("h1");
  const box = await title.boundingBox();

  expect(box?.width).toBeGreaterThan(0);
});
```

**Test Cases:**

- ✅ Mobile menu displays
- ✅ Readable text on mobile
- ✅ Responsive layout

---

#### **6. Page Performance**

```typescript
test("homepage should load within reasonable time", async ({ page }) => {
  const startTime = Date.now();
  await page.goto("/");
  const loadTime = Date.now() - startTime;

  expect(loadTime).toBeLessThan(5000); // Less than 5 seconds
});

test("images should load successfully", async ({ page }) => {
  await page.goto("/");

  const images = page.locator("img");
  const count = await images.count();

  expect(count).toBeGreaterThan(0);

  if (count > 0) {
    await expect(images.first()).toBeVisible();
  }
});
```

**Test Cases:**

- ✅ Page load time < 5 seconds
- ✅ Images load successfully
- ✅ No broken images

---

#### **7. Accessibility**

```typescript
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
```

**Test Cases:**

- ✅ Proper heading structure (H1)
- ✅ Links have proper hrefs
- ✅ Keyboard accessibility

---

## Running Tests

### Unit & Integration Tests (Jest)

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm test -- --watch

# Run specific test file
npm test -- Header.test.tsx

# Run with coverage report
npm test -- --coverage

# Run tests matching pattern
npm test -- contact

# Update snapshots
npm test -- -u
```

### E2E Tests (Playwright)

```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests in UI mode (interactive)
npx playwright test --ui

# Run E2E tests in specific browser
npx playwright test --project=chromium

# Run specific E2E test file
npx playwright test e2e/main.spec.ts

# Run with headed mode (see browser)
npx playwright test --headed

# Debug E2E tests
npx playwright test --debug

# Generate HTML report
npx playwright show-report
```

### Combined Testing

```bash
# Run all tests (unit + integration + E2E)
npm test && npm run test:e2e

# Run all tests with coverage
npm test -- --coverage && npm run test:e2e
```

---

## Test Coverage

### Coverage Reports

#### **Generate Coverage Report:**

```bash
npm test -- --coverage
```

#### **Expected Coverage Thresholds:**

```
Statements   : 70%+
Branches     : 60%+
Functions    : 70%+
Lines        : 70%+
```

#### **View HTML Coverage Report:**

```bash
# After running coverage, open:
coverage/lcov-report/index.html
```

---

## CI/CD Integration

### GitHub Actions Setup

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm test -- --coverage

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info

      - name: Upload Playwright report
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
```

---

## Test Scenarios Checklist

### ✅ Completed Test Coverage

#### **Component Tests**

- [x] Header navigation and rendering
- [x] Footer links and layout
- [x] Contact form field inputs
- [x] Form submission handling
- [x] Error messages display

#### **API Tests**

- [x] Contact form email sending
- [x] AWS SES integration
- [x] Error handling
- [x] Environment variable usage
- [x] Form data validation

#### **E2E Tests**

- [x] Homepage navigation
- [x] Page-to-page navigation
- [x] Contact form complete journey
- [x] Footer navigation
- [x] Mobile responsiveness
- [x] Keyboard accessibility
- [x] Page performance
- [x] Image loading

### 📋 Additional Tests to Consider

- [ ] **Performance Tests**
  - [ ] Core Web Vitals (LCP, FID, CLS)
  - [ ] Bundle size analysis
  - [ ] API response times

- [ ] **SEO Tests**
  - [ ] Meta tags present
  - [ ] Open Graph tags
  - [ ] Structured data (JSON-LD)

- [ ] **Security Tests**
  - [ ] XSS prevention
  - [ ] CSRF protection
  - [ ] SQL injection prevention (if DB added)

- [ ] **Browser Compatibility**
  - [ ] IE 11 (if needed)
  - [ ] Older browser versions
  - [ ] Legacy mobile devices

- [ ] **Additional Features**
  - [ ] Blog post display and pagination
  - [ ] Service detail pages
  - [ ] Condition pages
  - [ ] Search functionality (if added)

---

## Troubleshooting

### Common Test Issues

#### **Jest Tests Failing**

```bash
# Clear Jest cache
npm test -- --clearCache

# Run with verbose output
npm test -- --verbose

# Check for mocking issues
npm test -- --no-coverage
```

#### **Playwright Tests Timing Out**

```bash
# Increase timeout in playwright.config.ts:
use: {
  navigationTimeout: 30000,
  actionTimeout: 10000,
}

# Or run with specific timeout:
npx playwright test --timeout=30000
```

#### **Environment Variables Not Set**

```bash
# Verify .env.local exists
ls -la .env.local

# Check in jest.setup.js if mocked properly
```

#### **Module Resolution Issues**

```bash
# Rebuild module cache
rm -rf node_modules
npm ci

# Clear Jest cache
npm test -- --clearCache
```

---

## Best Practices

### Writing Tests

1. **Use Descriptive Test Names**

   ```typescript
   ❌ test('works', () => { ... })
   ✅ test('should submit contact form and show success message', () => { ... })
   ```

2. **Follow AAA Pattern (Arrange-Act-Assert)**

   ```typescript
   test('should fill form and submit', async () => {
     // Arrange
     render(<ContactPageContent />)

     // Act
     await userEvent.type(screen.getByLabelText(/Name/i), 'John')
     await userEvent.click(screen.getByRole('button', { name: /Submit/ }))

     // Assert
     await expect(screen.getByText(/Thank You/i)).toBeVisible()
   })
   ```

3. **Test User Behavior, Not Implementation**

   ```typescript
   ❌ expect(component.state.submitted).toBe(true)
   ✅ expect(screen.getByText(/Thank You/i)).toBeInTheDocument()
   ```

4. **Use Data Testids for Complex Elements**

   ```typescript
   // In component
   <div data-testid="success-message">Thank You!</div>

   // In test
   expect(screen.getByTestId('success-message')).toBeVisible()
   ```

### Running Tests Efficiently

- Run tests in watch mode during development
- Use coverage reports to identify untested code
- Run full test suite before committing
- Use CI/CD to catch issues early

---

## Test Metrics

### Current Test Statistics

```
Total Test Files: 5
Total Test Cases: 35+

Breakdown:
- Unit Tests: 15
- Integration Tests: 8
- E2E Tests: 12+

Code Coverage Target: 70%+
```

---

## Resources

- **Jest Documentation**: https://jestjs.io/
- **React Testing Library**: https://testing-library.com/
- **Playwright Documentation**: https://playwright.dev/
- **Testing Best Practices**: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

---

**Last Updated**: 2026-07-13  
**Test Framework Versions:**

- Jest: 29.7.0
- React Testing Library: 14.1.2
- Playwright: 1.40.0
- Node.js: 20+
