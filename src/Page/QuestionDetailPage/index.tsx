import Header from '../../Template/Header';
import Split from 'react-split';
import {
  themeLightClass,
  pageStyle,
  topStyle,
  descStyle,
  titleTagStyle,
  questionContentStyle,
  splitStyle,
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  buttonListStyle,
  themeDarkClass,
  answerInputContentStyle,
} from './style.css';
import './gutter.css';
import { Link, useParams } from 'react-router-dom';
import Tag from '../../Component/Box/TagBox';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import TextButton from '../../Component/Button/TextButton';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { useAuthStore } from '../../hooks/useStore';
import { useEffect, useState } from 'react';
import baseFontStyle from '../../styles/font.css';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { URL, URLWithParam } from '../../constants/url';
import { IProblemDetailResponseData } from '../../types/api/problem';

function QuestionDetailPage() {
  const { id } = useParams();
  const { isLogin } = useAuthStore();
  const [data, setData] = useState<IProblemDetailResponseData>();

  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
  }

  function handleSubmit() {
    return;
  }

  useEffect(() => {
    if (!id) return;
    problemApiWrapper.problemDetail(id).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <main className={`${isDark ? themeDarkClass : themeLightClass} ${pageStyle}`}>
        <div className={topStyle}>
          <div className={descStyle}>
            <div className={titleTagStyle}>
              <h1 className={baseFontStyle.title}>{data?.title}</h1>
              <ul>
                {data?.tags.map((tagName) => (
                  <Tag name={tagName} key={tagName} />
                ))}
              </ul>
            </div>
            <div className={baseFontStyle.medium}>
              {`제출 : ${data?.totalSolved}, 평균 점수 : ${data?.avgScore}점, 최고점 : ${data?.topScore}점 , 최저점 : ${data?.bottomScore}점`}
            </div>
          </div>

          <button onClick={toggleDarkMode}>{isDark ? <MoonIcon /> : <SunIcon />}</button>
        </div>
        <div className={questionContentStyle}>
          <Split
            sizes={[25, 75]}
            minSize={100}
            expandToMin={false}
            gutterSize={10}
            gutterAlign='center'
            snapOffset={30}
            dragInterval={1}
            direction='horizontal'
            cursor='col-resize'
            className={splitStyle}
          >
            <div className={contentWrapperStyle}>
              <div className={contentTitleStyle}>문제 설명</div>
              <div className={problemDescContentStyle}>{data?.description}</div>
            </div>
            <div className={contentWrapperStyle}>
              <label htmlFor='answer' className={contentTitleStyle}>
                답안 작성
              </label>
              <textarea
                id='answer'
                placeholder='답변을 입력해주세요'
                className={answerInputContentStyle}
              ></textarea>
            </div>
          </Split>
        </div>

        <div className={buttonListStyle}>
          {isLogin ? (
            <Link to={URLWithParam.LONG_PROBLEM_RESULT(id!)}>
              <TextButton
                type={BUTTON_TYPE.SUBMIT}
                theme={BUTTON_THEME.PRIMARY}
                size={BUTTON_SIZE.MEDIUM}
                onClick={handleSubmit}
              >
                제출하기
              </TextButton>
            </Link>
          ) : (
            <TextButton
              type={BUTTON_TYPE.SUBMIT}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
            >
              로그인
            </TextButton>
          )}
          <Link to={URL.PROBLEM_LIST}>
            <TextButton
              type={BUTTON_TYPE.BUTTON}
              theme={BUTTON_THEME.SECONDARY}
              size={BUTTON_SIZE.MEDIUM}
            >
              돌아가기
            </TextButton>
          </Link>
        </div>
      </main>
    </>
  );
}
export default QuestionDetailPage;
