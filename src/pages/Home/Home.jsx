import About from "../../components/About/AboutSection";
import Header from "../../components/Header/Header";
import Profiles from "../../components/Profiles/Profiles";
import Advantages from "../../components/Advantages/Advantages";
import Study from "../../components/Study/Study";
import Price from "../../components/Price/Price";
import Data from "../../components/Data/Data";
import Form from "../../components/Form/Form";
import Cta from "../../components/Cta/Cta";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

export default function Home() {

  return (
    <>
    <Header />
    <About />
    <Profiles />
    <Advantages />
    <Study />
    <Price />
    <Data />
    <Form />
    <Cta />
    <Contacts />
    <Footer />
    </>
  )

}