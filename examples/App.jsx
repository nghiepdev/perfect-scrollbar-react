import React from 'react';

import Scrollbar from '../index';

class App extends React.Component {
  state = {
    enable: true,
    data: Array(40).fill(1),
  };

  toggle = () => {
    this.setState(prevState => ({
      enable: !prevState.enable,
    }));
  };

  addOne = () => {
    this.setState(prevState => ({
      data: [Math.random(), ...prevState.data],
    }));
  };

  render() {
    const { data, enable } = this.state;

    return (
      <div className="App">
        <h1>PERFECT-SCROLLBAR-REACT</h1>

        <h4 className="text-center">
          A wrapper for{' '}
          <a
            href="https://github.com/noraesae/perfect-scrollbar"
            target="_blank"
          >
            perfect-scrollbar
          </a>{' '}
          to React Component.
        </h4>

        <button onClick={this.toggle}>{enable ? 'Off' : 'On'}</button>
        <div
          className="sample-container"
          style={{ display: 'flex', maxHeight: '200px', marginTop: 0 }}
        >
          <Scrollbar
            innerRef={node => (this.scrollbar = node)}
            enable={this.state.enable}
          >
            {Array(20)
              .fill(1)
              .map((value, index) => <div key={index}>{value + index}</div>)}
          </Scrollbar>
        </div>

        <div
          style={{ display: 'flex', maxHeight: '250px', background: '#fff' }}
        >
          <Scrollbar options={{ minScrollbarLength: 50 }}>
            <div className="sample-container-2">
              {data.map((value, index) => (
                <div key={index}>{value + index}</div>
              ))}
            </div>
          </Scrollbar>
        </div>
        <button onClick={this.addOne}>Add one</button>
      </div>
    );
  }

  componentDidMount() {
    if (this.scrollbar) {
      this.scrollbar.element.addEventListener('ps-scroll-y', () =>
        console.log('scroll-y')
      );
    }
  }
}

export default App;
