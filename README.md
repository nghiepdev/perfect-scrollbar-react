# PERFECT-SCROLLBAR-REACT

A wrapper for [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar) to React Component.

[![NPM version](https://img.shields.io/npm/v/perfect-scrollbar-react.svg)](https://www.npmjs.com/package/perfect-scrollbar-react)
[![NPM monthly download](https://img.shields.io/npm/dm/perfect-scrollbar-react.svg)](https://www.npmjs.com/package/perfect-scrollbar-react)

## Demo

http://perfect-scrollbar-react.surge.sh

## Installation

To install the stable version you can use:

```sh
$ yarn add perfect-scrollbar-react
```

## Usage (More detail [examples](#examples))

* Just only add one custom css to `container` for keep safe your design layout

```js
import Scrollbar from 'perfect-scrollbar-react';
import 'perfect-scrollbar-react/dist/style.min.css';
```

```css
.container-data {
  display: flex;
  height: 200px; // optional or max-height: 200px;
}
```

* Use all `Options` and `Events` of [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar#options)

```jsx
...
<Scrollbar
  options={{ minScrollbarLength: 50 }}
  innerRef={node => (this.scrollbar = node)}
/>

...
componentDidMount() {
  if (this.scrollbar) {
    this.scrollbar.element.addEventListener('ps-scroll-y', () =>
      console.log('scroll-y')
    );
  }
}
...
```

* Switch native scrollbars for mobile devices

```jsx
const isMobile = condition && condition;

<Scrollbar enable={!isMobile} />;
```

## Examples

### Original code:

```js
...
render() {
  return
  <div className="App">
    <div className="list-data">
      {Array(20)
        .fill(1)
        .map((value, index) => <div key={index}>{value + index}</div>)}
    </div>
  </div>
}
...
```

### Sample 1: (Add custom css to container)

```js
  import Scrollbar from 'perfect-scrollbar-react';

  ...
  render() {
    return
    <div className="App">

      <div
        className="list-data"
        style={{ display: 'flex', maxHeight: '200px' }}
      >
        <Scrollbar>
          {[...Array(20)
            .keys()]
            .map((value, index) => <div key={index}>{value + index}</div>)}
        </Scrollbar>
      </div>

    </div>
  }
  ...
```

### Sample 2: (Create a new container)

```js
  import Scrollbar from 'perfect-scrollbar-react';

  ...
  render() {
    return
    <div className="App">

      <div style={{ display: 'flex', maxHeight: '200px' }}>
        <Scrollbar>
          <div className="list-data">
            {[...Array(20)
              .keys()]
              .map((value, index) => <div key={index}>{value + index}</div>)}
          </div>
        </Scrollbar>
      </div>

    </div>
  }
  ...
```

### Sample 3: (Wrong way)

```js
  import Scrollbar from 'perfect-scrollbar-react';

  ...
  render() {
    return
    <div className="App">

      <div className="list-data">
        <Scrollbar>
          {[...Array(20)
            .keys()]
            .map((value, index) => <div key={index}>{value + index}</div>)}
        </Scrollbar>
      </div>

    </div>
  }
  ...
```

## License

MIT © [Nghiệp](http://nghiepit.pro)
