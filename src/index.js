import React from 'react';
import * as PropTypesEnum from 'prop-types';

export default class NgagerMeter extends React.PureComponent {
  render() {
    return (
      <div
        className="ngager-meter-container"
        style={Object.assign(
          {},
          { width: this.props.Size, height: this.props.Size, position: 'relative' },
          this.props.style
        )}
      >
        <div
          className="path"
          style={{
            width: this.props.Size,
            height: this.props.Size,
            borderRadius: this.props.Size,
            backgroundColor: this.props.BackgroundColor,
            position: 'absolute',
          }}
        ></div>

        <div
          style={
            this.props.PercentageValue > 50
              ? {
                  width: this.props.Size / 2,
                  height: this.props.Size,
                  borderLeft: `${this.props.Size / 2}px solid ${this.props.ProgressColor}`,
                  position: 'absolute',
                  borderRadius: this.props.Size,
                  transform: `rotate(${(this.props.PercentageValue * 360) / 100}deg)`,
                }
              : {
                  width: this.props.Size / 2,
                  height: this.props.Size,
                  borderLeft: `${this.props.Size / 2}px solid ${this.props.ProgressColor}`,
                  position: 'absolute',
                  borderRadius: this.props.Size,
                  transform: 'rotate(180deg)',
                }
          }
        ></div>

        <div
          style={
            this.props.PercentageValue > 50
              ? {
                  width: this.props.Size / 2,
                  height: this.props.Size,
                  borderRight: `${this.props.Size / 2 + 1}px solid ${this.props.ProgressColor}`,
                  position: 'absolute',
                  borderRadius: this.props.Size,
                  transform: 'rotate(0deg)',
                }
              : {
                  width: this.props.Size / 2,
                  height: this.props.Size,
                  borderRight: `${this.props.Size / 2 + 1}px solid ${this.props.BackgroundColor}`,
                  position: 'absolute',
                  borderRadius: this.props.Size,
                  transform: `rotate(${(this.props.PercentageValue * 360) / 100}deg)`,
                }
          }
        ></div>

        <div
          className="whitecover"
          style={{
            width: this.props.Size - this.props.Thickness * 2,
            height: this.props.Size - this.props.Thickness * 2,
            background: this.props.CenterColor,
            position: 'absolute',
            borderRadius: this.props.Size,
            left: this.props.Thickness,
            top: this.props.Thickness,
          }}
        ></div>
        {
          <div
            className="counter"
            style={{
              lineHeight: `${this.props.Size}px`,
              textAlign: 'center',
              position: 'absolute',
              width: `${this.props.Size}px`,
              height: `${this.props.Size}px`,
              fontSize: `${this.props.CounterFontSize}px`,
            }}
          >
            {this.props.label && <span className="value label">{this.props.label}</span>}
            {!this.props.label && `${this.props.PercentageValue}%`}
          </div>
        }
      </div>
    );
  }
}

NgagerMeter.propTypes = {
  Size: PropTypesEnum.number.isRequired,
  CounterFontSize: PropTypesEnum.number.isRequired,
  PercentageValue: PropTypesEnum.number.isRequired,
  ProgressColor: PropTypesEnum.string.isRequired,
  BackgroundColor: PropTypesEnum.string.isRequired,
  Thickness: PropTypesEnum.number.isRequired,
  CenterColor: PropTypesEnum.string.isRequired,
  label: PropTypesEnum.string,
  style: PropTypesEnum.instanceOf(Object),
};

NgagerMeter.defaultProps = {
  label: null,
  style: {},
};
