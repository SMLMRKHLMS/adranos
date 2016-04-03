import Footer from './../Footer/Footer';
import Header from './../Header/Header';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Header />
        <main className="main">
          { this.props.children }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Content;
