import App from '../App';
import bannerArt from '../image-assets/banner-art.png';
import N from '../image-assets/N.png';
import './about.css';
import $ from 'jquery';


function About() {

    // JQuery animation
    $(function () {
        $('#banner-art').animate({
            height: '100%',
            width: '100%'
        });
    });

    return (
            <div className="about-container">
                <div className="banner">
                    <img id="banner-art" src={bannerArt} alt="banner-art" />
                    <div className="title">Second <img className="N" src={N} alt="N" /><span className="decorative-type">ature</span></div>
                </div>
                <div className="description">
                    <div className='description quote'>
                        <span className="quote">"Habit is a <b><i>second nature</i></b> that destroys the first."</span>
                        <p><code>&#8212;</code><i>Blaise Pascal, Pensées</i></p>
                    </div>
                    <div className='description read-more'>
                        <p>Do you struggle with achieving some goals you have set up a while ago, like I do, who have THE same New Year Resolution
                            year after years? <i>Second Nature</i> is a Mobile/Web application aiming to support you on the journey to a better-self that is
                            no longer a dream. It helps you to focus on one goal at a time, keep track of your progress, and foster delay gratification.
                        </p>
                        <p>We are always more capable than we think we are. Knowing that we can and are able to follow through our plan is walking
                            on the path to success. As a philosopher <i>Will Durant</i> once said<span>&#8212;</span></p>
                        <div className="blockquote-icon">
                            <span>&#8220;</span></div>
                        <div className="blockquoteWithStyle"><span className='blockquote'>We are what we repeatedly do. Excellence,
                            therefore, is not an act, but a habit."</span></div>
                    </div></div>
            </div>
    )
}
export default About;