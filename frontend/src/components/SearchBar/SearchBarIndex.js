import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AppContext } from '../../context/Context';

const SearchBarIndex = () => {
  const { setTag, getTagFeed } = useContext(AppContext);
  return (
    <SearchBarContainer>
      <SearchInput
        className="search-input"
        onChange={(e) => {
          setTag(e.target.value);
        }}
      />
      <SearchButton className="search-button" onClick={getTagFeed}>Search</SearchButton>
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
  @media (max-width: 767px) {
  ${tw`
mb-4
ml-0
`}
  }
`;

const SearchButton = styled.button`
  ${tw`
    ml-4
    `}
  @media (max-width: 767px) {
    ${tw`
    ml-0
    `}
  }
`;

export default SearchBarIndex;
