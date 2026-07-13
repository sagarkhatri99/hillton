# Hillton Project - Complete Deployment Guide

## Table of Contents

1. [Environment Setup (.env File)](#environment-setup)
2. [Local Docker Deployment](#local-docker-deployment)
3. [Cloud Deployment Options](#cloud-deployment-options)
4. [AWS Configuration](#aws-configuration)
5. [Post-Deployment Checks](#post-deployment-checks)
6. [Troubleshooting](#troubleshooting)

---

## Environment Setup

### Step 1: Create .env.local File

Create a file named `.env.local` in the root of your project (same level as package.json):

```bash
# Location: /root/hillton/.env.local
```

### Step 2: Add Required Environment Variables

#### **AWS SES Configuration** (Required for Contact Form)

```env
# AWS Region (choose based on your location)
AWS_REGION=us-east-1

# AWS IAM Credentials (get from AWS Console)
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

# Email Configuration
# The email address that AWS SES will use to send emails
# IMPORTANT: This email must be verified in AWS SES
SES_FROM_EMAIL=noreply@hillton.com
```

#### **Optional: Application Configuration**

```env
# Application Environment
NODE_ENV=production

# Next.js Public URLs (set for production)
NEXT_PUBLIC_SITE_URL=https://hillton.com
NEXT_PUBLIC_APP_NAME=Hillton Wellness

# Database (if added in future)
# DATABASE_URL=postgresql://user:password@localhost:5432/hillton
```

### Step 3: How to Get AWS Credentials

#### **A. Get AWS Access Key ID & Secret Access Key:**

1. **Go to AWS Console**
   - URL: https://console.aws.amazon.com

2. **Navigate to IAM (Identity & Access Management)**
   - Click on "Users" → Create new user
   - Username: `hillton-app`

3. **Attach Permissions**
   - Click "Add permissions"
   - Select "Attach policies directly"
   - Search and select: `AmazonSESFullAccess`

4. **Generate Access Key**
   - Go to user's "Security credentials" tab
   - Click "Create access key"
   - Choose "Application running outside AWS"
   - Copy and save the credentials safely

#### **B. Verify SES Email Address:**

1. **Go to AWS SES Console**
   - URL: https://console.aws.amazon.com/ses

2. **Select Your Region** (must match `AWS_REGION` in .env)
   - Dropdown at top-right

3. **Verify Email Address**
   - Left sidebar → "Verified identities" or "Email Addresses"
   - Click "Create identity"
   - Enter your email: `noreply@hillton.com`
   - AWS sends verification email to that address
   - Click link in email to verify

4. **Request Production Access** (if needed)
   - By default, you're in SES Sandbox mode (limited to 1 email/second)
   - For production, request to move out of sandbox
   - Left sidebar → "Account dashboard"
   - Click "Request production access"

### Step 4: Verify .env.local Contents

Your complete .env.local should look like:

```env
# AWS Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIA2BCDEFGHIJKLMNOP
AWS_SECRET_ACCESS_KEY=abc123def456ghi789jklmnopqrstuvwxyz1234

# Email Configuration
SES_FROM_EMAIL=noreply@hillton.com

# Application
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://hillton.com
NEXT_PUBLIC_APP_NAME=Hillton Wellness
```

> ⚠️ **SECURITY WARNING**: Never commit `.env.local` to Git! It's already in `.gitignore`.

---

## Local Docker Deployment

### Prerequisites

- Docker Desktop installed (Windows/Mac) or Docker Engine (Linux)
- .env.local file configured (see above)
- Project root directory ready

### Step 1: Verify Project Structure

```
hillton/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env.local          ← Must exist
├── package.json
├── src/
├── public/
└── tsconfig.json
```

### Step 2: Build Docker Image

```bash
# Navigate to project directory
cd C:\Users\yoges\OneDrive\Desktop\hillton

# Build the image (takes 3-5 minutes first time)
docker-compose build

# Or build manually without compose
docker build -t hillton-app:latest .
```

**Output expected:**

```
[+] Building 245.3s (15/15) FINISHED
=> naming to docker.io/library/hillton-app:latest
```

### Step 3: Run Container Locally

```bash
# Start container in background
docker-compose up -d

# Or run manually
docker run -p 3000:3000 --env-file .env.local hillton-app:latest
```

### Step 4: Verify Container is Running

```bash
# Check container status
docker ps

# Expected output:
# CONTAINER ID   IMAGE              STATUS              PORTS
# abc123def456   hillton-app:latest Up 2 minutes        0.0.0.0:3000->3000/tcp
```

### Step 5: Test Application

```bash
# Open in browser
http://localhost:3000

# Test contact form
# - Navigate to /contact
# - Fill form and submit
# - Check your email for notification
```

### Step 6: View Logs

```bash
# Real-time logs
docker-compose logs -f app

# View last 100 lines
docker-compose logs --tail=100
```

### Step 7: Stop Container

```bash
# Stop all containers
docker-compose down

# Stop specific container
docker stop hillton-app

# Stop and remove volumes/images
docker-compose down -v
```

---

## Cloud Deployment Options

### Option A: Deploy to AWS EC2

#### **Step 1: Launch EC2 Instance**

1. Go to AWS EC2 Console
2. Click "Launch Instance"
3. Select AMI: **Ubuntu Server 22.04 LTS** (free tier eligible)
4. Instance type: **t3.micro** or **t3.small** (for production: t3.medium)
5. Configure:
   - Storage: 20GB (gp3)
   - Security Group: Allow ports 22 (SSH), 80 (HTTP), 443 (HTTPS)
6. Launch and download .pem key file

#### **Step 2: Connect to Instance**

```bash
# From your local machine
ssh -i your-key.pem ubuntu@your-instance-ip

# If permission denied:
chmod 400 your-key.pem
```

#### **Step 3: Install Docker**

```bash
# Update system
sudo apt update
sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add ubuntu to docker group
sudo usermod -aG docker ubuntu

# Verify installation
docker --version
docker run hello-world
```

#### **Step 4: Clone Project**

```bash
# Install git
sudo apt install git -y

# Clone your repository
git clone https://github.com/your-username/hillton.git
cd hillton

# Or upload project manually
# Copy files via SCP or use GitHub
```

#### **Step 5: Create .env.local on Server**

```bash
# Create environment file
nano .env.local

# Paste your environment variables:
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-key-id
AWS_SECRET_ACCESS_KEY=your-secret-key
SES_FROM_EMAIL=noreply@hillton.com
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Press `Ctrl+X`, then `Y`, then `Enter` to save.

#### **Step 6: Build and Run**

```bash
# Build image
docker-compose build

# Run container
docker-compose up -d

# Verify
docker ps
curl http://localhost:3000
```

#### **Step 7: Setup Reverse Proxy with Nginx**

```bash
# Install Nginx
sudo apt install nginx -y

# Create Nginx config
sudo nano /etc/nginx/sites-available/hillton

# Paste this config:
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Press `Ctrl+X`, `Y`, `Enter` to save.

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/hillton /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Enable auto-start
sudo systemctl enable nginx
```

#### **Step 8: Setup SSL with Let's Encrypt**

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal (set by default)
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

#### **Step 9: Setup Auto-restart on Reboot**

```bash
# Create systemd service
sudo nano /etc/systemd/system/hillton-docker.service

# Paste this:
[Unit]
Description=Hillton Docker Container
After=docker.service
Requires=docker.service

[Service]
Type=simple
Restart=always
RestartSec=10
WorkingDirectory=/home/ubuntu/hillton
ExecStart=/usr/bin/docker-compose up
ExecStop=/usr/bin/docker-compose down

[Install]
WantedBy=multi-user.target
```

Press `Ctrl+X`, `Y`, `Enter` to save.

```bash
# Enable service
sudo systemctl enable hillton-docker.service
sudo systemctl start hillton-docker.service

# Check status
sudo systemctl status hillton-docker.service
```

### Option B: Deploy to Docker Hub + AWS ECR

#### **Push to Docker Hub**

```bash
# Login to Docker Hub
docker login

# Tag image
docker tag hillton-app:latest your-username/hillton-app:latest

# Push
docker push your-username/hillton-app:latest

# Pull on server
docker pull your-username/hillton-app:latest
docker run -p 3000:3000 --env-file .env.local your-username/hillton-app:latest
```

#### **Push to AWS ECR**

```bash
# Get AWS ECR login
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com

# Tag image
docker tag hillton-app:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/hillton-app:latest

# Push
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/hillton-app:latest
```

### Option C: Deploy to Vercel (Easiest for Next.js)

#### **Step 1: Connect GitHub**

1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository

#### **Step 2: Configure Environment Variables**

1. Project settings → Environment Variables
2. Add each variable from .env.local:
   - `AWS_REGION`
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `SES_FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_APP_NAME`

#### **Step 3: Deploy**

- Click "Deploy"
- Wait 3-5 minutes
- Access at: `https://your-project.vercel.app`

#### **Step 4: Connect Custom Domain**

- Go to Vercel Dashboard
- Project Settings → Domains
- Add your custom domain
- Update DNS records at your domain provider

---

## AWS Configuration

### Complete AWS Setup Checklist

- [ ] **Create IAM User**
  - Username: `hillton-app`
  - Permissions: `AmazonSESFullAccess`
  - Generate access keys

- [ ] **Verify SES Email**
  - Email: `noreply@hillton.com`
  - Verified in correct region

- [ ] **Request Production Access** (optional)
  - For higher sending limits
  - Estimated 1-2 days approval

- [ ] **Setup Email Templates** (optional)
  - AWS SES Console → Email templates
  - Create templates for different email types

- [ ] **Monitor Sending Stats**
  - CloudWatch metrics
  - Bounce/Complaint rates

---

## Post-Deployment Checks

### Verify Application

```bash
# Test homepage
curl http://localhost:3000

# Test API route
curl http://localhost:3000/api/contact

# Check logs
docker-compose logs app

# Monitor resources
docker stats hillton-app
```

### Test Contact Form

1. Open website in browser
2. Navigate to /contact page
3. Fill form:
   - Name: Test User
   - Email: your-email@example.com
   - Message: Test deployment
4. Submit
5. Check email inbox for notification

### Monitor Email Delivery

```bash
# AWS SES Console
# - Check "Send Statistics"
# - Verify bounce/complaint rates
# - Monitor daily quota usage
```

### Backup .env File

```bash
# Store safely (not in Git)
# Options:
# 1. AWS Secrets Manager
# 2. HashiCorp Vault
# 3. Password manager (1Password, Bitwarden)
# 4. Encrypted file in secure location
```

---

## Troubleshooting

### Container won't start

```bash
# Check logs
docker-compose logs app

# Common issues:
# 1. Port already in use
sudo lsof -i :3000
kill -9 <PID>

# 2. .env.local not found
ls -la .env.local  # Should exist

# 3. Out of disk space
docker system prune -a

# 4. Corrupted image
docker-compose build --no-cache
```

### AWS SES not sending emails

```bash
# Check credentials in .env.local
cat .env.local

# Verify SES verified identity
# AWS Console → SES → Verified identities

# Check sandbox status
# If in Sandbox: can only send to verified identities

# View CloudWatch logs
# AWS Console → CloudWatch → Logs
# Search for SES errors

# Test credentials manually
node -e "
const AWS = require('aws-sdk');
const ses = new AWS.SES({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
ses.listVerifiedEmailAddresses({}, (err, data) => {
  if (err) console.log('Error:', err);
  else console.log('Verified emails:', data.VerifiedEmailAddresses);
});
"
```

### High Memory Usage

```bash
# Limit container memory
docker run -m 512m -p 3000:3000 hillton-app:latest

# Add to docker-compose.yml:
services:
  app:
    deploy:
      resources:
        limits:
          memory: 512M
        reservations:
          memory: 256M
```

### Slow Page Loads

```bash
# Analyze performance
docker exec hillton-app npm run build

# Check Next.js cache
rm -rf .next/
docker-compose build --no-cache

# Monitor resources
docker stats --no-stream
```

### 502 Bad Gateway (Nginx)

```bash
# Check if app is running
docker ps

# Check nginx config
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx

# Check logs
sudo tail -f /var/log/nginx/error.log
```

---

## Monitoring & Maintenance

### Daily Checks

```bash
# Container health
docker ps

# Log errors
docker-compose logs --since 24h | grep -i error

# Email delivery
# AWS SES Console → Send Statistics
```

### Weekly Maintenance

```bash
# Update dependencies
docker-compose build --no-cache

# Prune unused Docker data
docker system prune

# Check disk usage
df -h
du -sh .next/
```

### Monthly Tasks

- [ ] Review AWS costs (CloudWatch, SES)
- [ ] Update SSL certificates (auto-renewal active)
- [ ] Backup database (if using)
- [ ] Review security logs
- [ ] Test disaster recovery

---

## Performance Tips

### Optimize Images

- AVIF format used (already done ✅)
- Images in `/public/new/` already optimized
- Keep image size < 100KB

### Enable Caching

- Next.js handles static optimization
- Nginx caches static assets (20 minutes)
- Browser caches assets (1 year for hashed files)

### Database Optimization (if added)

- Add indexes on frequently queried fields
- Use connection pooling (PgBouncer)
- Regular VACUUM on PostgreSQL

### Cost Optimization

- t3.small EC2 instance (~$8/month)
- Consolidated SES sending (~$0.10/1000 emails)
- Use S3 + CloudFront for images (if high traffic)

---

## Security Checklist

- [ ] .env.local NOT committed to Git
- [ ] Secrets in AWS Secrets Manager or similar
- [ ] SSL/TLS enabled (Let's Encrypt automatic)
- [ ] Firewall rules configured (ports 22, 80, 443 only)
- [ ] Regular security updates
- [ ] Monitor AWS CloudTrail for suspicious activity
- [ ] Rate limiting on API endpoints
- [ ] CORS properly configured

---

## Scaling for Production

### Horizontal Scaling (Multiple Instances)

```yaml
# docker-compose.yml with load balancing
version: "3.9"
services:
  app1:
    build: .
    container_name: hillton-app-1
    ports:
      - "3001:3000"

  app2:
    build: .
    container_name: hillton-app-2
    ports:
      - "3002:3000"

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx-lb.conf:/etc/nginx/nginx.conf
    depends_on:
      - app1
      - app2
```

### Vertical Scaling (Bigger Instance)

```bash
# EC2: Switch from t3.small to t3.medium
# Container: Increase memory limit
# Database: Larger RDS instance
```

### Database Considerations

- Use Amazon RDS for PostgreSQL/MySQL
- Enable automated backups (7-35 days)
- Use read replicas for scaling reads
- Enable Multi-AZ for HA

---

**Last Updated**: 2026-07-13
**Next.js Version**: 14.2.0
**Node Version**: 20 (Alpine)
