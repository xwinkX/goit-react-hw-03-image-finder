import css from 'components/Searchbar/Searchbar.module.css';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    imagesName: '',
    render: true,
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
          <button
            onClick={() => {
              this.props.updateRender(this.state.render);
            }}
            type="submit"
            className={css.button}
          >
            <span className={css.buttonlabel}>Search</span>
          </button>

          <input
            onChange={this.handleNameChange}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
