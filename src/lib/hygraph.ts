import { fallbackContent } from "../data/fallbackContent";
import type {
  Certificate,
  PortfolioContentData,
  Project,
  SiteProfile,
} from "../types/cms";

interface HygraphAsset {
  url?: string | null;
}

interface HygraphRichText {
  text?: string | null;
}

interface HygraphProfile {
  name?: string | null;
  role?: string | null;
  phoneLabel?: string | null;
  whatsappUrl?: string | null;
  email?: string | null;
  linkedinUrl?: string | null;
  heroImage?: HygraphAsset | null;
  aboutImage?: HygraphAsset | null;
  resumePdf?: HygraphAsset | null;
}

interface HygraphProject {
  id?: string | null;
  title?: string | null;
  description?: string | HygraphRichText | null;
  image?: HygraphAsset | null;
  projectUrl?: string | null;
  githubUrl?: string | null;
  order?: number | null;
}

interface HygraphCertificate {
  id?: string | null;
  title?: string | null;
  description?: string | HygraphRichText | null;
  image?: HygraphAsset | null;
  certificateUrl?: string | null;
  order?: number | null;
}

interface HygraphResponseData {
  siteProfiles?: HygraphProfile[] | null;
  projects?: HygraphProject[] | null;
  certificates?: HygraphCertificate[] | null;
}

interface GraphqlResponse {
  data?: HygraphResponseData;
  errors?: { message: string }[];
}

const richTextQuery = `
  query PortfolioContent {
    siteProfiles(first: 1) {
      name
      role
      phoneLabel
      whatsappUrl
      email
      linkedinUrl
      heroImage { url }
      aboutImage { url }
      resumePdf { url }
    }
    projects(orderBy: order_ASC) {
      id
      title
      description { text }
      image { url }
      projectUrl
      githubUrl
      order
    }
    certificates(orderBy: order_ASC) {
      id
      title
      description { text }
      image { url }
      certificateUrl
      order
    }
  }
`;

const plainTextQuery = `
  query PortfolioContent {
    siteProfiles(first: 1) {
      name
      role
      phoneLabel
      whatsappUrl
      email
      linkedinUrl
      heroImage { url }
      aboutImage { url }
      resumePdf { url }
    }
    projects(orderBy: order_ASC) {
      id
      title
      description
      image { url }
      projectUrl
      githubUrl
      order
    }
    certificates(orderBy: order_ASC) {
      id
      title
      description
      image { url }
      certificateUrl
      order
    }
  }
`;

function getText(value: string | HygraphRichText | null | undefined): string {
  if (typeof value === "string") {
    return value;
  }

  return value?.text ?? "";
}

async function requestHygraph(
  endpoint: string,
  query: string
): Promise<HygraphResponseData> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Hygraph request failed with status ${response.status}`);
  }

  const json = (await response.json()) as GraphqlResponse;

  if (json.errors?.length) {
    throw new Error(json.errors.map((error) => error.message).join(", "));
  }

  if (!json.data) {
    throw new Error("Hygraph response did not include data");
  }

  return json.data;
}

function normalizeProfile(profile?: HygraphProfile | null): SiteProfile {
  const fallback = fallbackContent.profile;

  return {
    name: profile?.name || fallback.name,
    role: profile?.role || fallback.role,
    phoneLabel: profile?.phoneLabel || fallback.phoneLabel,
    whatsappUrl: profile?.whatsappUrl || fallback.whatsappUrl,
    email: profile?.email || fallback.email,
    linkedinUrl: profile?.linkedinUrl || fallback.linkedinUrl,
    heroImage: profile?.heroImage?.url || fallback.heroImage,
    aboutImage: profile?.aboutImage?.url || fallback.aboutImage,
    resumePdf: profile?.resumePdf?.url || fallback.resumePdf,
  };
}

function normalizeProject(project: HygraphProject, index: number): Project {
  return {
    id: project.id || `project-${index}`,
    title: project.title || fallbackContent.projects[index]?.title || "",
    description:
      getText(project.description) ||
      fallbackContent.projects[index]?.description ||
      "",
    image: project.image?.url || fallbackContent.projects[index]?.image || "",
    projectUrl:
      project.projectUrl || fallbackContent.projects[index]?.projectUrl || "#",
    githubUrl:
      project.githubUrl || fallbackContent.projects[index]?.githubUrl || "#",
    order: project.order ?? index + 1,
  };
}

function normalizeCertificate(
  certificate: HygraphCertificate,
  index: number
): Certificate {
  return {
    id: certificate.id || `certificate-${index}`,
    title: certificate.title || fallbackContent.certificates[index]?.title || "",
    description:
      getText(certificate.description) ||
      fallbackContent.certificates[index]?.description ||
      "",
    image:
      certificate.image?.url ||
      fallbackContent.certificates[index]?.image ||
      "",
    certificateUrl:
      certificate.certificateUrl ||
      fallbackContent.certificates[index]?.certificateUrl ||
      "#",
    order: certificate.order ?? index + 1,
  };
}

function normalizeContent(data: HygraphResponseData): PortfolioContentData {
  const projects = data.projects?.map(normalizeProject) ?? [];
  const certificates = data.certificates?.map(normalizeCertificate) ?? [];

  return {
    profile: normalizeProfile(data.siteProfiles?.[0]),
    projects: projects.length ? projects : fallbackContent.projects,
    certificates: certificates.length
      ? certificates
      : fallbackContent.certificates,
  };
}

export async function getPortfolioContent(): Promise<PortfolioContentData> {
  const endpoint = import.meta.env.VITE_HYGRAPH_ENDPOINT;

  if (!endpoint) {
    return fallbackContent;
  }

  try {
    const data = await requestHygraph(endpoint, richTextQuery);
    return normalizeContent(data);
  } catch {
    try {
      const data = await requestHygraph(endpoint, plainTextQuery);
      return normalizeContent(data);
    } catch (error) {
      console.error("Could not load Hygraph content.", error);
      return fallbackContent;
    }
  }
}
