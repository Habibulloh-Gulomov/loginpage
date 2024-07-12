import './hero.css'
import heroimg from '../../img/hero.svg'
import downBtn from '../../img/down.png'

const Hero = () => {
  return (
    <div className='container'>
      <div className='hero-cover'>
        <div className="hero-left">
          <p className='hero-txt'>AI-Powered<span className='hero-inner-txt'> IELTS Mock Exam </span>: Easy and Efficient</p>
          <button className="hero-btn">Start Your Test</button>
        </div>
          <img className='hero-img' src={heroimg} alt="" />
      </div>
      <button className='down-btn'><img src={downBtn} alt="click and down" /></button>
    </div>
  )
}

export default Hero