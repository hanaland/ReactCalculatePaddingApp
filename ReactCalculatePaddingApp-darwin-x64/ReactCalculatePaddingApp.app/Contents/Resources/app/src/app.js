import React from 'react';
import { render } from 'react-dom';
import Canvas from './Canvas';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      baseWidthValue: 1000,
      columnValue: 0,
      paddingValue: 20,
      // boxSizeValue: 100, // TODO
    };
  }

  // CSS in JS
  styles() {
    return {
      wrap: {
        fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", MyYuGothicM, "游ゴシック", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif',
        textAlign: 'center',
      },
      section1: {
        margin: '0 0 2em',
      },
      previewWrap: {
        background: '#ccc',
        padding: '.5em 0 2em',
      },
      previewWidth: {
        background: '#fff',
        margin: '0 auto',
        padding: '1em 0',
        width: this.state.baseWidthValue, // TODO: 値を動的に変えたい
      },
      preview: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    };
  }

  onChangebaseWidth(e) {
    this.setState({ baseWidthValue: e.taget.value });
  }

  onChangeColumn(e) {
    this.setState({ columnValue: e.target.value });
  }

  onChangePadding(e) {
    this.setState({ paddingValue: e.target.value });
  }

  // onChangeBoxSize(e) {
  //   this.setState({ boxSizeValue: e.target.value });
  // }

  previewElement() {
    const list = [];
    const column = this.state.columnValue;

    for (let i = 0; i < column; i++) {
      const inputPadding = this.state.paddingValue;
      const totalPadding = (this.state.columnValue - 1) * inputPadding;
      const padding = totalPadding / this.state.columnValue;
      const paddingVal = padding / (this.state.columnValue - 1);
      const elemPadding = padding - (paddingVal * i);

      list.push(
        <div>
          <Canvas />
          <p>
            {'左：' + (Math.floor((padding - elemPadding) * this.state.baseWidthValue) / this.state.baseWidthValue) + 'px'}
          </p>
          <p>
            {'右：' + (Math.floor(elemPadding * this.state.baseWidthValue) / this.state.baseWidthValue) + 'px'}
          </p>
        </div>
      );
    }

    return list;
  }

  render() {
    // stylesの定義が必要
    const styles = this.styles();

    return ( // React Elementの階層は、必ず一つのルートElementから始める
      <div style={styles.wrap}>
        <div style={styles.section1}>
          <h1>カラム間のpadding余白計算</h1>
          <form>
            <p>
              <label htmlFor='baseWidth'>コンテンツの幅：</label>
              <input type='number' className='baseWidth' value={this.state.baseWidthValue} onChange={this.onChangebaseWidth.bind(this)} />px
            </p>
            <p>
              <label htmlFor='column'>カラム数：</label>
              <input type='number' className='column' value={this.state.columnValue} onChange={this.onChangeColumn.bind(this)} />
            </p>
            <p>
              <label htmlFor='padding'>カラム間の余白：</label>
              <input type='number' className='padding' value={this.state.paddingValue} onChange={this.onChangePadding.bind(this)} />px
            </p>
            {/* TODO-box: boxのサイズ可変にする
            <p>
              <label htmlFor='boxSize'>要素の大きさ：</label>
              <input type='number' className='boxSize' value={this.state.boxSizeValue} onChange={this.onChangeBoxSize.bind(this)} />px
            </p>
            */}
          </form>
        </div>

        <div style={styles.previewWrap}>
          <h2>プレビュー</h2>
          <div style={styles.previewWidth}>
            <h3>←ここがコンテンツの幅→
            <br />（各要素の大きさは100px × 100px）</h3>
            <div style={styles.preview}>
              {this.previewElement() /* TODO: keyが必要 */ }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

render(
  <App />,
  document.getElementById('app')
);
