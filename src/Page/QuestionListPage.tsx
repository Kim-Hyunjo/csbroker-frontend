/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SearchInputBox from '../Component/Box/InputBox/SearchInputBox';
import TextBox from '../Component/Box/TextBox';
import Dropdown from '../Component/Utils/Dropdown';
import Slider from '../Component/Utils/Slider';
import { TAGLIST, TAGTYPELIST } from '../constants';
import { listData } from '../data';
import Header from '../Template/Header';
import { IQuetionListElement } from '../types';

function QuestionListPage() {
  return (
    <div>
      <Header />
      <Slider />
      <main css={pageMainStyle}>
        <aside css={asideStyle}>
          <SearchInputBox />
          <div css={filterStyle}>
            <div css={filterTitleStyle}>필터</div>
            <div css={dropdownListStyle}>
              {TAGTYPELIST.map((tagtype) => (
                <Dropdown {...TAGLIST[tagtype]} key={tagtype} />
              ))}
            </div>
          </div>
        </aside>

        <div css={questionListStyle}>
          {listData.map((e: IQuetionListElement) => (
            <TextBox
              title={e.title}
              numberSolved={e.numberSolved}
              averageScore={e.averageScore}
              tag={e.tag}
              key={e.id}
              id={e.id}
              css={listElementStyle}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

const pageMainStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
`;

const asideStyle = css`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;

  left: 70px;
  top: 624px;
`;

const filterStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 284px;
  height: fit-content;

  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 10px;

  padding: 20px;
`;

const filterTitleStyle = css`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  color: #000000;
`;

const dropdownListStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const questionListStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 50px;
  grid-auto-rows: minmax(100px, auto);
`;

const listElementStyle = css`
  grid-column: 1 / 2;
  grid-row: 1;
`;

export default QuestionListPage;
