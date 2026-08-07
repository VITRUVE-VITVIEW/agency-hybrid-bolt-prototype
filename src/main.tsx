import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted Jost font (no Google Fonts remote loading)
import '@fontsource/jost/400.css'
import '@fontsource/jost/500.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'

import './styles/global.css'
import './styles/rostang-tokens.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
