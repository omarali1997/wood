import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Finished.css";

const Image=()=> {
  const [showDetails, setShowDetails] = useState(false);
  const images = [
    {
      title: document.querySelectorAll('html')[0].lang==='en'?"Melamine ":"ميلانين",
      src:  document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/1-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/1-imgAR.png',
      alt: "image 1",
      details:document.querySelectorAll('html')[0].lang==='en'? 'https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/2AR.png'
    },
    {
      title: document.querySelectorAll('html')[0].lang==='en'?"Paper over laid":"الواح ورق للديكور",

      src: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/2-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/2-imgAR.png',
        alt: 'image 2',
        details: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/2.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/2AR.png'
      },
    {
      title: document.querySelectorAll('html')[0].lang==='en'?"Veneered":"الواح بقشرة",

      src: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/3-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/3-imgAR.png',
        alt: 'image 3',
        details: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/3.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/3AR.png'
      },
    {
      title: document.querySelectorAll('html')[0].lang==='en'?"High glass + super matt":"الواح عالية اللمعان و الواح ذات لمعة مطفئة",

      src: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/4-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/4-imgAR.png',
        alt: 'image 4',
        details: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
    {
      title: document.querySelectorAll('html')[0].lang==='en'?"Moulded door skin":"طبع ابواب",

      src: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/5-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/5-imgAR.png',
        alt: 'image 5',
        details: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
    {
      title: document.querySelectorAll('html')[0].lang==='en'?"Polyester faced panel":"الواح ملبس بولستر",

      src: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/6-img.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/6-imgAR.png',
        alt: 'image 6',
        details: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/6.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/6AR.png'
      },
    {
      title: document.querySelectorAll('html')[0].lang==='en'?"Film faced plywood":"فيرفس",

      src: document.querySelectorAll('html')[0].lang==='en'?'https://wood.digit-tips.com/wp-content/uploads/2022/09/7.png':'https://wood.digit-tips.com/wp-content/uploads/2022/09/7AR.png',
      alt: "Film faced plywood",
      details: null,
    },
    // Add more images here
  ];
  return (
    <div className="hoverImg">
    {images.map((image) => (
      <>
      <Card className="card_finishedPanel">
        <Card.Header style={{border: 'none'}}>
          <Card.Text>
            <h6>

          {image.title}
            </h6>
            </Card.Text> 
        </Card.Header>
        <Card.Body style={{border: 'none'}}>
        <Card.Img src={image.src} alt={image.alt}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        ></Card.Img>
       
        </Card.Body>
        {showDetails?(
          <Card.Footer style={{border: 'none'}}>
          {image.details != null ? <Card.Img src={image.details} alt={image.alt}></Card.Img>: ""}
        

        </Card.Footer>
        ):""}
      </Card>
      {/* <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          details={image.details != null ? image.details : ""}
        /> */}
      </>
    ))}
  </div>
  
  );
}

export default Image;

