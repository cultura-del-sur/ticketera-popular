export interface I_EventListItem {
  id: number;
  title: string;
  date: string;
  location: string;
  price: number;
  image: string;
  tags: string[];
}

export interface I_EventDetail extends I_EventListItem {
  description: string;
  venue: string;
}