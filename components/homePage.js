import { Component } from 'preact';
import { route } from 'preact-router';
import Webcam from 'react-webcam';

export default class HomePage extends Component {
    capture = () => { 
        const imageSrc = this.webcam.getScreenshot(); 
    } 
    render() {
        return (
            <div class="home">
                <h1>Shopping on the intelligent web</h1>
                <h2>A fun 'hands on' journey</h2>
                <p>Let's explore how we might make shopping easier from building your shopping lists by taking pictures with your phone to finding out which of your items are on special</p>
                <h2>We will be in good hands</h2>
                <ul>
                    <li>Marcus Greasly delivered the award winning Open University project using React</li>
                    <li>Ali Almaktoum is a gun developer and he has done React work in various projects and hackathons.</li>
                </ul>
                <h2>Learn the important stuff</h2>
                <p>The key items we’ll be playing with are:</p>
                <ul>
                    <li><i>Progressive Web App</i> – the popularity of this buzz word is like "responsive web design" six years ago.  This is a new way to deliver amazing user experiences on the web</li>
                    <li><i>Cognitive Services</i> - AI services backed by Microsoft, easy to integrate with.</li>
                    <li><i>React</i> - the current "go to" JavaScript frameworks on the market</li>
                    <li>many other cool stuff</li>
                </ul>            
            </div>
        );
    }
}
