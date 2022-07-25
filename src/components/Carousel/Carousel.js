
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useStyles from './styles'

import { useLayoutEffect } from 'react';


function useMediaQuery() {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}

function ControlledCarousel(props) {

  const [width] = useMediaQuery();
  const [index, setIndex] = useState(0);
  const classes = useStyles();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  return width < 1000 ? (
    <Carousel className={classes.mobile} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={classes.mobile}  >
        <img
          className={classes.mobile}
          src={props.img}
          alt="First slide"

        />
        <Carousel.Caption >
          <text className={classes.caption}>Free Account Creation</text>
          <p className={classes.desc}> <Link className={classes.link} to={'./auth'}>Register</Link> in minutes and upload your deals!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.mobile} >
        <img
          className={classes.mobile}
          src={props.img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <text className={classes.caption}>Upload Now.</text>
          <p className={classes.desc}><Link className={classes.link} to={'./Formpage'}>Upload</Link>  and browse deals for free.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.mobile} >
        <img
          className={classes.mobile}
          src={props.img3}
          alt="Third slide"
        />

        <Carousel.Caption >
          <text className={classes.caption}>Learn More.</text>
          <p className={classes.desc}>
            <Link className={classes.link} to={'./about'}>Check out</Link>who we are!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


  ) :(


      <Carousel className={classes.reg} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className={classes.reg}  >
          <img
            className={classes.reg}
            src={props.img}
            alt="First slide"

          />
          <Carousel.Caption >
            <text className={classes.caption}>Free Account Creation</text>
            <p className={classes.desc}> <Link className={classes.link} to={'./auth'}>Register</Link> in minutes and upload your deals!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.reg} >
          <img
            className={classes.reg}
            src={props.img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <text className={classes.caption}>Upload Now.</text>
            <p className={classes.desc}><Link className={classes.link} to={'./Formpage'}>Upload</Link>  and browse deals for free.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.reg} >
          <img
            className={classes.reg}
            src={props.img3}
            alt="Third slide"
          />

          <Carousel.Caption >
            <text className={classes.caption}>Learn More.</text>
            <p className={classes.desc}>
              <Link className={classes.link} to={'./about'}>Check out</Link>who we are!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    )
}
export default ControlledCarousel