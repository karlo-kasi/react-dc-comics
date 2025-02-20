import Header from "./assets/components/Header"
import Main from "./assets/components/Main"
import Footer from "./assets/components/Footer"


const links = [
  { id: 1, text: "CHARACTERS", url: "#", current: false },
  { id: 2, text: "COMICS", url: "#", current: false },
  { id: 3, text: "MOVIES", url: "#", current: true },
  { id: 4, text: "TV", url: "#", current: false },
  { id: 5, text: "GAMES", url: "#", current: false },
  { id: 6, text: "COLLECTIBLES", url: "#", current: false },
  { id: 7, text: "VIDEOS", url: "#", current: false },
  { id: 8, text: "FANS", url: "#", current: false },
  { id: 9, text: "SHOP", url: "#", current: false },
  { id: 10, text: "SHOP", url: "#", current: false }
]



function App() {
  
  return (
    <>
      <Header links={links} />
      <Main />
      <Footer />
    </>
  )
}

export default App
