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
    purpose,
    overview,
    bishopNote,
    groups[] {
      name,
      description
    },
    membership {
      registrationUrl,
      registrationInfo,
      fee,
      paymentMethod,
      benefits,
      details
    },
    financialSupport {
      bankAccount,
      reference
    },
    board {
      description,
      photo,
      members[] {
        name,
        role,
        phone,
        email
      }
    },
    socialMedia {
      facebook,
      instagram
    }
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
      person,
      fysiskMoede
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

  // Get a single news post by slug (use with parameters: { slug: "..." })
  newsPostBySlug: `*[_type == "newsPost" && slug.current == $slug] [0] {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    featuredImage,
    content[] {
      ...,
      _type == "pdfFile" => {
        ...,
        asset-> {
          _id,
          url,
          originalFilename,
          size
        }
      }
    },
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

  // Get Ugeseddel page content (there should only be one)
  ugeseddelPage: `*[_type == "ugeseddelPage"] [0] {
    _id,
    title,
    subtitle,
    heroImage,
    currentBulletin {
      asset-> {
        _id,
        url,
        originalFilename,
        size,
        mimeType
      }
    },
    bulletinTitle,
    publishedDate,
    description,
    contactEmail,
    contactPerson
  }`,

  // Get Familiegruppen page content (there should only be one)
  familiegruppenPage: `*[_type == "familiegruppenPage"] [0] {
    _id,
    title,
    subtitle,
    heroImage,
    description,
    featureImage,
    contactTitle,
    contactEmail,
    contactPhone,
    contactPerson
  }`,

  // Get Bibelgruppe page content (there should only be one)
  bibelgruppePage: `*[_type == "bibelgruppePage"] [0] {
    _id,
    title,
    subtitle,
    heroImage,
    description,
    featureImage,
    contactTitle,
    contactEmail,
    contactPhone,
    contactPerson
  }`,

  // Get Kirkekaffe page content (there should only be one)
  kirkekaffePage: `*[_type == "kirkekaffePage"] [0] {
    _id,
    title,
    subtitle,
    heroImage,
    featureImage,
    contactTitle,
    contactEmail,
    contactPhone,
    contactPerson
  }`,

  // Get Katolske Informationssider page content (there should only be one)
  katolskeInformationssiderPage: `*[_type == "katolskeInformationssiderPage"] [0] {
    _id,
    title,
    subtitle,
    heroImage,
    description,
    resourceLinks[] {
      title,
      url,
      description,
      image
    }
  }`,
}
