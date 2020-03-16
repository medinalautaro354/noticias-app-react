import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    category: ""
  };

  categoryRef = React.createRef();

  sendCategory = e => {
    e.preventDefault();

    let category = this.categoryRef.current.value;

    this.props.getNews(category);
  };

  render() {
    return (
      <div className="search-engine row">
        <div className="col s12 m8 offset-m2">
          <form onSubmit={this.sendCategory}>
            <h2>Filtrar noticias por categoria</h2>
            <div className="input-field col s12 m8">
              <select ref={this.categoryRef}>
                <option value="general" defaultValue>
                  General
                </option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="business">Negocios</option>
                <option value="health">Salud</option>
                <option value="technology">Tecnologia</option>
              </select>
            </div>
            <div className="input-field col s12 m4 send">
              <input
                type="submit"
                className="btn amber darken-2"
                value="Buscar"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  getNews: PropTypes.func.isRequired
};
export default Form;
