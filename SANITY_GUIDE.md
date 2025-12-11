# Sanity CMS Guide

## How Sanity Works

```
Sanity Studio (Admin UI) → Schemas (Templates) → Frontend (Next.js Website)
```

1. **Create Schema** - Define what fields appear in Sanity Studio
2. **Add Content** - Use Sanity Studio to fill in the content
3. **Fetch Data** - Your Next.js website fetches and displays the content

---

## Step 1: Creating a New Schema (Template)

### Example: Creating a "Priest" Schema

1. Create a new file in `sanity/schemaTypes/` folder:

```typescript
// sanity/schemaTypes/priest.ts
import {defineField, defineType} from 'sanity'

export const priest = defineType({
  name: 'priest',           // Internal ID (used in code)
  title: 'Præster',         // What shows in Sanity Studio
  type: 'document',         // This is a content type
  fields: [
    defineField({
      name: 'name',
      title: 'Navn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'F.eks. "Sognepræst", "Kapellan"',
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true, // Allows image cropping
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biografi',
      type: 'text',
      rows: 5,
    }),
  ],
})
```

2. Register the schema in `sanity/schemaTypes/index.ts`:

```typescript
import {priest} from './priest'

export const schemaTypes = [
  serviceTime,
  newsItem,
  weeklyProgram,
  siteSettings,
  priest  // ← Add your new schema here
]
```

### Common Field Types:

| Type | Description | Example |
|------|-------------|---------|
| `string` | Short text | Name, Title |
| `text` | Long text (add `rows: 5`) | Bio, Description |
| `number` | Numbers | Age, Order |
| `boolean` | Checkbox | isActive, featured |
| `date` | Date picker | Birth date, Event date |
| `datetime` | Date and time | Event start time |
| `image` | Image upload | Photo, Banner |
| `array` | List of items | Events, Tags |
| `object` | Nested fields | Address (street, city, zip) |

### Validation Examples:

```typescript
validation: (Rule) => Rule.required()              // Required field
validation: (Rule) => Rule.required().min(0)       // Required number, min 0
validation: (Rule) => Rule.max(200)                // Max 200 characters
validation: (Rule) => Rule.email()                 // Must be email format
```

### Dropdown Options:

```typescript
defineField({
  name: 'category',
  title: 'Kategori',
  type: 'string',
  options: {
    list: [
      {title: 'Begivenhed', value: 'event'},
      {title: 'Nyhed', value: 'news'},
      {title: 'Annoncering', value: 'announcement'},
    ],
  },
})
```

---

## Step 2: Using the Schema in Sanity Studio

1. **Start Sanity Studio**:
   ```bash
   npm run sanity
   ```

2. **Visit**: http://localhost:3333

3. You'll see your new content type (e.g., "Præster") in the sidebar

4. **Create Content**:
   - Click on "Præster"
   - Click "Create new"
   - Fill in the fields
   - Click "Publish"

---

## Step 3: Fetching Data in Next.js

### Add a GROQ Query in `lib/sanity.ts`:

```typescript
export const queries = {
  // ... existing queries ...

  priests: `*[_type == "priest"] | order(order asc) {
    _id,
    name,
    title,
    photo,
    bio,
    email,
    phone,
    order
  }`,
}
```

### GROQ Query Examples:

| Query | Description |
|-------|-------------|
| `*[_type == "priest"]` | Get all priests |
| `\| order(order asc)` | Sort by 'order' field ascending |
| `\| order(date desc)` | Sort by 'date' field descending |
| `[0]` | Get only the first result |
| `[0...3]` | Get first 3 results |
| `[isActive == true]` | Filter where isActive is true |

### Fetch Data in `app/page.tsx`:

```typescript
import { client, queries } from '@/lib/sanity';

async function getContent() {
  try {
    const priests = await client.fetch(queries.priests);
    return { priests };
  } catch (error) {
    console.error('Error fetching content:', error);
    return { priests: [] };
  }
}

export default async function Home() {
  const { priests } = await getContent();

  return (
    <Layout>
      <PriestsSection priests={priests} />
    </Layout>
  );
}
```

---

## Step 4: Creating a Component to Display the Data

### Create `components/PriestsSection.tsx`:

