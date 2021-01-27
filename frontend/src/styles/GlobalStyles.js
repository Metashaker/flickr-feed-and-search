import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const GlobalStyles = createGlobalStyle`

html, body {
  margin:0;
  max-width: 100%;
  overflow-x: hidden;
}

.search-input {
  ${tw`
    pr-2
    pl-2
    `}
  height: 48px;
  border: 1px solid #ffffff;
  background-color:#f2f2f2;
}

.search-button {
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    text-center
    pb-4
    pt-4
    `}
  cursor: pointer;
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
    `}
    font-size: 14px;
  }
}
`;

export default GlobalStyles;
