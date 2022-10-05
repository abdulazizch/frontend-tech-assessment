import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/LandingPage';
import NewEvent from './components/NewEvent';
import EventPage from './components/EventPage';

function App() {
  return (
    <>
      <Routes>
          <Route index element={<Landing />} />
          <Route path="create" element={<NewEvent />} />
          <Route path="event" element={<EventPage />} />
      </Routes>
    </>
  );
}

export default App;
