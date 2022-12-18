import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Finished.css";

const Image=()=> {
  const [showDetails, setShowDetails] = useState(false);
  const images = [
    {
      title: "Melamine ",
      src:  'https://wood.digit-tips.com/wp-content/uploads/2022/12/Melamine.png',
      alt: "image 1",
      details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/1.png'
    },
    {
      title: "Paper over laid",

      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/paper-over-laid.png',
        alt: 'image 2',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/1.png'
      },
    {
      title: "Veneered",
      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/veneered.png',
      alt: 'image 3',
      details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/3.png'      },
    {
      title:"High glass + super matt",

      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/High-glass-super-matt.png',
        alt: 'image 4',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
    {
      title:"Moulded door skin",

      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/Moulded-door-skin.png',
        alt: 'image 5',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/5.png'
      },
    {
      title: "Polyester faced panel",

      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-24-at-3.19.53-PM.jpeg',
        alt: 'image 6',
        details: 'https://wood.digit-tips.com/wp-content/uploads/2022/09/6.png'
      },
    {
      title: "Film faced plywood",

      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/Film-faced-plywood.png',
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

