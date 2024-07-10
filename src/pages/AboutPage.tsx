import { FooterSocial } from '@/components/Footer/FooterSocial';
import { HeaderMenu } from '@/components/Header/HeaderMenu';

export function AboutPage() {
  return (
    <>
      <HeaderMenu />
      <div className="about-section">
        <div>
          <h2>About Memegen Pro</h2>
          <p>Welcome to Memegen Pro, your ultimate destination for creating memes effortlessly and with style. Whether you are looking to share a laugh with friends or convey a message in a fun and engaging way, Memegen Pro has got you covered.</p>

          <h3>What We Offer</h3>
          <p>At Memegen Pro, we believe in making meme creation simple, fun, and accessible for everyone. Our platform provides:</p>

          <div>
            <li><b>Pre-Available Templates:</b> Explore a vast collection of popular and trending meme templates that you can use instantly. From classic memes to the latest internet sensations, we have it all.</li>
            <li><b>Custom Templates:</b> Want to create something unique? Upload your own images and turn them into custom meme templates with just a few clicks.</li>
            <li><b>User-Friendly Interface:</b> Our intuitive design ensures that creating memes is a hassle-free experience. You don’t need any graphic design skills to make a meme that stands out.</li>
            <li><b>Fast and Easy Editing:</b> Add text, adjust font styles, change colors, and more. Our editing tools are designed to give you full control over your meme creation process.</li>
          </div>

          <h3>Why Choose Memegen Pro?</h3>
          <div>
            <li><b>Quality and Variety:</b> We offer a diverse range of high-quality templates, so you’ll never run out of ideas.</li>
            <li><b>Community and Sharing:</b> Join our growing community of meme enthusiasts. Share your creations and get inspired by others.</li>
            <li><b>Continuous Updates:</b> We keep our template library up-to-date with the latest trends and memes, ensuring you always have fresh content to work with.</li>
            <li><b>Support and Guidance:</b> New to meme making? Our tutorials and support team are here to help you every step of the way.</li>
          </div>

          <h3>Our Mission</h3>
          <p>Our mission is to empower everyone to express themselves through the art of meme-making. We aim to provide a platform that is both fun and functional, making it easy for anyone to create and share memorable memes.</p>
          <p>Thank you for choosing Memegen Pro. Start creating, sharing, and spreading the joy of memes today!</p>
          <p>Happy Meme Making!</p>
        </div>
      </div>
      <FooterSocial />
    </>
  );
}
