import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import TemplateItem from '../TemplateItem';

const items = [
  {
    preview: (
      <Image src="/template1.png" width={284} height={615} alt="영원한 우리의 시작" />
    ),
    title: '영원한 우리의 시작',
  },
  {
    preview: <Image src="/template2.png" width={284} height={615} alt="결혼의 초안" />,
    title: '결혼의 초안',
  },
  {
    preview: (
      <Image src="/template3.png" width={284} height={615} alt="나의 소울메이트에게" />
    ),
    title: '나의 소울메이트에게',
  },
  {
    preview: (
      <Image src="/template4.png" width={284} height={615} alt="끝나지 않을 행복" />
    ),
    title: '끝나지 않을 행복',
  },
  {
    preview: <Image src="/template5.png" width={284} height={615} alt="엔드리스 러브" />,
    title: '엔드리스 러브',
  },
  {
    preview: <Image src="/template6.png" width={284} height={615} alt="와인빛 결혼" />,
    title: '와인빛 결혼',
  },
  {
    preview: (
      <Image src="/template7.png" width={284} height={615} alt="오늘도 사랑스럽게" />
    ),
    title: '오늘도 사랑스럽게',
  },
  {
    preview: <Image src="/template8.png" width={284} height={615} alt="단정미" />,
    title: '단정미',
  },
];

const TemplateGrid = () => (
  <StyledGrid>
    {items.map((item, idx) => (
      <TemplateItem key={idx} preview={item.preview} title={item.title} />
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
`;
