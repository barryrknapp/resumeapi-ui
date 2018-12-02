import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import LightboxGallery from './components/Gallery';


class App extends Component {

  constructor(){
    super();
    this.state = {
      resume: []
    };
  }

componentDidMount(){
  console.log('componentDidMount')
fetch('http://resumeapi-env.fp5zraupj7.us-east-2.elasticbeanstalk.com/resume/barry')
//  fetch('http://resumeapi.knapp.work/resume/barry')
//  fetch('http://localhost:8080/resume/barry')
  .then(results => {
    console.log(results)
      return results.json();
  }).then(data => {
      //let Store = [];
      //Store.push(data);
      this.setState({resume: data});
    })
      console.log(this.state.resume);

}

  render() {
    let r = this.rendered();
    return r;
}

rendered(){

let res = this.state.resume;
if(res.avatar==null){
  return <header><div></div></header>
}
    return (

      <header>
        <div className='wrapper'>
          <div>
          <div className='sidebar'>

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
              <LightboxGallery
                images={[
                  { src: '../media/knapp_work_arch.png'}
                ]}
              />
              <Experience experience={res.experience} />
              <Education education={res.education} />
              <Certificate certificate={res.certificate} />
              <Skills skills={res.skills} />
            </div>
          </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
