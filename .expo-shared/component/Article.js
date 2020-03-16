import React, { Component } from 'react';

const Article = ({ article }) =>
  <view>
    
      <text>{article.title}</text>
      <text>{article.content}</text>
      <Image
            style={{width: 50, height: 50}}
            source={{uri: {article.cover.url}}} />
          
  </view>
;

export default Article;
         
     