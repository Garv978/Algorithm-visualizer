import { AlgorithmStateProvider } from "../store/AlgorithmContext";
import Dropdown from '../components/Dropdown'
import { pageMap } from '../pages/Algorithms/index'
import { useState } from 'react'

export default function Algorithm() {
  const [page, setPage] = useState('sorting');
  const PageComponent = pageMap[page].component
  return (
    <div className="max-w-6xl mx-auto">
      <AlgorithmStateProvider>
      <Dropdown options={pageMap} value={page} onChange={setPage}/>
      <PageComponent/>
      </AlgorithmStateProvider>
    </div>
  )
}