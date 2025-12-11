import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Helper function for generating image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const queries = {
  // Get all service times, ordered by 'order' field
  serviceTimes: `*[_type == "serviceTime"] | order(order asc) {
    _id,
    day,
    time,
    type,
    language,
    order
  }`,

  // Get all news items, newest first
  newsItems: `*[_type == "newsItem"] | order(date desc) {
    _id,
    title,
    date,
    excerpt,
    content,
    image,
    category
  }`,

  // Get the active weekly program
  activeWeeklyProgram: `*[_type == "weeklyProgram" && isActive == true] | order(year desc, week desc) [0] {
    _id,
    week,
    year,
    title,
    events[] {
      day,
      date,
      time,
      title,
      description,
      location
    }
  }`,

  // Get site settings (there should only be one)
  siteSettings: `*[_type == "siteSettings"] [0] {
    _id,
    title,
    description,
    heroTitle,
    heroSubtitle,
    heroTagline,
    aboutText,
    contactEmail,
    contactPhone,
    address
  }`,

  // Get all priests, ordered by 'order' field
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

  // Get DUK page content (there should only be one)
  dukPage: `*[_type == "dukPage"] [0] {
    _id,
    title,
    subtitle,
    heroImage,
    description,
    membershipFee,
    registrationUrl,
    ageGroups[] {
      name,
      ageRange,
      description
    },
    boardMembers[] {
      name,
      role,
      photo,
      email
    },
    boardPhoto,
    socialMedia,
    contactEmail,
    contactPhone
  }`,
}
