import css from 'components/Searchbar/Searchbar.module.css';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    imagesName: '',
  };

  handleNameChange = event => {
    this.setState({ imagesName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imagesName.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.imagesName);
    this.setState({ imagesName: '' });
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonlabel}>Search</span>
          </button>

          <input
            onChange={this.handleNameChange}
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
