import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SearchBarIndex = () => {
  console.log('wa');
  return (
    <SearchBarContainer>
      <SearchInput />
      <SearchButton>Search</SearchButton>
    </SearchBarContainer>
  );
};
const SearchBarContainer = styled.div`
${tw`
w-full
pb-10
flex
flex-row
items-center
justify-center
`}
@media (max-width: 767px) {
  ${tw`
flex-col
`}
}
`;
const SearchInput = styled.input`
  ${tw`
    pr-2
    pl-2
    `}
  height: 48px;
  border: 1px solid #ffffff;
  background-color:#f2f2f2;
  @media (max-width: 767px) {
  ${tw`
mb-4
ml-0
`}
  }
`;
const SearchButton = styled.button`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    text-center
    pb-4
    pt-4
    ml-4
    `}
  border-style: none;
  color: #fff;
  width: 100px;
  background-color:#808080;
  font-size: 16px;
  transition: all 0.5s ease-in-out;
  :hover {
    background-color: #a6a6a6;
  }
  @media (max-width: 767px) {
    ${tw`
    pb-3
    pt-3
    ml-0
    `}

    font-size: 14px;

  }
`;

export default SearchBarIndex;
