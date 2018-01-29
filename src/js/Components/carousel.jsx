import React from 'react';


import carousel1 from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';

export class Carousel extends React.Component {
    
    constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 4
    };
  }

  next() {
    const nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    const prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }


    componentDidMount() {
        console.log('My component is about to mount');
        this.carouselSetup();


    }
    carouselSetup() {}
    
    render() {

        console.log('Home was rendered');
        return (


    <div className="container-fluid">
    <Carousel activeItem={this.state.activeItem} next={this.next} className="z-depth-1">
        <CarouselInner>
            <CarouselItem itemId="1">
                <div className="view hm-black-light">
                    <img className="d-block w-100" src={ 'public/'+carousel1 } alt="First slide" />
                    <div className="mask"></div>
                </div>
                <CarouselCaption>
                    <h3 className="h3-responsive">THE NEXT BIG THING IS HERE</h3>
                    <p>Physical currency is old news</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
                <div className="view hm-black-strong">
                    <img className="d-block w-100" src={ 'public/'+carousel2 } alt="First slide" />
                    <div className="mask"></div>
                </div>
                <CarouselCaption>
                    <h3 className="h3-responsive">THE FUTURE IS NOW</h3>
                    <p>Don't be left behind</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
                <div className="view hm-black-slight">
                    <img className="d-block w-100" src={ 'public/'+carousel3 } alt="First slide" />
                    <div className="mask"></div>
                </div>
                <CarouselCaption>
                    <h3 className="h3-responsive">INVESTING TIPS ON THE GO</h3>
                    <p>Our notification system provides you with current information and your selected cryptocurrencies</p>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
                <div className="view hm-black-light">
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                    <div className="mask"></div>
                </div>
                <CarouselCaption>
                    <h3 className="h3-responsive">Sopot Beach</h3>
                    <p>Taken june 21th by @mattonit</p>
                </CarouselCaption>
            </CarouselItem>
        </CarouselInner>
        <CarouselControl direction="prev" role="button" onClick={()=> { this.prev(); }} />
        <CarouselControl direction="next" role="button" onClick={()=> { this.next(); }} />
    </Carousel>


</div>
        );
    }

}

export default Carousel;