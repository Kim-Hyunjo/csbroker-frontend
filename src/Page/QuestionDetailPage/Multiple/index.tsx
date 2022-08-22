import Header from '../../../Template/Header';
import Split from 'react-split';
import {
  themeLightClass,
  pageStyle,
  topStyle,
  descStyle,
  questionContentStyle,
  splitStyle,
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  buttonListStyle,
  themeDarkClass,
  choiceListStyle,
  choiceWrapperStyle,
  choiceCheckboxStyle,
} from './style.css';
import '../gutter.css';
import { Link, useParams } from 'react-router-dom';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../../types/button';
import TextButton from '../../../Component/Button/TextButton';
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icons/moon.svg';
import { useAuthStore } from '../../../hooks/useStore';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { URL } from '../../../constants/url';
import {
  IMultipleProblemDetailResponseData,
  IMultipleProblemResultData,
} from '../../../types/api/problem';
import ProblemTitle from '../../../Organism/ProblemTitle';

export function MultipleQuestionDetailPage() {
  const { id } = useParams();
  const { isLogin } = useAuthStore();
  const [data, setData] = useState<IMultipleProblemDetailResponseData>();
  const [result, setResult] = useState<IMultipleProblemResultData | null>(null);
  const [isDark, setIsDark] = useState(true);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
  }

  function handleSubmit() {
    if (!id) return;
    const answerIds: number[] = [];
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]',
    ) as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((e) => (e.checked ? answerIds.push(parseInt(e.id)) : ''));
    problemApiWrapper.multipleProblemResult(id, answerIds);
  }

  useEffect(() => {
    if (!id) return;
    problemApiWrapper.multipleProblemDetail(id).then((data) => {
      setData(data);
    });
  }, []);

  if (!id) return <></>;

  return (
    <div>
      {data ? (
        <>
          <Header />
          <main className={`${isDark ? themeDarkClass : themeLightClass} ${pageStyle}`}>
            <div className={topStyle}>
              <div className={descStyle}>
                <ProblemTitle
                  id={id}
                  title={data.title}
                  tags={data.tags}
                  totalSolved={data.totalSolved}
                  correctCnt={data.correctCnt}
                  wrongCnt={data.wrongCnt}
                />
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
                    답안 선택
                  </label>
                  <div className={choiceListStyle}>
                    {data.choices.map((choice) => (
                      <label
                        htmlFor={choice.id.toString()}
                        className={choiceWrapperStyle}
                        key={choice.id}
                      >
                        <input
                          type='checkbox'
                          id={choice.id.toString()}
                          className={choiceCheckboxStyle}
                        />
                        {choice.content}
                      </label>
                    ))}
                  </div>
                </div>
              </Split>
            </div>

            <div className={buttonListStyle}>
              {isLogin ? (
                <TextButton
                  type={BUTTON_TYPE.SUBMIT}
                  theme={BUTTON_THEME.PRIMARY}
                  size={BUTTON_SIZE.MEDIUM}
                  onClick={handleSubmit}
                >
                  제출하기
                </TextButton>
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
      ) : (
        <></>
      )}
    </div>
  );
}
