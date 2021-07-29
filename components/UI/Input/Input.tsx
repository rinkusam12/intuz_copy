import React, { Component } from 'react';
import classes from './styles.module.scss';


interface Option {
  displayValue: string;
  value: string;
};

interface Files {
  id: string;
  name: string;
}

interface InputProps {
  elementType: string;
  shouldValidate: string;
  elementConfig: {
    options: Option[];
    id: string;
  };
  touched: string;
  invalid: string;
  value: string;
  changed: () => void;
  inputContainerClass: string;
  label: string;
  removeFile: () => void;
  files: Files[];
  style?: React.CSSProperties;
  getFileList: () => void;
  multiple: boolean;
}

export default class Input extends Component<InputProps, {}> {

  fileUpload: React.RefObject<HTMLInputElement>

  constructor(props) {
    super(props)
    this.fileUpload = React.createRef();
    this.showFileUpload = this.showFileUpload.bind(this);
    this.state = {
      files: {}
    };
  }

  showFileUpload(event) {
    this.fileUpload.current.click();
  }

  render() {
    let inputElement = null;
    const inputClasses = [classes.Input];

    if (this.props.invalid && this.props.shouldValidate && this.props.touched) {
      inputClasses.push(classes.Invalid);
    }

    switch (this.props.elementType) {
      case ('input'):
        inputElement = <input className={inputClasses.join(' ')} {...this.props.elementConfig} value={this.props.value} onChange={this.props.changed} style={this.props.style} />;
        break;
      case ('textarea'):
        inputElement = <textarea className={inputClasses.join(' ')} {...this.props.elementConfig} value={this.props.value} onChange={this.props.changed} style={this.props.style} />;
        break;
      case ('select'):
        inputElement = (
          <select className={inputClasses.join(' ')} value={this.props.value} onChange={this.props.changed} style={this.props.style}>
            {this.props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
        );
        break;
      case ('file'):
        inputElement =
          <input ref={this.fileUpload} style={{ 'display': 'none' }} type="file" className={inputClasses.join('')} {...this.props.elementConfig} value={this.props.value} onChange={this.props.getFileList} multiple={this.props.multiple ? true : false} />
        break;
      default:
        inputElement = <input className={inputClasses.join(' ')} {...this.props.elementConfig} value={this.props.value} onChange={this.props.changed} style={this.props.style} />;
    }
    return (
      <div className={`${classes.InputContainer} ${this.props.inputContainerClass}`}>
        {inputElement}
        <label htmlFor={this.props.elementConfig.id} dangerouslySetInnerHTML={{ __html: this.props.label }}></label>

        {this.props.elementType == 'file' ? <img src={"/static/Images/icons/attech_img.png"} alt="img_upload" id="fileImg" onClick={this.showFileUpload} /> : ''}

        {this.props.files && this.props.files.length > 0 ?
          <ul>
            {this.props.files.map((file, index) => {
              return file === null ? '' : (
                <li className={classes.fileList} key={index}>
                  <span onClick={this.props.removeFile} id={index.toString()}></span>
                  {file.name}
                </li>
              )
            })}
          </ul> : ''}
      </div>
    )
  }
}

