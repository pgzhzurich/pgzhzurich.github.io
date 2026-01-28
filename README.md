# Paragliding Club Zürich - Jekyll Website

PGZH website using Jekyll and Bootstrap 5 with responsive design and SEO optimization.

## Project Structure

Relevant paths to create new posts:

```
website/
├── _data
│   ├── img/
├── _posts/
```

## Installation & Usage

### 1. Install Dependencies

```bash
# Install Dependencies on Ubuntu/Debian (if not already installed)
sudo apt-get install ruby-full libvips
echo 'export PATH=$HOME/.local/share/gem/ruby/3.1.0/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Install Bundler
gem install --user-install bundler

# Install Gems
bundle config set --local path 'vendor/bundle'
bundle install

# Install Node dependencies
npm install
```

### 2. Development

```bash
npm run dev
```

Visit `http://localhost:4000`

### 3. Production Build

```bash
npm run build
```

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://pgzh.ch/sitemap.xml
```

## Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create GitHub Repository:**

```bash
git init
git add .
git commit -m "Initial commit - PGZH Jekyll website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pgzh-website.git
git push -u origin main
```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Save

3. **Custom Domain (optional):**
   - Add CNAME DNS record to GitHub Pages

     ```
     Type: CNAME
     Name: www
     Value: YOUR_USERNAME.github.io
     ```

### Option 2: Traditional Hosting

```bash
# Build the site
npm run build

# Upload _site folder contents to your web host
```
