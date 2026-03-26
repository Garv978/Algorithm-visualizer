import { Analytics } from "@vercel/analytics/react";
import Dropdown  from './components/Dropdown';
import { DsaMap } from './pages/index';
import Logo from './components/Logo';
import { useState } from 'react';

const App = () => {
  const [page, setPage] = useState('Algorithm');
  const DsaComponent = DsaMap[page].type;
  return (
    <div className="max-w-6xl mx-auto">
      <Logo/>
      <Dropdown options={DsaMap} value={page} onChange={setPage}/>
      <DsaComponent/>
      <Analytics />
    </div>
  )
}

export default App;
