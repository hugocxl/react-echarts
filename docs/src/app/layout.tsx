type Props = {
  children: React.ReactNode
}

export default function RootLayout(props: Props) {
  const { children } = props
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
