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
  // Get home page content (there should only be one)
  homePage: `*[_type == "homePage"] [0] {
    _id,
    heroTitle,
    heroSubtitle,
    heroImage,
    aboutTitle,
    aboutText,
    serviceTimes[] {
      day,
      time,
      type,
      language,
      order
    } | order(order asc),
    newsItems[] {
      title,
      date,
      excerpt,
      content,
      image,
      category
    } | order(date desc),
    weeklyProgram[] {
      day,
      time,
      event,
      description,
      location
    }
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
