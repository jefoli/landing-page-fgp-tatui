import { SectionContainer } from '../../Components/SectionContainer';
import { Address } from '../../Components/Address';
import { Advertisement } from '../../Components/Advertisement';
import { Navbar } from '../../Components/Navbar';
import { Carrousel } from '../../Components/Carrousel';
import { PostGraduation } from '../PostGratuation';
import { History } from '../History';
import { ExtensionCourses } from '../ExtensionCourses';

export const Home = () => {
  return (
    <SectionContainer>
      <Advertisement useState={true} />
      <Navbar />
      <Carrousel />
      <PostGraduation />
      <ExtensionCourses />
      <History />
      <Address />
    </SectionContainer>
  );
};
