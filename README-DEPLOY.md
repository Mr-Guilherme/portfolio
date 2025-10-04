# Deploy Configuration for GitHub Pages

## Overview
This project is configured for automatic deployment to GitHub Pages using GitHub Actions with a custom domain `guilhermerods.dev`. The CI/CD pipeline uses **pnpm** for faster and more efficient package management.

## Files Created

### 1. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Automated CI/CD pipeline using **pnpm**
- Builds the project on every push to main branch
- Runs security audits and linting
- Deploys to GitHub Pages automatically
- Includes manual trigger option (`workflow_dispatch`)

### 2. CNAME Configuration (`public/CNAME`)
- Contains the custom domain: `guilhermerods.dev`
- Automatically copied to `dist/` during build process

### 3. Dependabot Configuration (`.github/dependabot.yml`)
- Automatic dependency updates
- Weekly schedule for npm packages and GitHub Actions
- Security-focused dependency management
- Ignores major version updates for stability

## Setup Instructions

### 1. Repository Settings
1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The custom domain will be automatically configured via CNAME file

### 2. Domain Configuration
1. In your DNS provider, create a CNAME record:
   - Name: `www` (or `@` for apex domain)
   - Value: `yourusername.github.io`
2. Add A records for apex domain (if using):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

### 3. HTTPS Configuration
- GitHub Pages automatically provides HTTPS for custom domains
- SSL certificate is managed by GitHub
- Force HTTPS option should be enabled in repository settings

## Security Features

### Workflow Security
- Uses **pnpm** with `--frozen-lockfile` for reproducible builds
- Uses `--ignore-scripts` for secure dependency installation
- Runs `pnpm audit` to check for vulnerabilities
- Minimal permissions with `id-token: write` for OIDC
- Fetch depth limited for security

### Build Validation
- Verifies build output exists
- Checks for required files (index.html, CNAME)
- Validates directory structure
- Environment variables properly set

## Deployment Process

1. **Trigger**: Push to `main` branch or manual trigger
2. **Build**: 
   - Setup Node.js 22 and pnpm 8
   - Install dependencies securely with pnpm
   - Run linter for code quality
   - Execute security audit
   - Build production assets
3. **Validate**: 
   - Check build output
   - Verify CNAME configuration
   - List generated files
4. **Deploy**: 
   - Upload artifacts to GitHub Pages
   - Deploy to custom domain with HTTPS

## pnpm Benefits

- **Faster installations**: Shared dependency storage
- **Disk space efficient**: Symlinks to shared store
- **Strict dependency resolution**: Prevents phantom dependencies
- **Better security**: More predictable dependency tree

## Monitoring

- Check GitHub Actions tab for deployment status
- Monitor Dependabot for security updates
- Review build logs for any issues

## Troubleshooting

### Common Issues
1. **Build fails**: Check if pnpm-lock.yaml is committed
2. **CNAME not working**: Verify DNS configuration
3. **HTTPS issues**: Ensure domain is properly verified in GitHub settings

### Required Dependencies
- `terser`: Added for production builds with minification
- All dev dependencies properly configured in package.json
- pnpm-lock.yaml must be committed to repository