import React from 'react';
import styled from 'styled-components';
import TemplateItem from '../TemplateItem';

const items = [
  {
    id: 1,
    path: '/template1.png',
    title: '영원한 우리의 시작',
  },
  {
    id: 2,
    path: '/template8.png',
    title: '단정미',
  },
  {
    id: 3,
    path: '/template3.png',
    title: '나의 소울메이트에게',
  },
  {
    id: 4,
    path: '/template4.png',
    title: '끝나지 않을 행복',
  },
  {
    id: 5,
    path: '/template5.png',
    title: '엔드리스 러브',
  },
  {
    id: 6,
    path: '/template6.png',
    title: '와인빛 결혼',
  },
  {
    id: 7,
    path: '/template7.png',
    title: '오늘도 사랑스럽게',
  },
  {
    id: 8,
    path: '/template2.png',
    title: '결혼의 초안',
  },
];

const TemplateGrid = () => (
  <StyledGrid>
    {items.map((item) => (
      <TemplateItem key={item.id} id={item.id} path={item.path} title={item.title} />
    ))}
  </StyledGrid>
);

export default TemplateGrid;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 284px));
  justify-content: space-between;
  gap: 64px 0px;
  margin-bottom: 180px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 284px));
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 284px));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 100%));
  }
`;
