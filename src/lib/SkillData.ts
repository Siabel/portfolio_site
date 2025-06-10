export interface SkillItem {
  name: string
  color: string
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export const skillData: SkillCategory[] = [
  {
    category: 'Language',
    items: [
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Python', color: '#3572A5' },
      { name: 'C++', color: '#00599C' },
      { name: 'HTML', color: '#E34F26' },
      { name: 'CSS / SCSS', color: '#2965F1' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#000000' },
      { name: 'NextUI (HeroUI)', color: '#8B5CF6' },
      { name: 'Redux', color: '#764ABC' },
      { name: 'Tailwind CSS', color: '#38BDF8' },
      { name: 'Vue.js', color: '#42B883' },
    ],
  },
  {
    category: 'Backend',
    items: [{ name: 'Django', color: '#092E20' }],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', color: '#F05032' },
      { name: 'Jira', color: '#0052CC' },
      { name: 'Notion', color: '#000000' },
      { name: 'Mattermost', color: '#1362A3' },
      { name: 'Figma', color: '#F24E1E' },
    ],
  },
  {
    category: 'Etc',
    items: [
      { name: 'Unity', color: '#000000' },
      { name: 'TurboPack', color: '#FF6D00' },
    ],
  },
]