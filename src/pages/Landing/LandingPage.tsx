import Header from '../../components/header';
import Footer from '../../components/footer';
import Hero from '../../pages/Landing/hero';
import AboutUs from './aboutUs';
import Content from './content';


function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Content />
      </main>
      <Footer />
    </div>
  );

}
export default LandingPage;