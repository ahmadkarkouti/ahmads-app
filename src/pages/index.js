import React, { Component } from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import animateScrollTo from 'animated-scroll-to';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';


const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
class IndexPage extends Component {

  ChangePic() {
    // document.getElementById('myImage').src = require('../images/uwl2.png')
    // if (document.getElementById('myImage').src == require('../images/uwl.png')) {
    //   document.getElementById('myImage').src = require('../images/uwl2.png')
    // } else if (document.getElementById('myImage').src == require('../images/uwl2.png')) {
    //   document.getElementById('myImage').src = require('../images/uwl3.png')
    // } else if (document.getElementById('myImage').src == require('../images/uwl3.png')) {
    //   document.getElementById('myImage').src = require('../images/uwl4.png')
    // } else if (document.getElementById('myImage').src == require('../images/uwl4.png')) {
    //   document.getElementById('myImage').src = require('../images/uwl5.png')
    // } else if (document.getElementById('myImage').src == require('../images/uwl5.png')) {
    //   document.getElementById('myImage').src = require('../images/uwl.png')
    // }
    // if (document.getElementById('secondpic').id != null) {
    //   document.getElementById('secondpic').id = "thirdpic"
    //   document.getElementById('myImage').src = require('../images/uwl3.png')
    // }

    // if (document.getElementById('firstpic').id != null) {
    //   document.getElementById('firstpic').id = "secondpic"
    //   document.getElementById('myImage').src = require('../images/uwl2.png')
    // }

    if(document.getElementById('myImage').className == "react-reveal firstImage") {
      document.getElementById('myImage').className = "react-reveal secondImage"
      document.getElementById('myImage').src = require('../images/uwl2.png')
    } else if(document.getElementById('myImage').className == "react-reveal secondImage") {
      document.getElementById('myImage').className = "react-reveal thirdImage"
      document.getElementById('myImage').src = require('../images/uwl3.png')
    } else if(document.getElementById('myImage').className == "react-reveal thirdImage") {
      document.getElementById('myImage').className = "react-reveal fourthImage"
      document.getElementById('myImage').src = require('../images/uwl4.png')
    } else if(document.getElementById('myImage').className == "react-reveal fourthImage") {
      document.getElementById('myImage').className = "react-reveal fifthImage"
      document.getElementById('myImage').src = require('../images/uwl5.png')
    } else if(document.getElementById('myImage').className == "react-reveal fifthImage") {
      document.getElementById('myImage').className = "react-reveal firstImage"
      document.getElementById('myImage').src = require('../images/uwl.png')
    }
  }

  ChangeQuery(){

  }

  render() {
    return (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <br/>
      <Zoom>
        <h1>Ahmad Karkouti</h1>
        <p>Programming is the closest thing to magic.</p>
        <Link onClick={() => animateScrollTo(document.querySelector('.Cards'))}>Join the journey</Link>
        </Zoom>
        <div className="Logos">
        <Flip>
          <img src={require('../images/logo-swift.png')} width="50" />
          <img src={require('../images/logo-java.png')} width="50"/>
          <img src={require('../images/logo-python.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          </Flip>
        </div>
      <Wave />
      </div>
    </div>
    {/* <div className="ProjectTextGroup">
      <div className="ProjectTitle">
      <Roll>
        <h3>University Portal</h3>
        </Roll>
        </div>
        <div className="ProjectImage">
        <img src={require('../images/uwl.png')} width="350" />
    </div>
      </div>
      </div> */}
      <div className="ProjectGroup">
        <div className="ProjectImage">
        <Zoom>
        <img id="myImage" className="firstImage" src={require('../images/uwl.png')} width="350" />
        </Zoom>
        </div>
        <div className="ProjectTextGroup">
        <div id="Cards" className="Cards"/>
          <div className="ProjectTitle">
          <Roll>
            <h3>Latest Project</h3>
            </Roll>
          </div>
          <Flip>
          <button id="firstpic" onClick={() => this.ChangePic()}><img src={require('../images/back.png')} width="50" height="50"/></button>
          </Flip>
          <div className="ProjectBody">
          <Bounce>
            <p>Lorem ipsum dolor sit amet, ne duo facer mediocritatem. Te mel iudico causae, in mel alia verear. Cibo habemus praesent ei vim, vim nonumes dolorem ea, regione feugiat adversarium et mel. Unum melius consequuntur in pri, vel id wisi detraxit. Nam an accusamus ullamcorper, quo te omnium tacimates. Pro an ridens mentitum persequeris. Ut ancillae evertitur consectetuer eum. Ubique hendrerit duo ut, qui inermis mentitum no. Ut vix iuvaret ancillae. Ignota blandit definitionem mea in, mel ei facete fabulas. </p>
          </Bounce>
          <div className="myLink">
          <Link onClick={() => animateScrollTo(document.querySelector('.Projects'))}>Continue your journey</Link>
          </div>
          </div>
        </div>
      </div>
  <div>
  <div className="Projects"/>
  <div className="Cards">
  <Zoom>
      <h2>5 Projects, more coming</h2>
      </Zoom>
      <div className="CardGroup">
      <Flip>
        <Card 
        title="University Portal"
        text="Swift"
        image={require('../images/wallpaper.jpg')} />
        </Flip>
        <Flip>
        <Card 
        title="Ahmad's Webpage"
        text="React"
        image={require('../images/wallpaper2.jpg')} />
        </Flip>
        <Flip>
        <Card 
        title="Student Management"
        text="Java"
        image={require('../images/wallpaper3.jpg')} />
        </Flip>
        <Flip>
        <Card 
        title="Student Management"
        text="Java"
        image={require('../images/wallpaper3.jpg')} />
        </Flip>
        <Flip>
        <Card 
        title="Student Management"
        text="Java"
        image={require('../images/wallpaper3.jpg')} />
        </Flip>
        <div className="myLinks">
          <Link onClick={() => animateScrollTo(document.querySelector('.Features'))}>Continue your journey</Link>
          </div>
      </div>
          <br/>
      </div>
    </div>
    <div className="Features"/>
      <SectionCaption>More Features</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell
          title={cell.title}
          image={cell.image} /> 
          
        ))}
      </SectionCellGroup>
      <div className="myLinkd">
          <Link onClick={() => animateScrollTo(document.querySelector('.Contact'))}>Continue your journey</Link>
          </div>
      <br/>
      <br/>
      <br/>

      <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="Contact"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
      </div>
    );
  }
}

export default IndexPage

