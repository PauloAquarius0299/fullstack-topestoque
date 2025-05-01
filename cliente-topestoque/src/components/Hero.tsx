
import ImagePreviews from './ImagePreviews';
import  image1  from '../assets/hero.png';
import  image2  from '../assets/hero1.png';
import  image3  from '../assets/hero2.png';

const propertyImages = [
    image1,
    image2,
    image3,
  ];

const Hero = () => {
  return (
    <section className="mb-16">
    <div className="rounded-xl overflow-hidden shadow-lg">
      <ImagePreviews images={propertyImages} />
    </div>
  </section>
  )
}

export default Hero