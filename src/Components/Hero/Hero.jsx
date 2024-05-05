
import './Hero.css'
import logo_img from '../../assets/logo.jpeg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={logo_img} alt="" className='profile-img' />
      <h1><span>I'm Priti Kumari,</span> Full stack developer based in India.</h1>
      <p>I am a Full stack developer from India, with 3 years of experience in Full Stack Development.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a className='anchor-link' offset={50} href='https://www.linkedin.com/in/priti-kumari-9bb892194/'>Connect with me</a>
        
        </div>
       
       
       
        <div className="hero-resume">
  <a className='resume-link' href='https://drive.google.com/file/d/1NM7wwd8p-jHApl4JwRkka-1opcSOVbtX/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>My resume</a>
</div>


      </div>
    </div>
  )
}

export default Hero
