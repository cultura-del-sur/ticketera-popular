export interface I_EventImage {
  id: number
  image: string
}

export interface I_EventVenue {
  id: number
  name: string
  location: {
    latitude: number
    longitude: number
  }
}

export interface I_EventTicket {
  type_slug: string
  type_label: string
  price: string
  available_tickets: number
}

export interface I_Event {
  id: number
  name: string
  description: string
  datetime: string
  venue: I_EventVenue
  featured_image: string | null
  images: Array<I_EventImage>
  tickets: Array<I_EventTicket>
  tags: Array<string>
}
