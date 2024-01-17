
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import SupportAgent from './pages/SupportAgent';
import SupportTicket from './pages/SupportTicket';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<SupportTicket />} />
        <Route path="/support-tickets" element={<SupportTicket />} />
        <Route path="/support-agents" element={<SupportAgent />} />
      </Routes>
    </Router>
  );
}

export default App;
