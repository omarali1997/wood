import React from "react";
import { Card } from "react-bootstrap";
import "./Laminates.css";


const Image = () => {
  const images = [
    {
      title: "Hight Pressure Laminate hpi",

      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/Laminate4.png',
      alt: 'image 2',
    },
    {
      title: "Continuous Pressure Laminate",
      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/Laminate3.png',
      alt: 'image 3',
    },
    {
      title: "Coppact Laminate",

      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/Laminate2.png',
      alt: 'image 4',
    }
  ];
  return (
    <>
      <div className="main">
        <h6>
          Laminate
        </h6>
        <img src='https://wood.digit-tips.com/wp-content/uploads/2022/12/Laminate1.png' alt='image 1' />
      </div>
      <div className="hoverImg">
        {images.map((image) => (
          <>
            <Card className="card_finishedPanel">
              <Card.Header style={{ border: 'none' }}>
                <Card.Text>
                  <h6>

                    {image.title}
                  </h6>
                </Card.Text>
              </Card.Header>
              <Card.Body style={{ border: 'none' }}>
                <Card.Img src={image.src} alt={image.alt}>
                </Card.Img>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    </>

  );
}

export default Image;

