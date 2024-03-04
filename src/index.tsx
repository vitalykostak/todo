import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { StoreProvider } from '@/app/providers/StoreProvider'
import App from '@/app/app'

const domElement = document.querySelector('#root')

if (!domElement) {
  throw new Error('Provide dom element')
}

const root = createRoot(domElement)

root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
)
