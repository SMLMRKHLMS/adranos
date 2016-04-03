import $ from 'jquery';
import 'slick-carousel';

class Carousel extends React.Component {

  componentDidMount() {
    const { root } = this.refs;
    $(root).slick(this.props.config);
  }

  render() {
    return (
      <div
        className="carousel"
        ref="root">
        { this.props.children }
      </div>
    );
  }
}

export default Carousel;
