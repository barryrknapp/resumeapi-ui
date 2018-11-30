import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import Lightbox from 'react-images';


class App extends Component {

  constructor(){
    super();
    this.state = {
      resume: []
    };
  }

componentDidMount(){
//http://resumeapi-env.fp5zraupj7.us-east-2.elasticbeanstalk.com/resume/barry
  fetch('http://resumeapi.knapp.work/resume/barry', { mode: 'no-cors'})
  .then(results => {
    console.log(results)
      return results.json();
  }).then(data => {
      let resume = data.results.map((res) => {
      <div>
      <div className='sidebar'>
        <Lightbox
        images={[{ src: 'http://knapp.work/media/knapp_work_arch.png' }]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
        <About
          avatar={res.avatar}
          name={res.name}
          profession={res.profession}
          bio={res.bio}
          address={res.address}
          social={res.social} />
      </div>

      <div className='content-wrapper'>
          <div className='content'>
            <Experience experience={res.experience} />
            <Education education={res.education} />
            <Certificate certificate={res.certificate} />
            <Skills skills={res.skills} />
          </div>
      </div>
      </div>
    })
      this.setState(resume:resume);
      console.log(resume);
  })




}

  render() {


    return (
      <header>
        <div className='wrapper'>
          {this.state.resume}
        </div>
      </header>
    );
  }
}

export default App;
