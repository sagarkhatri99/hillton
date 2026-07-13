require('@testing-library/jest-dom')

// Mock environment variables for tests
process.env.AWS_REGION = 'us-east-1'
process.env.AWS_ACCESS_KEY_ID = 'test-key-id'
process.env.AWS_SECRET_ACCESS_KEY = 'test-secret-key'
process.env.SES_FROM_EMAIL = 'test@example.com'
process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000'

// Mock next/image
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
        const React = require('react')
        return React.createElement('img', props)
    },
}))

// Mock next/link
jest.mock('next/link', () => {
    const React = require('react')
    return ({ children, href }) => {
        return React.createElement('a', { href }, children)
    }
})
