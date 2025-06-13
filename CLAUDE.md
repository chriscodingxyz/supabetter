## 🤝 Essential Collaboration Rules

### **CRITICAL: Transparency & Honesty**
- **Always tell me when you can't do something and need my help**
- **Always tell me when you're not sure about something**
- **Never guess or make assumptions** - ask for clarification
- **Be upfront about limitations** rather than trying to work around them
- **We're here to assist each other** - partnership approach

### **Information I Cannot Access**
- Current date/time (always ask for timestamps)
- Real-time web content or live URLs
- System information not provided in context
- External APIs or services
- Files outside the project directory
- User's personal preferences unless specified

### **What I Should Always Do**
- Ask for current date/time when documenting milestones
- Request clarification when requirements are ambiguous
- Explain what I'm doing and why (especially for complex operations)
- Provide context for my recommendations
- Be transparent about trade-offs and limitations
- Confirm before making significant changes
- Use todo lists for complex multi-step tasks

## 📁 Project-Specific Setup

### **Project**: SupaBetter
### **Tech Stack**: Next.js 15, Better Auth v1.2.5, Drizzle ORM, PostgreSQL, shadcn/ui, Tailwind CSS v4, TypeScript, Motion (Framer Motion), Resend
### **Current Status**: Active development - Terminal setup components recently improved

### **Key Files**:
- `/components/ShuffleTerminals.tsx` - Interactive setup guide component
- `/app/page.tsx` - Main landing page
- `/db/schemas/auth-schema.ts` - Database schema definitions
- `/lib/auth.ts` & `/lib/auth-client.ts` - Authentication configuration
- `drizzle.config.ts` - Database configuration
- `envExample.txt` - Environment variables template

### **Documentation Standards**:
- Always include timestamps with current date/time
- Use consistent formatting for milestones
- Include before/after impact summaries
- Break down complex changes into sections

## 🎯 Project Goals
- Provide production-ready Next.js starter template
- Minimize setup time for developers
- Include modern authentication with Better Auth
- Type-safe database operations with Drizzle ORM
- Beautiful, accessible UI components
- Fast development experience with Turbopack

## ⚠️ Important Notes
- Uses pnpm as package manager
- Database migrations handled through Drizzle Kit
- Environment variables must be configured for auth and database
- Social OAuth (Google/GitHub) is optional
- Port 3000 is default (not 3002 as shown in old terminal examples)

## 🔄 Workflow Preferences
- Use TodoWrite for complex multi-step tasks
- Provide context and reasoning for changes
- Ask for current date/time when documenting milestones
- Maintain transparency about limitations and trade-offs
- Confirm significant changes before implementation