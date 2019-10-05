# ngager-meter

> ReactJS Date Range Picker component

[![NPM](https://img.shields.io/npm/v/ngager-meter.svg)](https://www.npmjs.com/package/ngager-meter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ngager-meter
```

## Usage

```jsx
import React, { Component } from 'react'

import NgagerMeter from 'ngager-meter'

class Example extends Component {
  render () {
    return (
      <NgagerMeter
        Size={80}
        CounterFontSize={20}
        ProgressColor="#6fa0ff"
        BackgroundColor="#efefef"
        PercentageValue={this.props.uploadProgress}
        Thickness={5}
        CenterColor="white"
      />
    )
  }
}
```

## License

MIT © [ngager-group](https://github.com/ngager-group)
