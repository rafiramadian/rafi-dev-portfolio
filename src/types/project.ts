export interface Screenshot {
  src: string;
  title: string;
  description: string;
}

export interface TechStack {
  name: string;
  icon: string;
  description: string;
}

export interface ProjectMetrics {
  developmentDuration: string;
  teamSize: string;
  approach: string;
  modules: string;
  totalScreens: string;
  performanceImpact: string;
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
  date: string;
  status: "completed" | "in-progress" | "planned";
}

export interface Challenge {
  challenge: string;
  solution: string;
  impact: string;
  icon: string; // Changed from LucideIcon to string
}

export interface Feature {
  title: string;
  description: string;
  highlight: boolean;
}

export interface ProjectData {
  // Basic Info
  title: string;
  description: string;
  heroImage: string;
  liveUrl?: string;
  githubUrl?: string;
  isPrivate: boolean;
  detailUrl: string;

  // Content Data
  screenshots: Screenshot[];
  mobileScreenshots?: Screenshot[]; // Optional mobile screenshots section
  techStack: TechStack[];
  metrics: ProjectMetrics;
  timeline: TimelinePhase[];
  challenges: Challenge[];
  features: Feature[];

  // Meta Data
  slug: string;
  category: string;
  technologies: string[];
}
