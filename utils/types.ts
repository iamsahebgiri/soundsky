export interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

export interface Icon {
  height: number | null;
  url: string;
  width: number | null;
}

export interface Category {
  href: string;
  icons: Image[];
  id: string;
  name: string;
}

export interface Playlist {
  description: string;
  id: string;
  images: Icon[];
  name: string;
  primary_color: string | null;
  external_urls: {
    spotify: string;
  };
}

export interface Track {
  href: string;
  images: Image[];
  id: string;
  name: string;
  preview_url: string;
  popularity: number;
  type: "track";
  external_urls: {
    spotify: string;
  }
}