```typescript
import React from 'react';
import { urlFor } from '@/lib/sanity';

interface Priest {
  _id: string;
  name: string;
  title: string;
  photo?: any;
  bio?: string;
  order: number;
}

interface PriestsSectionProps {
  priests?: Priest[];
}

export function PriestsSection({ priests = [] }: PriestsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Vores Præster
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {priests.map((priest) => (
            <div key={priest._id} className="bg-gray-100 rounded-lg p-6">
              {priest.photo && (
                <img
                  src={urlFor(priest.photo).width(400).height(400).url()}
                  alt={priest.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-2xl font-bold">{priest.name}</h3>
              <p className="text-gray-600">{priest.title}</p>
              {priest.bio && <p className="mt-4">{priest.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Using Images:

```typescript
import { urlFor } from '@/lib/sanity';

// Basic usage
<img src={urlFor(image).url()} alt="..." />

// With size
<img src={urlFor(image).width(800).height(600).url()} alt="..." />

// With cropping
<img src={urlFor(image).width(400).height(400).fit('crop').url()} alt="..." />
```

---

## Complete Workflow Example

### 1. Create Schema: `sanity/schemaTypes/event.ts`

```typescript
import {defineField, defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Begivenheder',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Dato',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Billede',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Fremhævet',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
```

### 2. Register in `sanity/schemaTypes/index.ts`

```typescript
import {event} from './event'

export const schemaTypes = [...existing, event]
```

### 3. Add Query in `lib/sanity.ts`

```typescript
export const queries = {
  // Get upcoming events
  upcomingEvents: `*[_type == "event" && date > now()] | order(date asc) {
    _id,
    title,
    date,
    description,
    image,
    featured
  }`,

  // Get featured events only
  featuredEvents: `*[_type == "event" && featured == true] | order(date asc) {
    _id,
    title,
    date,
    description,
    image
  }`,
}
```

### 4. Fetch in `app/page.tsx`

```typescript
async function getContent() {
  const events = await client.fetch(queries.upcomingEvents);
  return { events };
}

export default async function Home() {
  const { events } = await getContent();
  return <EventsSection events={events} />;
}
```

### 5. Display in Component

```typescript
export function EventsSection({ events = [] }: { events: any[] }) {
  return (
    <section>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{new Date(event.date).toLocaleDateString('da-DK')}</p>
          <p>{event.description}</p>
          {event.image && (
            <img src={urlFor(event.image).width(600).url()} alt={event.title} />
          )}
        </div>
      ))}
    </section>
  );
}
```

---

## Tips

1. **Always restart Sanity Studio** after creating new schemas:
   ```bash
   # Stop with Ctrl+C, then:
   npm run sanity
   ```

2. **Test queries in Sanity Vision**:
   - Go to http://localhost:3333
   - Click "Vision" in the bottom left
   - Test your GROQ queries there

3. **Use fallback data** in components:
   ```typescript
   const data = cmsData.length > 0 ? cmsData : fallbackData;
   ```

4. **Check data in frontend**:
   - Restart Next.js dev server after changing queries
   - Check console for errors
   - Data refreshes every 60 seconds (see `revalidate = 60`)

---

## Existing Schemas

Your project currently has these schemas:

1. **serviceTime** - Messetider (Service Times)
2. **newsItem** - Nyheder (News)
3. **weeklyProgram** - Ugens Program (Weekly Program)
4. **siteSettings** - Website Indstillinger (Site Settings)
5. **priest** - Præster (Priests) ← Just added as example

You can view them in `sanity/schemaTypes/` folder.

---

## Common Issues

### Schema not showing in Sanity Studio
- Make sure you added it to `schemaTypes` array in `index.ts`
- Restart Sanity Studio: `Ctrl+C` then `npm run sanity`

### Data not showing on website
- Check that you published the content in Sanity Studio
- Make sure you added the query to `lib/sanity.ts`
- Make sure you're fetching the query in `app/page.tsx`
- Restart Next.js: `Ctrl+C` then `npm run dev`
- Wait 60 seconds for cache to refresh

### Images not loading
- Make sure you're using `urlFor(image).url()` from `@/lib/sanity`
- Check that image field type is `image` in schema
- Check browser console for errors
