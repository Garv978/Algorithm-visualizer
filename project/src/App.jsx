import { AlgorithmStateProvider } from "./store/AlgorithmContext";
import { Analytics } from "@vercel/analytics/react";
import Dropdown from './components/Dropdown'
import Logo from './components/Logo'
import { pageMap } from './pages/index'
import { useState } from 'react'

const App = () => {
  const [page, setPage] = useState('sorting');
  const PageComponent = pageMap[page].component
  return (
    <div className="max-w-6xl mx-auto">
      <AlgorithmStateProvider>
      <Logo/>
      <Dropdown options={pageMap} value={page} onChange={setPage}/>
      <PageComponent/>
      <Analytics />
      </AlgorithmStateProvider>
    </div>
  )
}

export default App
