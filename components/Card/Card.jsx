import { Link } from 'react-router-dom'
import style from './Card.module.css'
import { OrderModal } from '../OrderModal/OrderModal';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function MyCard({id,img,name,count,category,price}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
        function showModal(){
            setModalIsOpen(true);
        }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}  />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        
        <Card.Text>
        <div className="pri">
        <p>Остаток на складе : {count}</p>
        <p className='W'> Цена: {price}</p>
        <Link className="nn" to={`${id}`}>Подробнее</Link>
        </div>


        </Card.Text>
       
        
             {
              count>0 ?
              <Button className="btn" >В корзину</Button>

                
                 :
                 <Button onClick={showModal} className="btn" >Заказать</Button>
             }
     
      </Card.Body>
      <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} productName={name} />
    </Card>
  );
}
