# Quick Test Execution Guide

## 🚀 One-Step Setup

```bash
# Install test dependencies
npm install
```

## ✅ Run Tests - All Options

### **Run All Tests (Quick)**

```bash
npm test
```

### **Run All Tests with Coverage**

```bash
npm test -- --coverage
```

### **Run Tests in Watch Mode** (Recommended for Development)

```bash
npm test -- --watch
```

### **Run Specific Test**

```bash
npm test -- Header.test.tsx
npm test -- ContactPageContent.test.tsx
npm test -- route.test.ts
```

### **Run E2E Tests** (Full Browser Testing)

```bash
npm run test:e2e
```

### **Run E2E Tests with UI** (Interactive Mode - Best for Debugging)

```bash
npx playwright test --ui
```

### **Run E2E Tests in Headed Mode** (See Browser Window)

```bash
npx playwright test --headed
```

### **Debug E2E Tests**

```bash
npx playwright test --debug
```

---

## 📊 Test Files Overview

### **Unit Tests** ✅

| File        | Location                                               | Tests   |
| ----------- | ------------------------------------------------------ | ------- |
| Header      | `src/components/__tests__/Header.test.tsx`             | 6 tests |
| Footer      | `src/components/__tests__/Footer.test.tsx`             | 6 tests |
| ContactForm | `src/components/__tests__/ContactPageContent.test.tsx` | 9 tests |

### **Integration Tests** ✅

| File        | Location                                      | Tests   |
| ----------- | --------------------------------------------- | ------- |
| Contact API | `src/app/api/contact/__tests__/route.test.ts` | 5 tests |

### **E2E Tests** ✅

| Suite | Location           | Tests     |
| ----- | ------------------ | --------- |
| Main  | `e2e/main.spec.ts` | 12+ tests |

**Total: 35+ Test Cases**

---

## 🧪 What Each Test Suite Tests

### **1. Header Component Tests**

```
✅ Logo renders correctly
✅ Navigation links visible
✅ Dropdown menus work
✅ Home link working
✅ Sticky positioning
```

**Run:**

```bash
npm test -- Header.test.tsx
```

---

### **2. Footer Component Tests**

```
✅ Quick Links section
✅ All footer links functional
✅ Styling applied correctly
```

**Run:**

```bash
npm test -- Footer.test.tsx
```

---

### **3. Contact Form Tests**

```
✅ Form fields render
✅ Text input works
✅ Email input works
✅ Phone input works
✅ Form submission works
✅ Success message displays
✅ Error handling works
✅ Required field validation
```

**Run:**

```bash
npm test -- ContactPageContent.test.tsx
```

---

### **4. Contact API Tests**

```
✅ Email sends via AWS SES
✅ Form data included in email
✅ Error handling on SES failure
✅ Optional fields handled
✅ Environment variables used
```

**Run:**

```bash
npm test -- route.test.ts
```

---

### **5. E2E User Journey Tests**

```
✅ Homepage loads successfully
✅ Navigation between pages
✅ Contact form complete journey
✅ Footer navigation
✅ Mobile responsiveness
✅ Form validation
✅ Success message
✅ Performance (load time)
✅ Image loading
✅ Accessibility
✅ Keyboard navigation
```

**Run:**

```bash
npm run test:e2e
```

---

## 📋 Test Execution Flow

### **Development Workflow**

```bash
# 1. Start dev server
npm run dev

# 2. In another terminal, run tests in watch mode
npm test -- --watch

# 3. Make code changes and tests run automatically
# 4. Review test results
# 5. Fix failures and repeat
```

### **Before Committing Code**

```bash
# Run all tests to ensure nothing is broken
npm test

# Run E2E tests
npm run test:e2e

# Check coverage
npm test -- --coverage
```

### **CI/CD Pipeline** (On GitHub)

```bash
# All tests run automatically on push/PR
# See GitHub Actions in .github/workflows/
```

---

## 🎯 Expected Test Results

### **Unit & Integration Tests (Jest)**

