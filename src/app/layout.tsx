import Background from '@/components/Canvas/Background';
import '../app/globals.css'
import TopBtn from '../components/Common/TopBtn'

export const metadata = {
  title: 'Siabel Portfolio',
  description: '프론트엔드 개발자 포트폴리오',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>정원종 포트폴리오</title>
        <meta name="description" content="프론트엔드 개발자 정원종의 인터랙티브 포트폴리오입니다." />
        <meta property="og:title" content="정원종 포트폴리오" />
        <meta property="og:description" content="프론트엔드 개발자 정원종의 프로젝트 및 기술 경험을 소개합니다." />
        {/* <meta property="og:image" content="/og-image.png" /> */}
        <meta property="og:url" content="" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </head>

      <body>
        <Background/>
        {children}
        <TopBtn />
      </body>
    </html>
  );
}