import { AppProps } from "next/app"
import React from "react"
import { ThemeProvider } from "styled-components"

import PageHead from "components/PageHead"
import { GlobalStyle } from "config/GlobalStyle"
import { defaultTheme } from "config/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PageHead />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
