import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Vanessa Romero',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '04 Jun 2019',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum condimentum lacus at consectetur. Praesent sed varius purus. Phasellus tristique tempus metus non sagittis.',
        comments: [
          {
            id: 2,
            author: {
              name: 'Juca',
              avatar: 'https://i.pravatar.cc/150?img=2'
            },
            date: '04 Jun 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum condimentum lacus at consectetur. Praesent sed varius purus. Phasellus tristique tempus metus non sagittis.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Neil Cook',
          avatar: 'https://i.pravatar.cc/150?img=3'
        },
        date: '04 Jun 2019',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum condimentum lacus at consectetur. Praesent sed varius purus. Phasellus tristique tempus metus non sagittis.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=4'
            },
            date: '04 Jun 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum condimentum lacus at consectetur. Praesent sed varius purus. Phasellus tristique tempus metus non sagittis.'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum condimentum lacus at consectetur. Praesent sed varius purus. Phasellus tristique tempus metus non sagittis.'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=6'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=7'
            },
            date: '04 Jun 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum condimentum lacus at consectetur. Praesent sed varius purus. Phasellus tristique tempus metus non sagittis.'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=8'
            },
            date: '04 Jun 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum condimentum lacus at consectetur. Praesent sed varius purus. Phasellus tristique tempus metus non sagittis.'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;