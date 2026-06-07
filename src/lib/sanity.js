import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'bcepnvm3',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-05-27',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// Queries
export const queries = {
  plans: `*[_type == "plan"] | order(order asc) {
    _id, name, tag, price, originalPrice, days, featured, features
  }`,

  trainers: `*[_type == "trainer"] | order(order asc) {
    _id, name, role, quote, bio, photo, credentials, stats
  }`,

  faq: `*[_type == "faq"] | order(order asc) {
    _id, question, answer
  }`,

  facilities: `*[_type == "facility"] | order(order asc) {
    _id, name, description, image
  }`,

  siteSettings: `*[_type == "siteSettings"][0] {
    heroTitle, heroSubtitle, heroDescription,
    openingDate, openingBadgeText,
    phone, email, address, city, postalCode,
    instagramHandle, scheduleWeekdays, scheduleFriday
  }`,
}
