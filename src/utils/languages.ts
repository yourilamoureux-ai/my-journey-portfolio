export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  html: { name: "HTML 5", iconName: "html" },
  css: { name: "CSS", iconName: "css" },
  javascript: { name: "JavaScript", iconName: "javascript" },
  ts: { name: "TypeScript", iconName: "typescript" },
  react: { name: "React", iconName: "react" }, // Added
  astro: { name: "Astro", iconName: "astro" },
  vite: { name: "Vite", iconName: "vite" }, // Added
  tailwind: { name: "Tailwind CSS", iconName: "tailwind" }, // Added
  git: { name: "Git", iconName: "git" },
  npm: { name: "NPM", iconName: "npm" }, // Added
  firebase: { name: "Firebase", iconName: "firebase" },
  canva: { name: "Canva", iconName: "canva" },
  genai: { name: "Generative AI", iconName: "genai" },
  gworkspace: { name: "Google Workspace", iconName: "gworkspace" },
  vercel: { name: "Vercel", iconName: "vercel" },
  netlify: { name: "Netlify", iconName: "netlify" },
  markdown: { name: "Markdown", iconName: "markdown" },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 