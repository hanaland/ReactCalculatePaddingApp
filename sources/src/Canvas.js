import React from 'react';
// import App from './app'; // TODO

class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const context = this.refs.canvas.getContext('2d');
    context.fillRect(0, 0, 100, 100);
  }

  render() {
    return <canvas ref='canvas' width={100} height={100} />;
  }
}

export default Canvas
