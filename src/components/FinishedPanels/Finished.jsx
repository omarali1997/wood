import React from "react";
import './Finished.css'


function Image({ src, alt, details }) {
    const [showDetails, setShowDetails] = React.useState(false);
  
    return (
      <div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <img src={src} alt={alt} />
        {showDetails && <div><img src={details} alt={alt} /></div>}
      </div>
    );
  }
  
  // Parent component
  function ImageGallery() {
    const images = [
      {

        src:  document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/1-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/1-imgAR.png',
        alt: 'image 1',
        details:document.querySelectorAll('html')[0].lang=='en'? 'https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/2AR.png'
      },
      {
        src: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/2-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/2-imgAR.png',
        alt: 'image 2',
        details: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/2AR.png'
      },
      {
        src: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/3-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/3-imgAR.png',
        alt: 'image 3',
        details: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/3.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/3AR.png'
      },
      {
        src: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/4-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/4-imgAR.png',
        alt: 'image 4',
        details: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
      {
        src: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/5-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/5-imgAR.png',
        alt: 'image 5',
        details: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
      {
        src: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/6-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/6-imgAR.png',
        alt: 'image 6',
        details: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/6.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/6AR.png'
      },
      {
        src: document.querySelectorAll('html')[0].lang=='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/7.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/7AR.png',
        alt: null,
        // details: 'Image 2 details'
      },
      // Add more images here
    ];
  
    return (
      <div className="hoverImg" >
        {images.map(image => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            details={image.details}
          />
        ))}
      </div>
    );
  }
  export default ImageGallery;
