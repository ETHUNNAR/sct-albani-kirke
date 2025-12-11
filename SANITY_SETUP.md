# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for the Sct. Albani Kirke website, allowing your client to easily manage content without coding.

## What is Sanity?

Sanity is a headless CMS (Content Management System) that provides:
- **User-friendly admin interface** - Your client can edit content through a beautiful web interface
- **Real-time updates** - Changes appear on the website within 60 seconds
- **Free tier** - 3 users, unlimited documents (perfect for a church website)
- **Image management** - Easy upload and management of photos
- **Flexible content** - Manage service times, news, weekly programs, and more

## Initial Setup (One-time)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Create a Sanity Account

1. Go to [https://www.sanity.io](https://www.sanity.io)
2. Click "Get started" and sign up (free)
3. Verify your email

### Step 3: Initialize Sanity Project

Run this command in your project directory:

```bash
cd sanity
npx sanity init
```

You'll be asked several questions:
- **Login?** → Yes (it will open a browser)
- **Create new project?** → Yes
- **Project name** → "Sct. Albani Kirke" (or your preferred name)
- **Use default dataset?** → Yes (it will be called "production")
- **Project output path** → Press Enter (use current directory)
- **Select project template** → Clean project with no predefined schemas

### Step 4: Update Configuration Files

After running `sanity init`, you'll get a **Project ID**. Update these files:

1. **sanity/sanity.config.ts** - Replace `YOUR_PROJECT_ID` with your actual project ID
2. **sanity/sanity.cli.ts** - Replace `YOUR_PROJECT_ID` with your actual project ID
3. Create **.env.local** file in the root directory (copy from .env.local.example):

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### Step 5: Deploy Sanity Studio

Deploy the Sanity admin interface so your client can access it from anywhere:

```bash
cd sanity
npx sanity deploy
```

You'll be asked for a studio hostname. Choose something like: `sct-albani-kirke`

Your Sanity Studio will be available at: `https://sct-albani-kirke.sanity.studio`

## Content Types

Your Sanity CMS includes these content types:

### 1. **Messetider** (Service Times)
Manage weekly mass schedule:
- Day (Monday, Sunday, etc.)
- Time (10:00, 17:00, etc.)
- Type (Højmesse, Aftenmesse, etc.)
- Language (Dansk, Latin, Polsk, etc.)
- Order (for sorting)

### 2. **Nyheder** (News Items)
Create and manage news/events:
- Title
- Date
- Short description
- Full content (rich text)
- Image
- Category (Event, Announcement, Liturgy, Community)

### 3. **Ugens Program** (Weekly Program)
Manage weekly events schedule:
- Week number
- Year
- Multiple events with day, time, title, description

### 4. **Website Indstillinger** (Site Settings)
Control website-wide content:
- Website title and description
- Hero section text
- About Us text
- Contact information

## Running the Project

### Development Mode

Run both Next.js and Sanity Studio together:

**Terminal 1** - Next.js website:
```bash
npm run dev
```
Website will be at: http://localhost:3000

**Terminal 2** - Sanity Studio (optional, for local editing):
```bash
npm run sanity
```
Studio will be at: http://localhost:3333

### Production

```bash
npm run build
npm start
```

## Adding Initial Content

1. Go to your Sanity Studio (either `https://your-studio.sanity.studio` or `http://localhost:3333`)

2. Log in with your Sanity account

3. Add content for each type:

### Example: Adding Service Times

1. Click "Messetider" in the sidebar
2. Click "Create new"
3. Fill in:
   - Dag: "Søndag"
   - Tidspunkt: "10:00"
   - Type: "Højmesse"
   - Sprog: "Dansk"
   - Rækkefølge: 1
4. Click "Publish"
5. Repeat for all services

### Example: Adding News

1. Click "Nyheder" in the sidebar
2. Click "Create new"
3. Fill in title, date, description
4. Upload an image (drag & drop)
5. Select category
6. Click "Publish"

### Example: Site Settings

1. Click "Website Indstillinger"
2. Fill in your church's information
3. This controls the Hero section and About section text
4. Click "Publish"

## Client Instructions

Share these simple instructions with your client:

1. **Access the CMS**: Go to `https://your-studio.sanity.studio`
2. **Log in** with the credentials you provide
3. **Edit content**:
   - Click any content type in the left sidebar
   - Click an item to edit or "Create new" to add
   - Make changes
   - Click "Publish" to save
4. **Changes go live** within 60 seconds of publishing

## Managing Users

To add your client as a user:

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Click "Members" tab
4. Click "Invite members"
5. Enter their email
6. Choose role:
   - **Administrator** - Can manage content and settings
   - **Editor** - Can manage content only (recommended for clients)

## Data Fetching

The website fetches content from Sanity every 60 seconds (configurable in `app/page.tsx`):

```typescript
export const revalidate = 60; // Revalidate every 60 seconds
```

To make changes appear faster, reduce this number. To reduce API calls, increase it.

## Troubleshooting

### "Module not found" errors
Run: `npm install`

### Changes not appearing on website
- Check that you clicked "Publish" (not just save)
- Wait 60 seconds for revalidation
- Check browser console for errors

### Can't access Sanity Studio
- Verify the studio URL is correct
- Run `npm run sanity:deploy` to redeploy
- Check that you're logged in

### "Invalid project ID"
- Verify `.env.local` has correct project ID
- Restart Next.js dev server after changing `.env.local`

## Support

- **Sanity Documentation**: https://www.sanity.io/docs
- **Sanity Community**: https://www.sanity.io/exchange/community

## Cost

- **Free tier**: 3 users, unlimited documents, 10GB assets, 10GB bandwidth
- Perfect for a church website
- Paid plans start at $99/month if you need more

## Backup

Sanity automatically backs up your data. You can also export it:

```bash
cd sanity
npx sanity dataset export production backup.tar.gz
```
