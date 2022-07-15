import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';

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
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7e70a6000c824227b58c2d41158ef04c`,
        );
        setArticles(data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
    // 의존성 배열 안 넣어주면 데이터 요청을 계속 해서 응답을 계속 불러온다.
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 꼭 이렇게 분기 처리를 해야한다.
  if (!articles) {
    return null;
  }

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
