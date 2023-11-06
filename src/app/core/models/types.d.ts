export type MetaDetails = {
  title: string;
  description: string;
  url: string;
  type: string;
  image: string;
};

export type SocialLabel = {
  name: string;
  iconClass: string;
  redirectUrl?: string;
}

export type Skill = {
  name: string;
  iconClass: string;
  redirectUrl?: string;
}

export type Project = {
  id: number;
  title: string;
  description: string;
  demoLink?: string;
  repoLink?: string;
}
