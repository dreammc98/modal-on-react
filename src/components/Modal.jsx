import React, { useState } from 'react';
import './modal.css'


const Modal = () => {
  const [state, setState] = useState(false);


  return (
    <div className='container'>
      <button onClick={() => setState(true)} className={`btn__modal btn  ${state ? 'btn__modal-passive' : ''}`}>Click</button>
      <div className={`container-modal ${state ? '' : 'animation'}`}>
        <button onClick={() => setState(false)} className="modal__close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" /></svg></button>
        <div className="modal">
          <div className="modal__head">
            <h2>Оформление заказа</h2>
            <span>Заказ № 3456 67</span>
          </div>
          <div className="modal__content">
            <p className='content__count'>Товаров в заказе: <span>3 шт</span></p>
            <p className="content__sum">Общая сумма заказа: <span>568 789 ₽</span></p>
          </div>
          <form className="modal__costomer">
            <div className="costomer">
              <p >Ваше имя</p>
              <input className='costomer__input' type="name" />
            </div>
            <div className="costomer">
              <p >Номер телефона</p>
              <input type="tel" className="costomer__input" placeholder='+7 (___)___-__-__' />
            </div>
            <div className="costomer">
              <p >Электронная почта</p>
              <input type="email" className="costomer__input" placeholder='post@gmail.com' />
            </div>
            <button className="costomer__btn btn">Оформить заказ</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Modal;