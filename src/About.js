import "./About.css";

//return a link to my blog
function About() {
    return (
        <div>
            <h1>About:</h1>
            <a className="about" href="https://drive.google.com/file/d/1POArcl0IjZjNwSgDPnBIrqmBwZeYqnIV/view?usp=sharing">Check out the video walk-through!</a>
            <br></br>
            <br></br>
            <a className="about" href="http://caitlinraby.medium.com/">Visit my blog!</a>
            <br></br>
            <br></br>
            <a className="about" href="./home">🏡Back Home</a>
        </div>
    )
}
export default About;