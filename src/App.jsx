import DownloadBanner from "./components/DownloadBanner";
import Hero from "./components/Hero"
import Services from "./components/Services";
import WhereBuy from "./components/WhereBuy";
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="overflow-x-hidden flex flex-col gap-20">
      <Hero/>
      <Services/>
      <WhereBuy/>
      <DownloadBanner/>
      <Footer/>
    </div>
  )
}

export default App;