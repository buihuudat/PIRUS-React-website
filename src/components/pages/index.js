import React from 'react';
import Home from './Home';
import Service from './Service';
import Work from './Work';
import Testimonial from './Testimonial';
import Lastnew from './LastNew';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div>
      <Home />
      <Service />
      <Work />
      <Testimonial />
      <Lastnew />
      <Footer />
    </div>
  )
}
