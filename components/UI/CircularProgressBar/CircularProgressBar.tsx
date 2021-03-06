import React from 'react';

interface CircularProgressBarProps {
  sqSize: number;
  strokeWidth: number;
  percentage: number;
  value: string;
  strokecolor: string;
}


class CircularProgressBar extends React.Component<CircularProgressBarProps, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public static defaultProps = {
    sqSize: 200,
    strokeWidth: 10,
    percentage: 5
  };

  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      <svg
        width={this.props.sqSize}
        height={this.props.sqSize}
        viewBox={viewBox}>
        <circle
          className="circle-background"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`} />
        <circle
          className="circle-progress"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }} />
        <text
          className="circle-text"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle">
          {`${this.props.value}`}
        </text>
        <style jsx>
          {`
                #progressInput {
                    margin: 20px auto;
                    width: 30%;
                    }

                    .circle-background,
                    .circle-progress {
                    fill: none;
                    }

                    .circle-background {
                    stroke: #ddd;
                    }

                    .circle-progress {
                    stroke: ${this.props.strokecolor};
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    }

                    .circle-text {
                    font-size: 3em;
                    font-weight: 500;
                    fill: #7d7d7d;
                    }
                
                `}
        </style>
      </svg>
    );
  }
}

export default CircularProgressBar