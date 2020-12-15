export interface Post {
  id: number | null;
  content: string;
  subcontent: string;
  title: string;
  excerpt: string;
  subittle: string;
  slug: string;
  imageID: number;
  galleryID: number;
  locationID: number;
}

export interface Candidate {
  id: number | null;
  name: string;
  status: string;
  partID: number;
  votes: number;
  avatarID: number;
  galleryID: number;
  description: string;
}

export interface Tag {
  id: number | null,
  name: string,
  type: string,
  ownerID: number;
}
