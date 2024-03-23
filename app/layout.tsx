"use client"

import "@/styles/globals.css"
import { Metadata } from "next"
import Head from "next/head"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/Header"

import { AuthProvider } from "./Providers"

const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = children?.props?.childProp?.segment
  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <Head>
          <title>Welcome to Kwiks</title>
        </Head>
        <AuthProvider>
          <body
            className={cn(
              "bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <Header />
            {children}
            <Toaster />
          </body>
        </AuthProvider>
      </html>
    </>
  )
}
