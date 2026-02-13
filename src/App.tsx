
import { Sidebar } from './components/Layout/Sidebar';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Experience } from './components/Sections/Experience';
import { Skills } from './components/Sections/Skills';
import { Languages } from './components/Sections/Languages';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';
import { Footer } from './components/Sections/Footer';

function App() {


    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <Sidebar />
            <main className="flex-1 md:ml-80 transition-all duration-300 flex flex-col min-h-screen">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Languages />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default App;
