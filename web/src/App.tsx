import "./styles/global.css";

import Header from "./components/header";

import { ContactForm } from "./screens/contactForm";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
