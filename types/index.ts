export type UserType = 'free' | 'premium';

export type OAuthTokenKind = 'google' | 'instagram' | 'facebook' | 'twitter';

export type CreateUser = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type OAuthToken = {
  id: string;
  kind: OAuthTokenKind;
  accessTokenExpires: string;
  refreshToken: string;
}

export type SocialUser = {
  profile: {
    name: string;
    picture: string;
  };
  tokens: OAuthToken[];
  _id: string;
  email: string;
  google: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserProfile = {
  firstName: string;
  lastName: string;
  fullName: string;
  avatar: string;
  city: string;
  profession: string;
  email: string;
  genre: string;
  site: string;
  type: UserType;
  title: string;
  description: string;
  backgroundImage: string;
  address: string;
  facebookLink: string;
  instagramLink: string;
  youtubeLink: string;
  keywords: string[];
  hyperlinks: string[];
};

export type Nullable<T> = T | null;

export type HeaderType = 'text-only' | 'color-background' | 'full-background';

export type PortalSettings = {
  header: {
    type: HeaderType;
    color?: string;
    backgroundImage?: string;
    title?: string;
    body?: string;
  };
};

export type Portal = {
  site: string;
  profile: UserProfile;
  username: string;
  cards: ContentItem[];
};

export type ContentItemType = 'Video' | 'Image' | 'Carousel';

export type EventItem = {
  title: string;
  avatar: string;
  channel: ContentChannel;
  description: string;
  type: string;
  image: string;
  location: string;
  date: any;
};

export type ContentItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: ContentItemType;
  link: string;
  firstName: string;
  lastName: string;
  avatar: string;
  site: string;
  channel: ContentChannel;
  metadata: ContentMetaData;
};

export type CarouselItem = {
  url: string;
};

export type ContentMetaData = {
  application: {
    name: string;
  };
  attachments: {
    data: ContentAttachment[];
  };
  carousel: CarouselItem[];
  thumbnails: any;
  images: any;
  videos: any;
};

export type ContentAttachment = {
  type: string;
};

export type Channel = {
  name: string;
  icon: string;
  color: string;
  value: ContentChannel;
};

export type ContentChannel =
  | 'Any'
  | 'YouTube'
  | 'Facebook'
  | 'Instagram'
  | 'Twitter';
