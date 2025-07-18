export const projects = [
  {
    title: 'Monee',
    duration: '2025.03 - ',
    summary: 'PWA 기반 가계부 앱으로 캘린더, 통계, 수입/지출 분석 기능을 제공',
    detail: `UI 설계 및 재사용 가능한 캘린더/통계 컴포넌트 개발
                  Redux 기반 상태 관리 및 구조 설계
                  사용자 경험 중심의 반응형 인터페이스 구현`,

    tags: ['React', 'Redux', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    category: 'Web',

    github: 'https://github.com/nastorond/monee',
    summaryUrl: '/project/monee/monee.md',
    images: ['monee (1).gif', 'monee (2).gif', 'monee (3).gif', 'monee (4).gif'],
    imgDescriptions: [
      '수입 / 지출 원형 그래프', 
      '수입 / 지출 선형 그래프', 
      '캘린더 월별 선택',
      '캘린더 일별 선택'
    ],

    notion: 'https://imaginary-editor-57f.notion.site/Monee-1ca842b2e8b18036b339e153f66ae425?source=copy_link',
    thumbnail: 'Monee.png',
    shortDesc: '가계부 프로젝트', 
  },
  {
    title: 'Algonion',
    duration: '2024.01 - 2024.02',
    summary: '알고리즘 학습을 위한 웹 플랫폼으로 문제 풀이 및 해설 제공',
    detail: `알고리즘 문제 CRUD 및 풀이 히스토리 기능 개발
                  React 상태 관리 및 SCSS 기반 UI 설계
                  팀원 간 협업을 위한 Gitflow 전략 적용`,

    tags: ['React', 'TypeScript', 'SCSS'],
    category: 'Web',
    github: 'https://github.com/Siabel/algonion',
    summaryUrl: '/project/algonion/algonion.md',
    images: ['algonion (1).gif', 'algonion (2).gif', 'algonion (3).gif', 'algonion (4).gif', 'algonion (5).gif','algonion (6).gif','algonion (7).gif',],
    imgDescriptions: [
      '메인 페이지 화면', 
      '유저 검색',
      '기본 프로필 페이지',
      '코드로그 페이지',
      '풀이 문제 상세 및 메모',
      'Web RTC',
      '풀이 문제 노션 내보내기'
    ],

    notion: 'https://imaginary-editor-57f.notion.site/Algonion-6aa20dea7a7644998417a75cef492793?source=copy_link',
    thumbnail: 'Algonion.png',
    shortDesc: '알고리즘 학습 프로젝트', 
  },
  {
    title: 'Socrates',
    duration: '2023.11',
    summary: '사용자가 좋아하는 영화를 네거티브 필터링하여 추천해주는 사이트',
    detail: `Vue 기반 동적 필터링 인터페이스 구성
                  Django ORM을 활용한 사용자 선호 데이터 분석
                  RESTful API 설계 및 프론트와 통신 구현`,

    tags: ['Python', 'Django', 'Vue'],
    category: 'Web',
    github: 'https://github.com/Siabel/Socrates',
    summaryUrl: '/project/socrates/socrates.md',
    images: ['socrates (1).png', 'socrates (2).png', 'socrates (3).png', 'socrates (4).png', 'socrates (5).png', 'socrates (6).png', 'socrates (7).png', 'socrates (8).png'],
    imgDescriptions: [
      '메인 페이지 화면(비로그인)', 
      '메인 페이지 화면(비로그인) - 2',
      '회원가입 페이지',
      '메인 페이지 화면(로그인)',
      '영화 상세 페이지',
      '영화 필터링 페이지',
      '커뮤니티 페이지',
      '영화 검색 페이지',
    ],

    notion: 'https://imaginary-editor-57f.notion.site/Socrates-4a27e47028c44efabab916466a4fca59?source=copy_link',
    thumbnail: 'Socrates.png',
    shortDesc: '영화 추천 프로젝트', 
  },
]