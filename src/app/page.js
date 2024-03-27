import './globals.css'
import Image from 'next/image';
import logo from '../../public/Logo.svg'
import banner_img from '../../public/banner-img.svg'
export default function Home() {
  return (
    <>
    <div className="container">
      <header>
        <div className="logo">
        <Image
        src={logo}
        />
        </div>
        <nav>
          <div className="navbar">
            <a href="#">Headphones</a>
            <a href="#">Speakers</a>
            <a href="#">Backstage</a>
            <a href="#">Studio</a>
            <a href="#">Accessories</a>
          </div>
          <button className="btn">Login</button>
        </nav>
      </header>
      <div className="banner">
        <div className="info">
          <h1>Build your own wall of sound.</h1>
          <p>Winners aren’t made overnight. Over 50 years of sound and design expertise has been distilled into each and every Marshall speaker, bringing that big stage presence home for your listening enjoyment.</p>
          <button className="btn">View All Products</button>
        </div>
        <Image
        src={banner_img}
        />
      </div>
    </div>
    </>
  );
}
