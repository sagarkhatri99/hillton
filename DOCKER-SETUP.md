# Docker Setup for Hillton Project

## Project Analysis

This is a **Next.js 14 full-stack web application** for Hillton wellness/medical facility website with the following characteristics:

### Technology Stack

- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS with typography & forms plugins
- **Backend**: Next.js API routes
- **Email Service**: AWS SES (Simple Email Service)
- **Package Manager**: npm

### Key Features

- Multiple service pages (services, conditions, blog, contact)
- Contact form with AWS SES integration
- Static content pages (about, privacy, disclaimer, FAQ)
- Responsive design with Tailwind CSS
- Public image assets (AVIF format optimization)

---

## Docker Files Created

### 1. **Dockerfile** (Multi-stage build)

**Features:**

- ✅ Multi-stage build for optimized image size
- ✅ Node 20 Alpine for minimal base image (~170MB)
- ✅ Production-grade setup with non-root user (security best practice)
- ✅ Health check configured
- ✅ Proper signal handling with dumb-init
- ✅ Layer caching optimization

**Build Process:**

1. **Builder stage**: Compiles TypeScript, runs Next.js build
2. **Runtime stage**: Only includes necessary files (.next, public, node_modules)

### 2. **.dockerignore**

Excludes unnecessary files to reduce image size:

- Git files, node_modules, documentation
- Build artifacts, IDE configurations
- OS-specific files, environment files
- Python virtual environment

### 3. **docker-compose.yml**

Provides easy orchestration with:

- Container configuration
- Port mapping (3000:3000)
- Environment variable management
- Health checks
- Restart policies
- Comments for nginx reverse proxy setup

---

## Quick Start

### Building the Image

```bash
# Using docker-compose (recommended)
docker-compose build

# Or using Docker directly
docker build -t hillton-app:latest .
```

### Running the Container

#### Development

```bash
docker run -p 3000:3000 --env-file .env.local hillton-app:latest
```

#### Using docker-compose

```bash
docker-compose up -d
```

### Accessing the Application

Open your browser: `http://localhost:3000`

---

## Environment Variables

Create a `.env.local` file with required AWS credentials:

```bash
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
```

These will be passed to the container via docker-compose.

---

## Production Considerations

### Image Size Optimization

- Current base: **~450MB** (will be ~350-400MB after build)
- Strategies to reduce further:
  - Use `node:20-alpine` (already implemented)
  - Remove dev dependencies (already done)
  - Prune unused modules

### Security Hardening

✅ Non-root user (nextjs:nodejs)  
✅ Alpine Linux base (smaller attack surface)  
✅ Health checks enabled  
✅ Proper signal handling

To further enhance:

```dockerfile
# Add to Dockerfile:
RUN apk add --no-cache ca-certificates  # For SSL verification
```

### Performance Tuning

- Add memory limits: `docker run -m 512m ...`
- Add CPU limits: `docker run --cpus="1" ...`
- Use nginx reverse proxy (see commented section in docker-compose.yml)

### Deployment Checklist

- [ ] Test with `.env.local` containing production credentials
- [ ] Run health checks: `docker ps` verify healthy status
- [ ] Set restart policy: `unless-stopped` (already in docker-compose)
- [ ] Configure logging: Add to docker-compose if needed
- [ ] Set up monitoring with tools like Prometheus/Grafana
- [ ] Use container registry (Docker Hub, ECR, etc.)

---

## Monitoring

### View Logs

```bash
docker-compose logs -f app
```

### Check Container Health

```bash
docker ps  # Check STATUS column
docker inspect hillton-app --format='{{json .State.Health}}'
```

### Performance Stats

```bash
docker stats hillton-app
```

---

## Troubleshooting

### Container exits immediately

```bash
docker logs hillton-app  # Check error logs
docker-compose up  # Run without -d to see live output
```

### Port already in use

```bash
# Change port in docker-compose.yml
ports:
  - "3001:3000"  # Map to 3001 instead
```

### AWS credentials not working

- Verify `.env.local` exists in project root
- Check AWS IAM permissions for SES
- Verify region is correct

### Image build fails

```bash
docker build --no-cache -t hillton-app:latest .  # Rebuild from scratch
```

---

## Additional Notes

- **Next.js API Routes**: Contact endpoint should work seamlessly with AWS SES
- **Public Assets**: Images in `/public` are copied to container
- **Static Optimization**: Next.js handles static exports automatically
- **Type Safety**: TypeScript compilation happens during build stage

---

Generated on: 2026-07-13
