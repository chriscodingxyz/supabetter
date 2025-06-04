# 🚀 Supabetter - Next.js Starter Template

Production-ready Next.js starter with authentication, database, and beautiful UI components. Everything you need to ship fast.

## ✨ Features

- 🔐 **Authentication** - Better-auth with email/password and social providers
- 🗄️ **Database** - Drizzle ORM with PostgreSQL (Supabase)
- 🎨 **UI Components** - Shadcn/ui pre-configured with beautiful components
- 🌓 **Dark Mode** - Theme switching with next-themes
- 📱 **Responsive** - Mobile-first design approach
- ⚡ **Fast** - Optimized for performance with Next.js 15 + Turbopack

## 🛠 Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **Authentication**: Better-auth
- **Database**: PostgreSQL (Supabase) + Drizzle ORM
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (`npm install -g pnpm`)
- Supabase account for database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chriscodingxyz/supabetter.git
cd supabetter
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp envExample.txt .env
```

## ⚠️ Important: Supabase Configuration

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. **Important**: Save your database password - you'll need it for the DATABASE_URL

### Step 2: Get Your Environment Variables

1. In Supabase Dashboard > Settings > API:
   - Copy the **Project URL** (this is your `SUPABASE_URL`)
   - Copy the **service_role** key (this is your `SUPABASE_SERVICE_ROLE_KEY`)

2. Get your DATABASE_URL:
   - Click **'Connect'** button at the top
   - Go to **'ORMs'** tab
   - Select **'Drizzle'**
   - Copy the `DATABASE_URL`
   - Replace `[YOUR-PASSWORD]` with your password from Step 1

### Step 3: Update Your .env File

```env
# Authentication
BETTER_AUTH_SECRET=your_secret_here_use_openssl_rand_base64_32
BETTER_AUTH_URL=http://localhost:3000

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Database
DATABASE_URL=postgresql://postgres.your-project:[YOUR-PASSWORD]@aws-0-region.pooler.supabase.com:6543/postgres?sslmode=require
```

**⚠️ Security Notes:**
- Do NOT confuse `SUPABASE_URL` with `DATABASE_URL` - they are different!
- Never commit `.env` file (it's in .gitignore)
- The service_role key has full database access - keep it secure

### Step 4: Push Database Schema

```bash
# Generate migration files
pnpm drizzle-kit generate

# Push schema to Supabase
pnpm drizzle-kit push
```

### Step 5: Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app running with Turbopack!

## 📁 Project Structure

```
supabetter/
├── app/              # Next.js 15 app directory
│   ├── (auth)/      # Authentication pages
│   └── (dashboard)/ # Protected dashboard pages
├── components/      # React components
├── db/             # Database configuration
│   ├── schemas/    # Drizzle schemas
│   └── supabase/   # Supabase client
├── lib/            # Utility functions
│   └── auth.ts     # Auth configuration
└── actions/        # Server actions
```

## 🔧 Additional Configuration

### Authentication Setup

Better-auth is pre-configured with:
- Email/password authentication
- Social providers (optional):
  - Google OAuth: Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
  - GitHub OAuth: Add `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`

### Email Setup (Optional)

For email features (password reset, etc.), add Resend:
```env
RESEND_API_KEY=your_resend_api_key
```

## 📝 Development Commands

```bash
# Run with Turbopack (fast refresh)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Database commands
pnpm drizzle-kit generate  # Generate migrations
pnpm drizzle-kit push      # Push to database
pnpm drizzle-kit studio    # Open Drizzle Studio
```

## 🚀 Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/chriscodingxyz/supabetter)

Remember to add all environment variables in Vercel dashboard!

### Other Platforms

This template works with any platform that supports Next.js:
- Netlify
- Railway
- Render
- Self-hosted

## 📚 Learn More

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Better-auth Documentation](https://better-auth.com)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [Supabase Documentation](https://supabase.com/docs)

## 📄 License

MIT License - feel free to use this for your projects!

---

Built with ❤️ using Next.js 15 and modern web technologies
