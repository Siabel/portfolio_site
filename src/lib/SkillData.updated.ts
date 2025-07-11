export const skillData: SkillCategory[] = [
  {
    category: 'Language',
    items: [
      {
        name: 'TypeScript',
        color: '#3178C6',
        description: 'Monee / Algonion에서 타입 안정성과 컴포넌트 기반 UI 설계에 사용\nRedux, Chart 등 다양한 도메인 상태를 안정적으로 구성'
      },
      {
        name: 'JavaScript',
        color: '#F7DF1E',
        description: 'Socrates에서 비동기 처리와 UI 렌더링 구현\n개인 웹 컴포넌트 제작에 사용'
      },
      {
        name: 'Python',
        color: '#3572A5',
        description: 'Django 기반 Socrates에서 서버사이드 API 개발\nTMDB 연동 및 DB 저장 처리 로직 구현'
      },
      {
        name: 'C++',
        color: '#00599C',
        description: '대학 과제 및 알고리즘 문제 풀이에 활용\n기본 자료구조 및 STL 활용 경험'
      },
      {
        name: 'HTML',
        color: '#E34F26',
        description: '모든 웹 프로젝트에서 시맨틱 마크업 구성에 사용\n접근성과 구조적 레이아웃 구현에 기여'
      },
      {
        name: 'CSS / SCSS',
        color: '#2965F1',
        description: 'Algonion에서 SCSS 모듈을 활용한 컴포넌트 스타일링\nMonee에서 Tailwind와 병행해 반응형 디자인 구현'
      }
    ]
  },
  {
    category: 'Frontend',
    items: [
      {
        name: 'React',
        color: '#61DAFB',
        description: 'Monee / Algonion에서 SPA 기반 컴포넌트 구성\nHooks 기반 상태 제어 및 사용자 인터랙션 구현'
      },
      {
        name: 'Next.js',
        color: '#000000',
        description: 'Monee, 포트폴리오 프로젝트에서 SSR 기반 라우팅 구성\n이미지 최적화, dynamic import 등 성능 개선 경험'
      },
      {
        name: 'NextUI (HeroUI)',
        color: '#8B5CF6',
        description: '포트폴리오 UI 구성에 버튼, 카드, 드롭다운 등 적용\n사용자 경험을 고려한 빠른 프로토타이핑에 유용'
      },
      {
        name: 'Redux',
        color: '#764ABC',
        description: 'Monee에서 calendar/transaction 상태 분리 및 구성\ncreateSlice, configureStore 등 Redux Toolkit 기반'
      },
      {
        name: 'Tailwind CSS',
        color: '#38BDF8',
        description: 'Monee UI 구성 및 반응형 레이아웃 구현에 활용\nutility-first 기반 클래스 사용에 익숙함'
      },
      {
        name: 'Vue.js',
        color: '#42B883',
        description: 'Socrates에서 Django와 연동하여 필터링 UI 구현\nPinia 기반 상태 관리와 컴포넌트 중심 렌더링 처리'
      }
    ]
  },
  {
    category: 'Backend',
    items: [
      {
        name: 'Django',
        color: '#092E20',
        description: 'Socrates에서 사용자 인증, 커뮤니티, 추천 API 설계\nManyToManyField, get_or_create 등 ORM 기반 처리 경험'
      },
      {
        name: 'Django REST Framework',
        color: '#003545',
        description: 'ModelSerializer 기반 직렬화 및 유효성 검증\n@permission_classes, 커스터마이징된 RegisterSerializer 구성'
      },
      {
        name: 'dj-rest-auth',
        color: '#e74c3c',
        description: '이메일 기반 인증, 토큰 발급, 회원가입 연동 처리\nSocrates 내 사용자 데이터 확장 저장 구조 구성'
      }
    ]
  }
]