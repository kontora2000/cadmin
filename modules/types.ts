export interface Post {
  id: number | null;
  content: string;
  subcontent: string;
  title: string;
  excerpt: string;
  subtitle: string;
  slug: string;
  imageID: number | null;
  galleryID: number | null;
  locationID: number | null;
}

export interface Candidate {
  id: number | null;
  name: string;
  status: string;
  partID: number | null;
  votes: number | null;
  avatarID: number | null;
  galleryID: number | null;
  description: string;
  tagID: number | null;
}

export interface Tag {
  id: number | null,
  name: string,
}

export interface PostTag {
  id: number;
  postID: number;
}
