import css from 'components/Modal/Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
  handelClickEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handelClickEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelClickEscape);
  }

  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.img} alt="" />
          <button type="button" onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
