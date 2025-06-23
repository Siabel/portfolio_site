export interface SkillItem {
  name: string
  color: string
  description: string
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export const skillData: SkillCategory[] = [
  {
    category: 'Language',
    items: [
      {
        name: 'TypeScript',
        color: '#3178C6',
        description: 'Monee, Algonion에서 타입 안정성과 컴포넌트 기반 UI 설계에 사용',
      },
      {
        name: 'JavaScript',
        color: '#F7DF1E',
        description: 'Socrates와 개인 웹 컴포넌트 제작 시 활용',
      },
      {
        name: 'Python',
        color: '#3572A5',
        description: 'Django 기반의 Socrates에서 서버사이드 API 개발에 활용',
      },
      {
        name: 'C++',
        color: '#00599C',
        description: '대학 과제 및 알고리즘 문제 풀이에 활용',
      },
      {
        name: 'HTML',
        color: '#E34F26',
        description: '모든 웹 프로젝트에서 구조적 마크업 구현에 사용',
      },
      {
        name: 'CSS / SCSS',
        color: '#2965F1',
        description: 'Algonion에서 SCSS 활용한 스타일링, Monee에서 Tailwind와 병행 사용',
      },
    ],
  },
  {
    category: 'Frontend',
    items: [
      {
        name: 'React',
        color: '#61DAFB',
        description: 'Monee, Algonion에서 SPA 기반 컴포넌트 및 상태관리 구현',
      },
      {
        name: 'Next.js',
        color: '#000000',
        description: '포트폴리오 사이트, Monee에서 SSR 기반 페이지 구성에 사용',
      },
      {
        name: 'NextUI (HeroUI)',
        color: '#8B5CF6',
        description: '포트폴리오 사이트의 버튼, Card 컴포넌트에 적용',
      },
      {
        name: 'Redux',
        color: '#764ABC',
        description: 'Monee에서 글로벌 상태(거래 내역, 필터) 관리에 사용 \n컴포넌트 기반 SPA 개발\nRedux, Zustand로 상태관리 경험',
      },
      {
        name: 'Tailwind CSS',
        color: '#38BDF8',
        description: '포트폴리오 및 Monee UI 설계 시 utility-first 방식으로 구성',
      },
      {
        name: 'Vue.js',
        color: '#42B883',
        description: 'Socrates에서 Django 템플릿과 통합하여 필터링 UI 구성',
      },
    ],
  },
  {
    category: 'Backend',
    items: [
      {
        name: 'Django',
        color: '#092E20',
        description: 'Socrates에서 API 설계, DB 모델링, 추천 알고리즘 처리 구현',
      },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      {
        name: 'Git',
        color: '#F05032',
        description: 'GitHub flow 기반의 버전 관리 및 팀 협업에 사용',
      },
      {
        name: 'Jira',
        color: '#0052CC',
        description: 'Monee 프로젝트 내 역할 분담과 일정 관리',
      },
      {
        name: 'Notion',
        color: '#000000',
        description: '요구사항 정리 및 프로젝트 회고 문서화에 사용',
      },
      {
        name: 'Mattermost',
        color: '#1362A3',
        description: '팀 간 커뮤니케이션 및 회의 기록에 사용',
      },
      {
        name: 'Figma',
        color: '#F24E1E',
        description: '포트폴리오 및 Monee UI 시안 제작과 디자인 협업',
      },
    ],
  },
  {
    category: 'Etc',
    items: [
      {
        name: 'Unity',
        color: '#000000',
        description: 'Four Knights RPG 게임 개발 시 캐릭터, 전투, 장비 시스템 구성',
      },
      {
        name: 'TurboPack',
        color: '#FF6D00',
        description: 'Next.js 개발 속도 향상을 위한 빌드 최적화 도구 사용 경험',
      },
    ],
  },
]
