import React from 'react';
import 'normalize.css';
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
    const sizing = '';
    this.state = { sizing };
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
    this.setState({ sizing: 'mobile' });
    if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
      this.setState({ sizing: 'tablet' });
    }
    if (document.body.clientWidth >= 1440) {
      this.setState({ sizing: 'desktop' });
    }
    //  this.props["size"] = this.state["sizing"];
    // console.log(document.body.clientWidth);
  }

  render() {
    const sizing = this.state;
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>AviaSales Demo FrontEnd</title>
          <link rel="canonical" href="http://localhost:3000" />
        </Helmet>
        <MainPage props={sizing.sizing} />
      </div>
    );
  }
}

export default App;
