import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
