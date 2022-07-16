import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';
import { useNavigate } from 'react-router-dom';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const NewsList = ({ category }) => {
  const { loading, response, error } = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7e70a6000c824227b58c2d41158ef04c`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 꼭 이렇게 분기 처리를 해야한다.
  if (!response) {
    return null;
  }

  if (error) {
    return (
      <NewsListBlock>
        <h1>에러 발생!</h1>
      </NewsListBlock>
    );
  }

  const { articles } = response?.data;
  // 오호 프로젝트 할 때 나도 url을 key로 사용했었는데 좋은 판단이 맞았다.
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
