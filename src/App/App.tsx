import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import Navbar from './components/ui/Navbar/Navbar'
import WFirstGrow from './components/layout/WFirstGrow/WFirstGrow'
import MemeForm from './components/functional/MemeForm/MemeForm'
import Footer from './components/ui/Footer/Footer'
import { ImageInterface, MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'
import { MemeInterface } from "orsys-tjs-meme"

interface iAppState {
  meme: MemeInterface;
  images: Array<ImageInterface>;
}
interface iAppProps { }

export default class App extends React.Component<iAppProps, iAppState> {

  constructor(props: iAppProps) {
    super(props);
    this.state = { meme: emptyMeme, images: [] }
  }

  componentDidMount(): void {
    fetch('http://localhost:5679/images', {
      headers: {
        Origin: "https://localhost:5679"
      }
    })
      .then(r => r.json())
      .then(arr => this.setState({ images: arr }));
  }

  render() {
    return (
      <div className='App' data-testid='App' >
        <Header />
        <Navbar />
        <WFirstGrow>
          <MemeSVGViewer
            basePath=""
            meme={this.state.meme}
            image={this.state.images.find((img) => img.id === this.state.meme.imageId)}
          />
          <MemeForm meme={this.state.meme} onMemeChange={(meme: MemeInterface) => {
            this.setState({ meme: meme });
          }}
           images={this.state.images}
           />
        </WFirstGrow>
        <Footer />
      </div>
    )
  }
}