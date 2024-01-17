import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SupportAgent from './pages/SupportAgent';
import SupportTicket from './pages/SupportTicket';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <Route index element={<SupportTicket />}/>
        <Route path='/support-agents' element={<SupportAgent />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
