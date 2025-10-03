import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      {/* <footer></footer> */}
    </>
  );
}
