import React from 'react';
import Articles from '../../../api/articles/collection';
import FlipMove from 'react-flip-move'

import ArticlesListItem from '../article/ArticlesListItem';
 
export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    this.articlesTracker = Tracker.autorun(() => {
      Meteor.subscribe('articles');
      const articles = Articles.find({}).fetch();
      this.setState({ articles });
    });
  }
  onLogout = () => {
    Accounts.logout();
  }
  renderArticleListItem () {
    return this.state.articles.map((article) => {
      return <ArticlesListItem key={article._id} {...article} />
    })
  }
  componentWillUnmount() {
    this.articlesTracker.stop();  
  }
  render() {
    const deleteButton = <button onClick={this.removeArticle}></button>

    if (isLoading) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderArticleListItem()}
        </FlipMove>
      </div>
    )
  }
}