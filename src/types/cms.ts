export interface SiteProfile {
  name: string;
  role: string;
  phoneLabel: string;
  whatsappUrl: string;
  email: string;
  linkedinUrl: string;
  heroImage: string;
  aboutImage: string;
  resumePdf: string;
}

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  projectUrl: string;
  githubUrl: string;
  order: number;
}

export interface Certificate {
  id: string;
  image: string;
  title: string;
  description: string;
  certificateUrl: string;
  order: number;
}

export interface PortfolioContentData {
  profile: SiteProfile;
  projects: Project[];
  certificates: Certificate[];
}
