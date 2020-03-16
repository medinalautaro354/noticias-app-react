import React, { Component } from "react";
import New from "./New";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class News extends Component {
  render() {
    return (
      <div className="row">
        <TransitionGroup>
          {this.props.articles.map(article => (
            <CSSTransition key={article.url} classNames="fade" timeout={500}>
              <New article={article} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

News.propTypes = {
  articles: PropTypes.array.isRequired
};
export default News;
