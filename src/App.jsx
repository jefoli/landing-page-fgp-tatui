import './App.css';
import { Navbar } from './Components/Navbar';
import { SectionOne } from './Components/SectionOne';
import { ExtensionCourses } from './Components/Section2';
import { PostGraduation } from './Components/PostGratuation';
import { Footer } from './Components/Footer';
import { Address } from './Components/Address';
import { History } from './Components/History';

function App() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <PostGraduation />
      <ExtensionCourses />
      <History />
      <Address />
      <Footer />
    </>
  );
}

export default App;
