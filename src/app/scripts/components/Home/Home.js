import Carousel from './../Carousel/Carousel';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slides: [{
        subtitle: 'Engineering Enhanced Performance and a Cleaner Tomorrow',
        image: require('./../../../images/shuttle.jpg'),
        text: 'Adranos Energetics LLC develops propellants, explosives, and other energetic materials for use in space and military platforms. Adranos is currently developing a cost-effective solid rocket propellant that is more efficient, more powerful, and better for the environment than traditional solid rocket propellants.'
      },{
        subtitle: 'For Our Troops',
        image: require('./../../../images/troops.jpg'),
        text: 'Extended missile range and enhanced explosive capacity will provide a significant competitive advantage to US military operations.'
      },{
        subtitle: 'For Our Future',
        image: require('./../../../images/environment.jpg'),
        text: 'The elimination of toxic hydrochloric acid emissions characteristic of traditional fuels will preserve the environment and prevent ozone depletion.'
      },{
        subtitle: 'For the Beyond',
        image: require('./../../../images/space.jpg'),
        text: 'Superior fuel efficiency will enable private space exploration companies and satellite companies to launch greater payloads to orbit at a reduced cost.'
      }],
      title: 'Next Generation Solid Rocket Propellant'
    };
  }

  render() {
    return (
      <div className="page home">
        <div className="title">
          <h1>{ this.state.title }</h1>
        </div>
        <Carousel config={{
          "arrows": false,
          "autoplay": true,
          "autoplaySpeed": 5000,
          "dots": true,
          "infinite": true,
          "speed": 1000,
          "useCSS": true,
          "useTransform": true }}>
          { this.state.slides.map((slide, i) => {
            return (
              <div
                className="slide"
                key={ i }
                style={{ backgroundImage: `url('${ slide.image }')` }}>
                <div className="slide-content">
                  <h2>{ slide.subtitle }</h2>
                  <p>{ slide.text }</p>
                </div>
              </div>
            );
          }) }
        </Carousel>
      </div>
    );
  }
}

export default Home;
