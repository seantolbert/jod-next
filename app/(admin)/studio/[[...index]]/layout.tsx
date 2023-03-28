import '../../../../styles/globals.css'

export const metadata = {
  title: 'Jungles of Dorado',
  description: 'Manage your content',
  icons:{
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
