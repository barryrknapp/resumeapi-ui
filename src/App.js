import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'https://media.licdn.com/dms/image/C5603AQGpTnXH4rRSEg/profile-displayphoto-shrink_100_100/0?e=1548892800&v=beta&t=OMIw_CvDp-z_Oclz5OPo_0nvbSVhVvKnygBNOmd6l7U',
      name: 'Barry Knapp',
      profession: 'Dev Team Lead',
      bio: '🖐 Dev Team Lead - @ Overstock.com',
      address: 'APEX, NC',
      social: [
        {name: 'share-alt', url: 'https://stackoverflow.com/users/1082668/barry-knapp'},
        {name: 'github', url: 'https://github.com/barryrknapp'},
        {name: 'bitbucket', url: 'https://bitbucket.org/barryknapp/profile/repositories?visibility=public'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/baknapp/'},
      ],
      experience: [
        {jobTitle: 'Dev Team Lead', company: 'Overstock.com', startDate: 'Jun 2015', endDate: 'Present', jobDescription: 'I have been a remote team lead for several different teams at Overstock, including Online Marketing, Growth, NavEx and User Generated Content.  Hands on technical lead with strengths in Java, restful services, microservices, SQL, messaging, GIT, CI, CD, Splunk.   My time is split between managing and development but according to GitPrime I am 2.1 hours to 100 lines of code and 88% efficient.'},
        {jobTitle: 'Enterprise Services Architect', company: 'Railinc', startDate: 'Mar 2007', endDate: 'Jun 2015', jobDescription: 'I have served several roles with Railinc including Senior Software Engineer, Team Lead, Application Architect and Enterprise Services Architect. Primarily involved in designing and building high volume, transactional, rules based systems using Java, Spring, Spring Integration, Camel and JBoss rules running on TcServer/Tomcat and integrating systems with message based IIB/WMB flows.  Focused primarily on logistics applications providing real time location and ETA data for rail shipments.'},
        {jobTitle: 'Associate Information Engineer', company: 'Travelers Ins.', startDate: 'Dec 2003', endDate: 'Apr 2007', jobDescription: 'Application Team lead supporting development of enterprise J2EE based ILog JRules Business Rules System and supporting applications.  Developed Java/J2EE EJB Struts and JSF (MVC) web based facilities deployed to Websphere application server.  Created and presented training and knowledge transfer session to business customers and technical team members describing applications and applicable interacting systems.   Mentor junior Java developers through promotion of core J2EE design patterns including DAOs, DVOs, service locators, and clear separation of view and business logic.  Involved in full software life cycle including production support post release of our previous version.'},
        {jobTitle: 'Senior Programmer', company: 'Accenture', startDate: 'Jan 2002', endDate: 'Dec 2003', jobDescription: 'Integration and extension of ILog JRules engine using Java\J2EE to convert personal lines underwriting legacy system to a distributed Java/J2EE system. Developed business object models utilizing XSD, XML and Java for object instantiation through reflection and JAXB technology. Designed and coordinated the implementation of SQL Server databases supporting the complete solution throughout all environments of the project.'}

      ],
      education: [
        {degree: 'MS Information Technology', institution: 'Regis U.', startDate: 'Sep 1998', endDate: 'Jun 2001', description: 'Focus in Java, OOM and Relational DBs. GPA:4.0'},
        {degree: 'MS Neuroscience', institution: 'U. of Hartford', startDate: 'Sep 1994', endDate: 'Jun 1997', description: 'Awarded Regents Fellowship and acted as lab and teaching assistent.'},
        {degree: 'BA Psychology', institution: 'SCSU', startDate: 'Sep 1990', endDate: 'Jun 1994', description: ''}

      ],
      certificate: [
        {name: 'OOAD Certified', institution: 'Regis U', date: 'Jun 2001', description: '' },
        {name: 'RDBMS Certified', institution: 'Regis U', date: 'Jun 2001', description: '' }
      ],
      skills: [
        {name: 'Agile', percentage: '75%'},
        {name: 'Camel', percentage: '60%'},
        {name: 'Cassandra', percentage: '35%'},
        {name: 'Cloudfoundry', percentage: '20%'},
        {name: 'Continuous Delivery', percentage: '70%'},
        {name: 'Datapower', percentage: '70%'},
        {name: 'Docker', percentage: '50%'},
        {name: 'EhCache', percentage: '75%'},
        {name: 'Enterprise Architecture', percentage: '75%'},
        {name: 'Flutter/Dart', percentage: '15%'},
        {name: 'Git/SVN', percentage: '85%'},
        {name: 'Hibernate', percentage: '90%'},
        {name: 'Hystrix', percentage: '75%'},
        {name: 'Java', percentage: '95%'},
        {name: 'Javascript', percentage: '50%'},
        {name: 'Jenkins', percentage: '80%'},
        {name: 'Linux', percentage: '50%'},
        {name: 'Maven', percentage: '95%'},
        {name: 'Messaging', percentage: '80%'},
        {name: 'SOA', percentage: '90%'},
        {name: 'Spring', percentage: '90%'},
        {name: 'SQL', percentage: '90%'},
        {name: 'Redis', percentage: '85%'},
        {name: 'Rest', percentage: '95%'}


      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
