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
        description:
          'Monee / Algonion에서 타입 안정성과 컴포넌트 기반 UI 설계에 사용\n' +
          'Redux, Chart 등 다양한 도메인 상태를 안정적으로 구성\n'
      },
      {
        name: 'JavaScript',
        color: '#F7DF1E',
        description:
          'Socrates에서 비동기 처리와 UI 렌더링 구현\n' +
          '개인 웹 컴포넌트 제작에 사용\n'
      },
      {
        name: 'Python',
        color: '#3572A5',
        description:
          'Django 기반 Socrates에서 서버사이드 API 개발\n' +
          'TMDB 연동 및 DB 저장 처리 로직 구현\n'
      },
      {
        name: 'C++',
        color: '#00599C',
        description:
          '대학 과제 및 알고리즘 문제 풀이에 활용\n' +
          '기본 자료구조 및 STL 활용 경험\n'
      },
      {
        name: 'HTML',
        color: '#E34F26',
        description:
          '모든 웹 프로젝트에서 시맨틱 마크업 구성에 사용\n' +
          '접근성과 구조적 레이아웃 구현에 기여\n'
      },
      {
        name: 'CSS / SCSS',
        color: '#2965F1',
        description:
          'Algonion에서 SCSS 모듈을 활용한 컴포넌트 스타일링\n' +
          'Monee에서 Tailwind와 병행해 반응형 디자인 구현\n'
      }
    ]
  },
  {
    category: 'Frontend',
    items: [
      {
        name: 'React',
        color: '#61DAFB',
        description:
          'Monee / Algonion에서 SPA 기반 컴포넌트 구성\n' +
          'Hooks 기반 상태 제어 및 사용자 인터랙션 구현\n'
      },
      {
        name: 'Next.js',
        color: '#000000',
        description:
          'Monee, 포트폴리오 프로젝트에서 SSR 기반 라우팅 구성\n' +
          '이미지 최적화, dynamic import 등 성능 개선 경험\n'
      },
      {
        name: 'NextUI (HeroUI)',
        color: '#8B5CF6',
        description:
          '포트폴리오 UI 구성에 버튼, 카드, 드롭다운 등 적용\n' +
          '사용자 경험을 고려한 빠른 프로토타이핑에 유용\n'
      },
      {
        name: 'Redux',
        color: '#764ABC',
        description:
          'Monee에서 calendar/transaction 상태 분리 및 구성\n' +
          'createSlice, configureStore 등 Redux Toolkit 기반\n'
      },
      {
        name: 'Tailwind CSS',
        color: '#38BDF8',
        description:
          'Monee UI 구성 및 반응형 레이아웃 구현에 활용\n' +
          'utility-first 기반 클래스 사용에 익숙함\n'
      },
      {
        name: 'Vue.js',
        color: '#42B883',
        description:
          'Socrates에서 Django와 연동하여 필터링 UI 구현\n' +
          'Pinia 기반 상태 관리와 컴포넌트 중심 렌더링 처리\n'
      }
    ]
  },
  {
    category: 'Backend',
    items: [
      {
        name: 'Django',
        color: '#092E20',
        description:
          'Socrates에서 사용자 인증, 커뮤니티, 추천 API 설계\n' +
          'ManyToManyField, get_or_create 등 ORM 기반 처리 경험\n'
      },
      {
        name: 'Django REST Framework',
        color: '#003545',
        description:
          'ModelSerializer 기반 직렬화 및 유효성 검증\n' +
          '@permission_classes, 커스터마이징된 RegisterSerializer 구성\n'
      },
      {
        name: 'dj-rest-auth',
        color: '#e74c3c',
        description:
          '이메일 기반 인증, 토큰 발급, 회원가입 연동 처리\n' +
          'Socrates 내 사용자 데이터 확장 저장 구조 구성\n'
      }
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      {
        name: 'Git',
        color: '#F05032',
        description:
          'GitHub / GitLab 기반의 브랜치 전략 운영 경험\n' +
          '팀 협업을 위한 PR 관리 및 이슈 분기 처리\n' +
          'Git flow 전략을 이용한 버전 관리\n'
      },
      {
        name: 'Jira',
        color: '#0052CC',
        description:
          '프로젝트 일정/역할 분담에 활용\n' +
          '보드를 통해 태스크 흐름 관리 및 회의 기록 연동\n'
      },
      {
        name: 'Notion',
        color: '#000000',
        description:
          '요구사항 정리, 명세서 작성, 회고 등 문서 작업에 사용\n' +
          '스터디 및 협업 프로젝트에서 자료 공유 및 정리 경험\n'
      },
      {
        name: 'Mattermost',
        color: '#1362A3',
        description:
          '팀 내 커뮤니케이션 및 회의 공유 플랫폼으로 활용\n' +
          'Socrates, Algonion 프로젝트에서 실시간 소통 기반으로 사용\n'
      },
      {
        name: 'Figma',
        color: '#F24E1E',
        description:
          'Monee, 디자인 시안 제작에 사용\n' +
          '컴포넌트 기반 UI 설계에 활용\n'
      }
    ]
  },
  {
    category: 'Etc',
    items: [
      {
        name: 'Unity',
        color: '#000000',
        description:
          'Four Knights RPG 개발 프로젝트에 활용\n' +
          '캐릭터 이동, 전투, 장비 시스템 구현 및 Prefab 구조 구성\n'
      },
      {
        name: 'TurboPack',
        color: '#FF6D00',
        description:
          'Next.js 개발 속도 향상을 위해 Turbopack 기반 빌드 구조 적용\n' +
          'pages/app 병행 프로젝트에서 초기 로딩 개선\n'
      }
    ]
  }
]