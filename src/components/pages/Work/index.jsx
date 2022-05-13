import React from 'react';
import './style.scss';

const dataImg = [
  {img: 'https://images.unsplash.com/photo-1649027421785-6827863f0891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
  , title: 'Hat'},
  {img: 'https://images.unsplash.com/photo-1652352530375-d197d63b7311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
  , title: 'Table'},
  {img: 'https://images.unsplash.com/photo-1652285952560-bbd7cc826cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
  , title: 'Flower'},
  {img: 'https://images.unsplash.com/photo-1652356520398-6b3b280a4a78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
  , title: 'Tree'},
  {img: 'https://images.unsplash.com/photo-1652339710187-ac698792edcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
  , title: 'House'},
  {img: 'https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
  , title: 'Girl'},
  {img: 'https://images.unsplash.com/photo-1652358303906-a3352f8dfc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
  , title: 'Flower'} 
]

export default function Work() {
  return (
    <div className="work">
      <div className="work__wrap">
        <div className="work__top container">
          <div className="work__top-content">
            <div className="work__title">
              <div className="work__title-line"></div>
              <span>Works.</span>
            </div>
            <div className="work__subtitle">
              things we've made
            </div>
          </div>
          <button>view all</button>
        </div>
        <div className="work__content">
          {dataImg.map((img, i) => (
            <div key={i}>
              <img className='work__img' src={img.img} />
              <div className="work__content-text">{img.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="work__line"></div>
    </div>
  )
}
