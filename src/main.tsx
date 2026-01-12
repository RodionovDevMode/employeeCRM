import { createRoot } from 'react-dom/client'

import App from './components/app/App'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
