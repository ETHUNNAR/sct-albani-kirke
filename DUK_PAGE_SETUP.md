# Sct. Albani DUK Page Setup

## ✅ What's Been Created

### 1. Navigation Dropdown
- **Header component** now has a dropdown menu on "Aktiviteter"
- Hover over "Aktiviteter" to see "Sct. Albani DUK" option
- Mobile-friendly with collapsible menu

### 2. New DUK Page
- **Route**: `/aktiviteter/duk`
- **URL**: http://localhost:3000/aktiviteter/duk
- Styled to match your homepage design with the church's color scheme

### 3. Sanity CMS Schema
- **New Content Type**: "DUK Side" in Sanity Studio
- Allows you to manage all DUK page content without coding

---

## 🚀 How to Use

### Step 1: Start Your Servers

```bash
# Terminal 1 - Start Next.js
npm run dev

# Terminal 2 - Start Sanity Studio
npm run sanity
```

### Step 2: Add DUK Content in Sanity

1. Go to http://localhost:3333
2. Click **"DUK Side"** in the sidebar
3. Click **"Create new"**
4. Fill in the fields:

#### Available Fields:

**Hero Section:**
- **Titel**: "Sct. Albani DUK" (default)
- **Undertitel**: "Danmarks Unge Katolikker"
- **Hero Billede**: Upload an image for the top banner

**Main Content:**
- **Beskrivelse**: Rich text description (supports formatting)
- **Kontingent**: e.g., "100 kr. pr. år"
- **Tilmeldings URL**: e.g., "https://www.duk.dk"

**Aldersgrupper (Age Groups):**
Click "Add item" to add each group:
- **Gruppe Navn**: e.g., "Ministranter"
- **Aldersgruppe**: e.g., "1. kommunion - 18 år"
- **Beskrivelse**: Short description

**Bestyrelsesmedlemmer (Board Members):**
Click "Add item" for each member:
- **Navn**: Full name
- **Rolle**: e.g., "Formand", "Næstformand", "Kasserer"
- **Billede**: Upload photo (optional)
- **Email**: Contact email (optional)

**Board Photo:**
- **Bestyrelsesbillede**: Upload a group photo of the board

**Social Media:**
- **Facebook**: Full URL (e.g., https://www.facebook.com/sctalbaniduk)
- **Instagram**: Full URL (e.g., https://www.instagram.com/sctalbaniduk)

**Contact:**
- **Kontakt Email**: e.g., "duk@sct-albani.dk"
- **Kontakt Telefon**: e.g., "2896 5517"

5. Click **"Publish"** when done

### Step 3: View the Page

1. Go to http://localhost:3000
2. Hover over **"Aktiviteter"** in the navigation
3. Click **"Sct. Albani DUK"**
4. Your content will appear (updates every 60 seconds)

---

## 📐 Page Layout

The DUK page includes these sections:

1. **Hero Section** - Large banner with title and subtitle
2. **Main Description** - Rich text content about DUK
3. **Membership Info** - Fee and registration link in a highlighted box
4. **Age Groups** - Cards showing different groups
5. **Board Members** - Grid of board members with photos
6. **Contact Section** - Email, phone, and social media links

All sections match your homepage style with:
- Navy blue (`#1e3a8a`) for headings
- Gold (`#c5a059`) for accents
- Clean, professional layout
- Responsive design (works on mobile)

---

## 🎨 Design Elements

- **Colors**: Matches homepage (navy, gold, cream)
- **Typography**: Serif for headings, clean sans-serif for body
- **Hero Image**: Full-width with gradient overlay
- **Cards**: Rounded corners with hover effects
- **Buttons**: Gold accent with hover animations
- **Icons**: Social media icons (Facebook, Instagram)

---

## 📝 Adding More Dropdown Items

To add more items under "Aktiviteter":

1. Open `components/Header.tsx`
2. Find the `dropdown` array (line 27)
3. Add more items:

```typescript
dropdown: [
  { name: 'Sct. Albani DUK', href: '/aktiviteter/duk' },
  { name: 'Kor', href: '/aktiviteter/kor' },  // Add this
  { name: 'Bibelstudie', href: '/aktiviteter/bibelstudie' },  // Add this
]
```

4. Create corresponding pages in `app/aktiviteter/[name]/page.tsx`

---

## 🔄 Content Updates

- Content updates automatically every 60 seconds
- Make changes in Sanity Studio
- Click "Publish"
- Wait up to 60 seconds to see changes on the website
- Or restart the Next.js dev server for instant updates

---

## 📦 Files Created

- `app/aktiviteter/duk/page.tsx` - The DUK page
- `sanity/schemaTypes/dukPage.ts` - Sanity schema
- `components/Header.tsx` - Updated with dropdown
- `lib/sanity.ts` - Added dukPage query

---

## ⚡ Quick Tips

1. **No content in Sanity?** - Page shows fallback data automatically
2. **Images not loading?** - Make sure images are published in Sanity
3. **Dropdown not working?** - Clear browser cache and refresh
4. **Want to add more sections?** - Edit `app/aktiviteter/duk/page.tsx`

---

## 🎯 Next Steps

You can now:
- ✅ Add DUK content in Sanity Studio
- ✅ Upload photos of board members
- ✅ Update contact information
- ✅ Add more activities to the dropdown
- ✅ Create similar pages for other activities

All without touching code - just use Sanity Studio! 🎉
