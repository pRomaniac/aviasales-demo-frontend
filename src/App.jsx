import 'normalize.css';
/* import font for offline working */
// import './fonts.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import MainPage from './MainPage';

/*
const App = () => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>AviaSales Demo FrontEnd</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <MainPage />
  </div>
);
*/
class App extends React.Component {
  constructor(...args) {
    super(...args);
    const size = 'mobile';
    this.state = { size };
  }

  componentDidMount() {
    window.addEventListener('load', this.ContainerResize.bind(this));
    window.addEventListener('resize', this.ContainerResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.updateDimensions.bind(this));
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  ContainerResize() {
    this.setState({ size: 'mobile' });
    if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
      this.setState({ size: 'tablet' });
    }
    if (document.body.clientWidth >= 1440) {
      this.setState({ size: 'desktop' });
    }
    //  this.props["size"] = this.state["sizing"];
    // console.log(document.body.clientWidth);
  }

  render() {
    const dsize = this.state;
    const { size } = dsize;
    console.log('render', size);
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>AviaSales Demo FrontEnd</title>
          <link rel="canonical" href="http://localhost:3000" />
        </Helmet>
        <MainPage size={size} />
      </div>
    );
  }
}

export default App;
