import { useContext } from 'react';
import GuestPage from './GuestPage';
import LoggedPage from './LoggedPage';
import { FontSizeContext } from '../providers/FontProvider';

function App() {
  const { isLogged } = useContext(FontSizeContext);
  return <>{isLogged ? <LoggedPage /> : <GuestPage />}</>;
}
export default App;
