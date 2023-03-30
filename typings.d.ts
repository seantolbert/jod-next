type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface GalleryImage extends Base {
  title: string;
  name: string;
  image: Image;
  link: string;
  caption: string;
  attribute: string;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

interface Project extends Base {
  title: string;
  description: string;
  categories: Category[];
}

interface SearchResult {
  title: string;
  _id: string;
  image?: Image;
  description: string;
}

interface SearchResults {
  results: SearchResult[];
}

interface SearchOptions {
  limit?: number;
  offset?: number;
}

interface UseSanitySearchResult {
  results: SearchResult[];
  isLoading: boolean;
  error?: Error;
}

interface UseSanitySearch {
  (query: string, options?: SearchOptions): UseSanitySearchResult;
}
