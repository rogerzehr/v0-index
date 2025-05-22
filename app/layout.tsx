import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Royal Spark Innovation Lab",
  description: "Royal Spark Innovation Lab brings cutting-edge technology and creative solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/royal-spark-logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
