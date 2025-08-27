export const PROCESSING_MESSAGES = [
    "Polishing pixels...",
    "Aligning elements...",
    "Tweaking animations...",
    "Optimizing performance...",
    "Adding finishing touches..."
];

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'data-cleaning',
    title: 'Data Cleaning in PostgreSQL',
    description: 'Using PostgreSQL, I cleaned a housing dataset by populating missing addresses, splitting address columns, and removing duplicates with a CTE.',
    imageUrl: '/images/project1.2.png',
    tags: ['PostgreSQL', 'Data Cleaning'],
    githubUrl: 'https://github.com/Purvrajdodiya/Data-cleaning-in-PostgreSQL-'
  },
  // Add other projects following the same structure
];
