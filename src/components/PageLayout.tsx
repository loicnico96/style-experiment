import React, { ReactNode } from "react"

export type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <div className="container">{children}</div>
}
