import css from './Header.module.css';
import logo from '../../assets/logo.png';
import Button from '../button/Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    const [isModal, setModal] = useState(false)

    return (
        <div className={css.wrapper + " container"}>
            <header>
                <Link to='/'>
                    <img width={"200px"} src={logo} alt="PIZZA" />
                </Link>
            </header>
            <nav>
                <Link to="/">Пиццы</Link>
                <Link to="/contacts">Контакты</Link>
                <Link to="/aboutus">О нас</Link>
                <Button onClick={() => setModal(!isModal)}  title={"В корзину"} />
                 {
                   isModal ? <Button title={"В корзину 2"} variant={'disabled'} /> : null
                 }
                
            </nav>
        </div>
    )
}

export default Header;