import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import TypesafeI18n from 'i18n/i18n-react'
import { Locales } from 'i18n/i18n-types'

const container = document.getElementById('root')
const root = createRoot(container!)

const language = navigator.language.split(/[-_]/)[0]

root.render(
  <React.StrictMode>
    <TypesafeI18n locale={language as Locales}>
      <GlobalStyles />
      <App />
    </TypesafeI18n>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