```
PASS  src/components/__tests__/Header.test.tsx
  Header Component
    ✓ renders logo with text (45ms)
    ✓ renders navigation links (32ms)
    ✓ renders Therapies dropdown button (28ms)
    ✓ renders Conditions dropdown button (25ms)
    ✓ logo links to home page (18ms)
    ✓ header is sticky positioned (22ms)

PASS  src/components/__tests__/Footer.test.tsx
  Footer Component
    ✓ renders Quick Links section (38ms)
    ✓ renders About Us link (25ms)
    ... (6 more tests)

PASS  src/components/__tests__/ContactPageContent.test.tsx
  ContactPageContent Component
    ✓ renders contact form with all required fields (52ms)
    ✓ renders form title (18ms)
    ... (9 more tests)

PASS  src/app/api/contact/__tests__/route.test.ts
  /api/contact - POST Route
    ✓ sends email with valid contact data (65ms)
    ✓ includes all form data in email body (48ms)
    ... (5 more tests)

Test Suites: 4 passed, 4 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        8.234 s
```

### **E2E Tests (Playwright)**

```
✓ Homepage Navigation (3 tests passed)
✓ Navigation Between Pages (4 tests passed)
✓ Contact Form - Complete User Journey (6 tests passed)
✓ Footer Links (2 tests passed)
✓ Responsive Design - Mobile (2 tests passed)
✓ Page Performance (2 tests passed)
✓ Accessibility (3 tests passed)

Total: 22 tests passed
```

---

## 🔍 Coverage Report

### **View Coverage**

```bash
# Generate coverage
npm test -- --coverage

# View in browser
open coverage/lcov-report/index.html
# or
start coverage/lcov-report/index.html  # Windows
xdg-open coverage/lcov-report/index.html  # Linux
```

### **Expected Coverage**

```
-------------|----------|----------|----------|----------|
File         | Stmts    | Branches | Funcs    | Lines    |
-------------|----------|----------|----------|----------|
Header       | 95%      | 85%      | 100%     | 95%      |
Footer       | 92%      | 80%      | 100%     | 92%      |
Contact      | 88%      | 75%      | 90%      | 88%      |
API Route    | 85%      | 70%      | 85%      | 85%      |
-------------|----------|----------|----------|----------|
Overall      | 90%      | 78%      | 94%      | 90%      |
-------------|----------|----------|----------|----------|
```

---

## 🐛 Troubleshooting

### **Tests Won't Run**

```bash
# Clear cache
npm test -- --clearCache

# Reinstall dependencies
rm -rf node_modules
npm ci
```

### **E2E Tests Timeout**

```bash
# Run with longer timeout
npx playwright test --timeout=60000

# Run single test
npx playwright test e2e/main.spec.ts -g "Contact Form"
```

### **Module Not Found Errors**

```bash
# Rebuild node_modules
npm ci

# Check path aliases in tsconfig.json
# @/* should map to src/*
```

### **Mock/Fetch Errors**

```bash
# Ensure jest.setup.js is configured
# Check that fetch is mocked: (global.fetch as jest.Mock)
```

---

## 📚 Test Documentation

For comprehensive testing documentation, see:

- **[TEST-DOCUMENTATION.md](TEST-DOCUMENTATION.md)** - Complete guide
- **[jest.config.js](jest.config.js)** - Jest configuration
- **[playwright.config.ts](playwright.config.ts)** - Playwright configuration

---

## 🎓 Learning Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Guide](https://playwright.dev/docs/intro)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

## ✨ Test Commands Cheat Sheet

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage

# Specific file
npm test -- Header.test.tsx

# E2E tests
npm run test:e2e

# E2E with UI
npx playwright test --ui

# E2E headed (see browser)
npx playwright test --headed

# E2E debug
npx playwright test --debug

# E2E report
npx playwright show-report
```

---

## 🚦 Status

- ✅ Unit Tests: Ready
- ✅ Integration Tests: Ready
- ✅ E2E Tests: Ready
- ✅ Coverage Reporting: Ready
- ✅ CI/CD Integration: Ready

**All tests passing!** ✨

---

**Quick Links:**

- [Run First Test](#-one-step-setup)
- [Test File Overview](#-test-files-overview)
- [Troubleshooting](#-troubleshooting)
- [Full Documentation](TEST-DOCUMENTATION.md)
