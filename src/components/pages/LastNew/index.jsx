import React from 'react';
import './style.scss';

export default function Lastnew() {
  return (
    <div className="lastnew">
      <div className="lastnew__wrap">
        <div className="lastnew__title">Lastest News.</div>
        <div className="lastnew__subtitle">Check out some of our news</div>
        <div className="lastnew__content">
          <div className="lastnew__box">
            <img src="https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dnJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className="lastnew__box-img" />
            <div className="lastnew__box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sapiente provident minus aut aliquid totam impedit voluptates odit eveniet laborum vero ex vitae, dolor a quia ea. Libero, perferendis id?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ex dolores minus exercitationem iste illum, atque eligendi voluptates animi quibusdam laudantium. Sapiente fuga dicta vero quas, eos officia vel aperiam.
            </div>
            <button className="lastnew__box-button">Read More</button>
          </div>
          <div className="lastnew__box">
            <img src="https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="lastnew__box-img" />
            <div className="lastnew__box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sapiente provident minus aut aliquid totam impedit voluptates odit eveniet laborum vero ex vitae, dolor a quia ea. Libero, perferendis id?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ex dolores minus exercitationem iste illum, atque eligendi voluptates animi quibusdam laudantium. Sapiente fuga dicta vero quas, eos officia vel aperiam.
            </div>
            <button className="lastnew__box-button">Read More</button>
          </div>
          <div className="lastnew__box">
            <img src="https://images.unsplash.com/photo-1648737119422-2680a7e39089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="lastnew__box-img" />
            <div className="lastnew__box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sapiente provident minus aut aliquid totam impedit voluptates odit eveniet laborum vero ex vitae, dolor a quia ea. Libero, perferendis id?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ex dolores minus exercitationem iste illum, atque eligendi voluptates animi quibusdam laudantium. Sapiente fuga dicta vero quas, eos officia vel aperiam.
            </div>
            <button className="lastnew__box-button">Read More</button>
          </div>
        </div>
      </div>
      <div className="lastnew__line"></div>
    </div>
  )
}
