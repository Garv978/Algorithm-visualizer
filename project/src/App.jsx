import Logo from './components/Logo'
import Dropdown from './components/Dropdown'
import Sorting from './pages/Sorting'
import Searching from './pages/Searching'
import { useState } from 'react'
import { pageMap } from './pages/index'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  const [page, setPage] = useState('sorting');
  const PageComponent = pageMap[page].component
  return (
    <div className="max-w-6xl mx-auto">
      <Logo/>
      <Dropdown options={pageMap} value={page} onChange={setPage}/>
      <PageComponent/>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
