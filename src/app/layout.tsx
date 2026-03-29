import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SignalOps — Revenue Intelligence Platform',
  description: 'See exactly where your revenue is leaking — and what to do about it. SignalOps connects to your CRM, billing, and CS data to surface the actions that move the needle.',
  openGraph: {
    title: 'SignalOps — Revenue Intelligence Platform',
    description: 'See exactly where your revenue is leaking — and what to do about it.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#080E1A' }}>{children}</body>
    </html>
  )
}
