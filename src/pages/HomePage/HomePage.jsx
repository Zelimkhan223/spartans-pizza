import Slider from '../../components/slider/Slider';
import css from './HomePage.module.css';
import PizzaCard from '../../components/pizzaCard/PizzaCard';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { getPizzas } from '../../api/Api';

// const pizzaArr = [
//   {
//       id: '1',
//       name: 'Пеперони',
//       description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
//       price: '500',
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWVlZxNHxQI5YXCbL8o5_qxkf0K7Q-W9cfw&usqp=CAU",

//   },
//   {
//     id: '2',
//     name: 'Пеперони 2',
//     description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
//     price: '500',
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWVlZxNHxQI5YXCbL8o5_qxkf0K7Q-W9cfw&usqp=CAU",

// },
// ];

function HomePage() {
  const [pizzas, setPizzas] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(60);
    }, 350);

    getPizzas()
    .then((res) => setPizzas(res.data))
    .finally(() => {
      setProgress(100)
    })

    // fetch(base_url + 'pizza')
    // .then((res) => res.json())
    // .then((data) => setPizzas(data))
    // .finally(() => {
    //   setProgress(100)
    // })
  }, []);

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Slider />
        <br /> <br />
        <br /> <br />
        <section className='container'>
            <div className='title'>Пицца</div>
            <div className="pizzasWrapper">
              {pizzas.map((item) => (
                <PizzaCard key={item.id} {...item} />
              ))}
            </div>
        </section>
    </div>
  )
}

export default HomePage;