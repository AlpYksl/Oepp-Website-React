import React, { Component } from 'react'
import Card from './CardUI';
import img1 from './assets/0000000412911-1.jpg';
import img2 from './assets/about.jpg';
import img3 from './assets/82f71d23b63eadf1d1c0b9158bf43d7a.jpg';
import img4 from './assets/images.jpg';
import img5 from './assets/beu-logo-en.jpg';
import img6 from './assets/asd.jpg';

export default class Cards extends Component {
    
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                  <div className="col-md-4">
                      <Card
                      imgsrc={img3} 
                      title="English Words Game"
                      text="English words for beginners.Please Study!!"
                      />
                  </div>
                  <div className="col-md-4">
                  <Card 
                  imgsrc={img4} 
                  title="Simple English Words with FlashCards"
                  text="English words for 8-12 year old kids. Please working hard!!"
                  />
                
                  </div>
                  <div className="col-md-4">
                  <Card 
                  imgsrc={img5} 
                  title="Beykent University Preperation School Exercise"
                  text="Guyss!! Our lecturer's shared words in lesson.Monday is exam about this words."
                  />

                  </div>
                  <div className="col-md-4">
                  <Card 
                  imgsrc={img6} 
                  title="Fill in Blanks for Spanish"
                  text="Las historias fueron proporcionadas por la capacitación del curso de español Kadıköy."
                  />
                  </div>
                  <div className="col-md-4">
                  <Card 
                  imgsrc={img1} 
                  title="Oxford English Dictionary words"
                  text="This word shows themselves in TOEFL exam."
                  />
                  </div> <div className="col-md-4">
                  <Card 
                  imgsrc={img2} 
                  title="Doga College PET exam."
                  text="This words are relevant in 2016-2019."
                  />
                  </div>
              </div>  
            </div>
        )
    }
}