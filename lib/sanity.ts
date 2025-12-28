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
    newsItems[] {
      title,
      date,
      excerpt,
      content,
      image,
      category
    } | order(date desc),
    weeklyProgram[] | order(datetime asc) {
      datetime,
      recurring,
      massType,
      language,
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
    ageGroupsTitle,
    ageGroupsDescription,
    ageGroups[] {
      name,
      ageRange,
      description
    },
    boardTitle,
    boardDescription,
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

  // Get Besøgsgruppen page content (there should only be one)
  besoesgruppenPage: `*[_type == "besoesgruppenPage"] [0] {
    _id,
    title,
    subtitle,
    heroImage,
    description,
    aboutTitle,
    aboutText,
    objectives[] {
      text
    },
    contactEmail,
    contactPhone,
    contactPerson
  }`,

  // Get 1. Kommunikanter page content (there should only be one)
  kommunikanterPage: `*[_type == "kommunikanterPage"] [0] {
    _id,
    title,
    subtitle,
    heroImage,
    description,
    aboutTitle,
    aboutText,
    requirementsTitle,
    requirements,
    contactTitle,
    contactEmail,
    contactPhone,
    contactPerson,
    downloadTitle,
    downloads[] {
      name,
      url,
      description
    }
  }`,

  // Get Firmander page content (there should only be one)
  firmanderPage: `*[_type == "firmanderPage"] [0] {
    _id,
    title,
    subtitle,
    heroImage,
    description,
    aboutTitle,
    aboutText,
    requirementsTitle,
    requirements,
    contactTitle,
    contactEmail,
    contactPhone,
    contactPerson,
    downloadTitle,
    downloads[] {
      name,
      url,
      description
    }
  }`,

  // Get Ministranter page content (there should only be one)
  ministranterPage: `*[_type == "ministranterPage"] [0] {
    _id,
    title,
    heroImage,
    description,
    contactTitle,
    contact1 {
      sectionTitle,
      email,
      phone,
      person
    },
    contact2 {
      sectionTitle,
      email,
      phone,
      person
    }
  }`,

  // Get all news posts, ordered by date (newest first)
  newsPosts: `*[_type == "newsPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    featuredImage,
    featured
  }`,

  // Get a single news post by slug
  newsPostBySlug: (slug: string) => `*[_type == "newsPost" && slug.current == "${slug}"] [0] {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    featuredImage,
    content,
    featured
  }`,

  // Get featured news posts (for home page)
  featuredNewsPosts: `*[_type == "newsPost" && featured == true] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    featuredImage
  }`,

  // Get weekly program (for footer on all pages)
  weeklyProgram: `*[_type == "homePage"] [0] {
    weeklyProgram[] | order(datetime asc) {
      datetime,
      recurring,
      massType,
      language,
      description,
      location
    }
  }.weeklyProgram`,
}
