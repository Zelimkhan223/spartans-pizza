import { useState } from 'react';
import Button from '../../components/button/Button';
import css from './CreatePizzaPage.module.css';
import { useNavigate } from 'react-router-dom';
import { createPizza } from '../../api/Api';

function CreatePizzaPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [isSending, setSending] = useState(false);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setSending(true);

    const data = {
      name,
      price,
      image,
      description,
    };
    createPizza(data)
    .finally(() => {
      setSending(false)
    })
    .then((res) => {
      if (res.status === 201) {
        navigate('/admin');
      }
    })
  }

  return (
    <div className="container">
      <h2 className={css.title}>Создать продукт</h2>
      <form onSubmit={submit} className={css.form}>
        <label className={css.label}>
          <div>Название</div>
          <input value={name} onChange={(e) => setName(e.target.value)} className={css.input} type="text" placeholder="Название продукта" />
        </label>
        <label className={css.label}>
          <div>Цена</div>
          <input value={price} onChange={(e) => setPrice(e.target.value)} className={css.input} type="number" placeholder="Цена продукта" />
        </label>
        <label className={css.label}>
          <div>Картинка</div>
          <input value={image} onChange={(e) => setImage(e.target.value)} className={css.input} type="text" placeholder="Картинка продукта" />
        </label>
        <label className={css.label}>
          <div>Описание</div>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={css.input} type="text" placeholder="Описание продукта" />
        </label>
        <Button
        variant={isSending ? 'disabled' : ''} 
        disabled={isSending}  
        title={isSending ? 'Создание...' : 'Создать'} 
        type="submit" 
        />
      </form>
    </div>
  )
}

export default CreatePizzaPage