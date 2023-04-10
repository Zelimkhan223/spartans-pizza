import css from './Slider.module.css';
import ReactSlider from 'react-slick';

function Slider() {
  const setting = {
    dots: true,
    Infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className='container'>
      <ReactSlider {...setting}>
          <div className={css.testSliderCard}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBGWRyz29dLB0ShA9m5ykYDkkRgoAtaQ8Zg&usqp=CAU" alt="" /></div>
          <div className={css.testSliderCard}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_bU0HHv0byOYso-ysF-5zgtqajIz1qjfHA&usqp=CAU" alt="" /></div>
          <div className={css.testSliderCard}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemRsQdIuam-fVlkFagzhSmN-jfMsRm9bPGw&usqp=CAU" alt="" /></div>
          <div className={css.testSliderCard}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmIg8BlYgHa1v93HC46kgL9_XM23V1kSuyw&usqp=CAU" alt="" /></div>
          <div className={css.testSliderCard}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGs0Z0s57lf2dV2gNihFu9exh6eOv2QjJCrA&usqp=CAU" alt="" /></div>
          <div className={css.testSliderCard}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKs3Kh15PMZrkl00Gic3oYu3hk0QXUurXhhGYyk8Zj6V8QBmtMSSUNCeRdJCH2cUw7VQ&usqp=CAU" alt="" /></div>
          <div className={css.testSliderCard}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tULAaAFQiHwxxRASJgtv4_Cd76szr1pkOQ&usqp=CAU" alt="" /></div>
          <div className={css.testSliderCard}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhecIinbLcjY02fTwwDnCXaekrJYgs0cJb4Q&usqp=CAU" alt="" /></div>
          <div className={css.testSliderCard}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvoKcWT2nlazdXUhnhP9wSIhEoEl1PhXsWg&usqp=CAU" alt="" /></div>
      </ReactSlider>  
    </div>
  )
}

export default Slider;