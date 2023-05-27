import { Navbar } from './Components/Navbar';
import { Carrousel } from './Components/Carrousel';
import { ExtensionCourses } from './Components/ExtensionCourses';
import { PostGraduation } from './Components/PostGratuation';
import { Footer } from './Components/Footer';
import { Address } from './Components/Address';
import { History } from './Components/History';
import { Advertisement } from './Components/Advertisement';
import RoutesSistem from './Routes';

function App() {
  return (
    <>
      <RoutesSistem />
      <Advertisement useState="false" />
      <Navbar />
      <Carrousel />
      <History />
      <PostGraduation />
      <ExtensionCourses />
      <Address />
      <Footer />
    </>
  );
}

export default App;
