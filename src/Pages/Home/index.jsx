import { SectionContainer } from '../../Components/SectionContainer';
import { Address } from '../../Components/Address';
import { Navbar } from '../../Components/Navbar';
import { PostGraduation } from '../PostGratuation';
import { History } from '../History';
import { ExtensionCourses } from '../ExtensionCourses';
import { Intro } from '../../Components/Intro';

export const Home = () => {
  return (
    <SectionContainer>
      <Navbar />
      <Intro />
      <PostGraduation />
      <ExtensionCourses />
      <History />
      <Address />
    </SectionContainer>
  );
};
