
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import CreateSupportAgent from './pages/CreateSupportAgent';
import ShowSupportTicket from './pages/ShowSupportTickets'
import CreateSupportTicket from './pages/CreateSupportTicket'

function App() {
  return (
    <Router>
        <div className="relative">
            <Header />
            <Routes>
              <Route index element={<ShowSupportTicket />} />
              <Route path="/support-tickets" element={<ShowSupportTicket />} />
              <Route path="/new-support-agent" element={<CreateSupportAgent />} />
              <Route path="/new-support-ticket" element={<CreateSupportTicket />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
