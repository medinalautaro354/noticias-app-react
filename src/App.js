import React from 'react';
import Header from './components/Header';
import {baseUrl, apiKey} from './config/config';
import News from './components/News';
import Form from './components/Form';

class App extends React.Component{

  state = {
    articles: [],

    }

  componentDidMount(){
    this.getNews();
  }
  
  getNews = (category = 'general') =>{
    let url = `${baseUrl}v2/top-headlines?country=ar&category=${category}&apiKey=${apiKey}`
    
    fetch(url)
    .then(response =>{
      return response.json();
    })
    .then(body =>{
      let articles = body.articles;

      this.setState({
        articles
      })
    })
  }

  render(){
    return (
      <div className='container-app'>
        <Header title='Noticias APP React'/>

        <div className='container white news-container'>
          <Form getNews = {this.getNews}/>
          <News articles={this.state.articles}/>
        </div>
        <p></p>
      </div>
    )
  }
}

export default App;
