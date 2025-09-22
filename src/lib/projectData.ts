export const projects = [
  {
    title: 'Choi-choir Site',
    duration: '2025.07 - ',
    summary: '합창단 웹서비스 — 회원권한/앨범·자료실/일정/역할 관리',
    detail: `Next.js 15(App Router) + TypeScript + Tailwind 구성
              Firebase Auth(guest → member 권한 상승, 로그인 흐름 설계)
              Firestore(공지/자유게시판/자료실/앨범) + Storage(미디어)
              역할 기반 접근 제어와 멤버 필터
              자료/PDF 뷰 & 다운로드, 썸네일 리스트/디테일 네비게이션`,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    category: 'Web',
    importance: 'main',
    github: 'https://github.com/Siabel/choi-choir',
    summaryUrl: '/static/choi-choir.md',
    deployUrl: '',
    images: [
      'choi-choir (1).png',
      'choi-choir (2).png',
      'choi-choir (3).png',
      'choi-choir (4).png',
      'choi-choir (5).png',
      'choi-choir (6).png',
      'choi-choir (7).png',
      'choi-choir (8).png',
      'choi-choir (9).png',
    ],
    imgDescriptions: [
      '메인',
      '합창단 소개 - 감독 소개',
      '합창단 소개 - 단원 소개',
      '일정 - 캘린더',
      '일정 - 리스트',
      '앨범 - 사진첩',
      '앨범 - 동영상',
      '로그인',
      '회원가입',
    ],
    notion: '',
    thumbnail: 'choi-choir (1).png',
    shortDesc: '합창단 웹서비스',
  },
  {
    title: 'Portfolio Site',
    duration: '2025.06 - ',
    summary: 'Next.js + TypeScript 기반 인터랙티브 포트폴리오 사이트',
    detail: `Next.js(App Router) + TypeScript + Tailwind CSS 아키텍처
              Framer Motion 섹션 전환/카드 플립/리빌 애니메이션
              Radix UI + HeroUI 기반 접근성/기본 컴포넌트 조합
              프로젝트 태그 필터/요약(SUMMARY MD)/이미지 모달 뷰어
              재사용 가능한 SectionWrapper/ProjectCard 컴포넌트 설계`,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Web',
    github: 'https://github.com/Siabel/portfolio_site.git',
    deployUrl: '',
    summaryUrl: '',
    images: [
      'portfolio (1).png',
      'portfolio (2).png',
      'portfolio (3).png',
      'portfolio (4).png',
      'portfolio (5).png',
      'portfolio (6).png',
      'portfolio (7).png',
    ],
    imgDescriptions: [
      'Intro 섹션',
      'Projects',
      'Skills',
      'Skills - Modal',
      'Projects',
      'Links',
      'Contact',
    ],
    notion: '',
    thumbnail: 'portfolio (1).png',
    shortDesc: '인터랙티브 포트폴리오',
  },
  {
    title: 'Monee',
    duration: '2025.03 - ',
    summary: 'PWA 기반 가계부 앱으로 캘린더, 통계, 수입/지출 분석 기능을 제공',
    detail: `UI 설계 및 재사용 가능한 캘린더/통계 컴포넌트 개발
                  Redux 기반 상태 관리 및 구조 설계
                  사용자 경험 중심의 반응형 인터페이스 구현`,

    tags: ['React', 'Redux', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    category: 'Web',
    importance: 'main',
    github: 'https://github.com/nastorond/monee',
    summaryUrl: '/static/monee.md',
    deployUrl: '',

    images: [
      'monee(1).gif', 
      'monee(2).gif', 
      'monee(3).gif', 
      'monee(4).gif'
    ],
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
    title: 'Four Knights',
    duration: '2024.04 - 2024.05',
    summary: 'Unity 기반 성장형 RPG 게임 프로젝트',
    detail: `캐릭터 이동, 공격 등 기본 전투 로직 구현 
            환경설정 및 마을 UI(상점, 레이드, 장비) 개발
            플레이어 설정(닉네임, 레벨, 해상도, 사운드, 민감도) 시스템 제작`,
    tags: ['Unity', 'C#'],
    category: 'Game',
    importance: 'main',
    github: 'https://github.com/Siabel/Four_Knights.git',
    summaryUrl: '/static/four-knights.md',
    images: [
      'four-knights (1).png',
      'four-knights (1).gif',
      'four-knights (2).gif',
      'four-knights (2).png',
      'four-knights (3).png',
      'four-knights (4).png',
      'four-knights (5).png',
      'four-knights (6).png',
      'four-knights (7).png',
      'four-knights (8).png',
    ],
    imgDescriptions: [
      '타이틀/메인 씬',
      '캐릭터 선택',
      '맵 - 마을',
      '맵 - 마을',
      '레이드 파티 UI',
      '맵 - 레이드 보스 1',
      '맵 - 레이드 보스 2',
      '장비 강화 UI',
      '맵 - 필드1',
      '맵 - 필드2',
    ],
    notion: '',
    thumbnail: 'four-knights (1).png',
    shortDesc: 'Unity RPG 프로젝트',
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
    importance: 'main',
    github: 'https://github.com/Siabel/algonion',
    summaryUrl: '/static/algonion.md',
    images: [
      'algonion(1).gif', 
      'algonion(2).gif', 
      'algonion(3).gif', 
      'algonion(4).gif', 
      'algonion(5).gif',
      'algonion(6).gif',
      'algonion(7).gif'
    ],
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
    importance: 'main',
    github: 'https://github.com/Siabel/Socrates',
    summaryUrl: '/static/socrates.md',
    images: [
      'socrates(1).png', 
      'socrates(2).png', 
      'socrates(3).png', 
      'socrates(4).png', 
      'socrates(5).png', 
      'socrates(6).png', 
      'socrates(7).png', 
      'socrates(8).png'
    ],
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