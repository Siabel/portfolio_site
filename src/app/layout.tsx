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
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <TopBtn />
      </body>
    </html>
  );
}