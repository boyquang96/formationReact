import React  from 'react'
import Header from './components/ui/Header/Header'
import Navbar from './components/ui/Navbar/Navbar'
import WFirstGrow from './components/layout/WFirstGrow/WFirstGrow'
import Footer from './components/ui/Footer/Footer'
import store from "./components/store/store"
import { addImages, fetchImages, fetchMemes } from './components/store/ressources'
import StoreMemeForm from './components/functional/MemeForm/StoreMemeForm'
import  { ReduxModal } from './components/Modal/Modal'
import StoreMemeSVGViewer from './components/ui/StoreMemeSVGViewer/StoreMemeSVGViewer'
interface iAppState {
  // meme: MemeInterface;
  // images: Array<ImageInterface>;
}
interface iAppProps { }

export default class App extends React.Component<iAppProps, iAppState> {

  // constructor(props: iAppProps) {
  //   super(props);
  //   this.state = { meme: emptyMeme, images: [] }
  // }

  componentDidMount(): void {
    // fetch('http://localhost:5679/images', {
    //   headers: {
    //     Origin: "https://localhost:5679"
    //   }
    // })
    //   .then(r => r.json())
    //   .then(arr => {
    //     this.setState({ images: arr });
    //     store.dispatch(addImages(arr))
    //   });
    store.dispatch(fetchImages());
    store.dispatch(fetchMemes());
  }

  render() {
    return (
      <div className='App' data-testid='App' >
        <Header />
        <Navbar />
        <WFirstGrow>
          <StoreMemeSVGViewer
            basePath=""
          />
          <StoreMemeForm  
            // onMemeChange={(meme: MemeInterface) => {
            //   this.setState({ meme: meme });
            // }}
            //images={this.state.images}
            //meme={this.state.meme}
          />
        </WFirstGrow>
        <Footer />

          <ReduxModal />
      </div>
    )
  }
}