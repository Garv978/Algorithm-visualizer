import {DataStructureStateProvider} from '../store/DataStructureContext'
import Dropdown from '../components/Dropdown'
import { pageMap } from '../pages/Data Structures/index'
import { useState } from 'react'

export default function DataStructure() {
  const [page, setPage] = useState('Stack');
  const PageComponent = pageMap[page].component
  return (
    <div className="max-w-6xl mx-auto">
      <DataStructureStateProvider>
      <Dropdown options={pageMap} value={page} onChange={setPage}/>
      <PageComponent/>
      </DataStructureStateProvider>
    </div>
  )
}