# Quick Start Deployment Guide

## ⚡ 5-Minute Local Setup

### 1️⃣ Setup Environment Variables (5 minutes)

```bash
# Create .env.local file in project root
# Copy from template:
cp .env.local.example .env.local

# Edit .env.local and fill in your AWS credentials:
# - AWS_REGION
# - AWS_ACCESS_KEY_ID
# - AWS_SECRET_ACCESS_KEY
# - SES_FROM_EMAIL
```

**Where to get AWS credentials:**

- AWS Console: https://console.aws.amazon.com/iam/
- Users → Create user "hillton-app"
- Attach: `AmazonSESFullAccess` policy
- Generate access key
- Copy credentials to .env.local

### 2️⃣ Build Docker Image (3-5 minutes)

```bash
# From project root
docker-compose build
```

### 3️⃣ Run Container (1 minute)

```bash
# Start the application
docker-compose up -d

# Verify it's running
docker ps

# Check logs
docker-compose logs app
```

### 4️⃣ Test Application (1 minute)

```bash
# Open browser to:
http://localhost:3000

# Navigate to /contact
# Test the contact form
# Check your email for notification
```

---

## 🚀 Production Deployment (AWS EC2)

### Prerequisites

- AWS account
- EC2 instance (Ubuntu 22.04)
- SSH key (.pem file)
- Domain name (optional)

### Step 1: Connect to EC2

```bash
# From local machine
ssh -i your-key.pem ubuntu@your-instance-ip

# Example:
# ssh -i hillton.pem ubuntu@54.123.456.789
```

### Step 2: Install Docker (2 minutes)

```bash
# Update system
sudo apt update
sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker ubuntu
exit  # Logout and login again
```

### Step 3: Clone Project

```bash
# Option A: Clone from GitHub
git clone https://github.com/your-username/hillton.git
cd hillton

# Option B: Upload files (if private repo)
# Use SCP: scp -i key.pem -r ./hillton/* ubuntu@ip:/home/ubuntu/hillton/
```

### Step 4: Create .env.local on Server

```bash
nano .env.local

# Paste your environment variables:
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=xxx...
SES_FROM_EMAIL=noreply@hillton.com
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://hillton.com

# Save: Ctrl+X → Y → Enter
```

### Step 5: Build and Run

```bash
# Build image
docker-compose build

# Run container
docker-compose up -d

# Verify
docker ps

# Check logs
docker-compose logs app
```

### Step 6: Setup Nginx Reverse Proxy

```bash
# Install Nginx
sudo apt install nginx -y

# Create config
sudo nano /etc/nginx/sites-available/hillton
```

**Paste this configuration:**

```nginx
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
    }
}
```

**Enable and start:**

```bash
sudo ln -s /etc/nginx/sites-available/hillton /etc/nginx/sites-enabled/
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### Step 7: Setup SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal (automatic)
sudo systemctl enable certbot.timer
```

### Step 8: Auto-restart on Server Reboot

```bash
# Create systemd service
sudo nano /etc/systemd/system/hillton.service
```

**Paste this:**

```ini
[Unit]
Description=Hillton Docker Application
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

**Enable service:**

```bash
sudo systemctl enable hillton.service
sudo systemctl start hillton.service
sudo systemctl status hillton.service
```

### Done! 🎉

Your application is now live at:

- HTTP: http://your-domain.com (redirects to HTTPS)
- HTTPS: https://your-domain.com

---

## 📊 Common Commands

### Monitor Application

```bash
# View logs
docker-compose logs -f

# Container status
docker ps

# Resource usage
docker stats

# Last 100 log lines
docker-compose logs --tail=100
```

### Update Application

```bash
# Pull latest code
git pull origin main

# Rebuild image
docker-compose build --no-cache

# Restart container
docker-compose up -d
```

### Stop Application

```bash
# Graceful stop
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Stop specific container
docker stop hillton-app
```

---

## 🔍 Troubleshooting

### Container won't start

```bash
# Check error logs
docker-compose logs

# Common issues:
# 1. Port 3000 in use: sudo lsof -i :3000
# 2. .env.local missing: cp .env.local.example .env.local
# 3. Build errors: docker-compose build --no-cache
```

### Email not sending

```bash
# Verify credentials
cat .env.local

# Check AWS SES status
# - Go to https://console.aws.amazon.com/ses/
# - Verify email is in "Verified identities"
# - Check if in Sandbox mode (limited sending)

# Check application logs
docker-compose logs app | grep -i email
```

### 502 Bad Gateway

```bash
# Check if app is running
docker ps

# Verify Nginx config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Check Nginx error log
sudo tail -f /var/log/nginx/error.log
```

---

## 📋 .env.local Complete Template

```env
# ============= REQUIRED =============
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIA_YOUR_KEY_HERE
AWS_SECRET_ACCESS_KEY=your-secret-key-here
SES_FROM_EMAIL=noreply@hillton.com

# ============= OPTIONAL =============
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://hillton.com
NEXT_PUBLIC_APP_NAME=Hillton Wellness
```

---

## 🔐 Security Checklist

- [ ] .env.local NOT in Git (already in .gitignore)
- [ ] AWS credentials from IAM user (not root account)
- [ ] SES email verified in AWS Console
- [ ] SSL certificate enabled (Let's Encrypt)
- [ ] Firewall allows only ports 22, 80, 443
- [ ] Regular backups enabled

---

## 📚 Detailed Guides

- **Full Deployment Guide**: See `DEPLOYMENT-GUIDE.md`
- **Docker Setup**: See `DOCKER-SETUP.md`
- **AWS Setup**: See AWS documentation or `DEPLOYMENT-GUIDE.md` → AWS Configuration

---

## 🆘 Still Need Help?

**Common Issues & Solutions:**

1. **"Permission denied" on .pem file**

   ```bash
   chmod 400 your-key.pem
   ```

2. **"Cannot connect to Docker daemon"**

   ```bash
   sudo usermod -aG docker $USER
   newgrp docker
   ```

3. **"Address already in use"**

   ```bash
   sudo lsof -i :3000
   kill -9 <PID>
   ```

4. **"AWS SES Sandbox mode"**
   - Verify all test recipients in SES Console
   - Or request production access (1-2 days)

5. **Check detailed logs:**
   ```bash
   docker-compose logs --tail=200 app
   ```

---

**Created**: 2026-07-13  
**Project**: Hillton Wellness  
**Status**: Ready for production deployment
