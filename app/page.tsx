import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Comments from '@/components/comments';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Comments />
      </main>
      <Footer />
    </>
  );
}
