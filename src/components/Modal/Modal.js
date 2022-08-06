import css from 'components/Modal/Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
