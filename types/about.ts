export interface IntroductionProps {
  briefing: string[];
  githubLink: string;
  linkedinLink: string;
  mailLink: string;
  title: string;
}

interface ProjectProps {
  project: {
    dateFrom: string;
    dateTo?: string;
    description: string;
    detail: string[];
    detailLink?: string;
    gitthuLink?: string;
    skill: string;
    title: string;
  }[];
}
export interface WorkExperienceProps extends ProjectProps {
  additional?: {
    label: string;
    link: string;
  };
  companyName: string;
  dateFrom: string;
  dateTo?: string;
  role: string;
}

export interface OtherExperienceProps extends ProjectProps {
  additional?: {
    label: string;
    link: string;
  };
  companyName?: string;
  dateFrom?: string;
  dateTo?: string;
  role?: string;
}

export type CertificateProps = {
  label: string;
  link: string;
};

export type SkillProps = {
  list: string[];
  title: string;
};
