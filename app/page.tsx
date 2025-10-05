import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Courses from '@/components/courses';
import Lessons from '@/components/lessons';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Courses />
        <Lessons />
      </main>
      <Footer />
    </>
  );
}
