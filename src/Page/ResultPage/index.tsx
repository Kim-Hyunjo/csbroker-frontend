import { Link, useLocation, useParams } from 'react-router-dom';
import KeywordBox from '../../Component/Box/KeywordBox';
import TextBox from '../../Component/Box/TextBox';
import TextButton from '../../Component/Button/TextButton';
import ProblemTitle from '../../Organism/ProblemTitle';
import Header from '../../Template/Header';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import {
  buttonListStyle,
  contentStyle,
  keywordListStyle,
  pageContentStyle,
  pageStyle,
  subtitleStyle,
  answerContentStyle,
} from './style.css';
import { URL, URLWithParam } from '../../constants/url';
import { ILongProblemResultData } from '../../types/api/problem';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { useMutation } from 'react-query';
import { useEffect } from 'react';

function ResultPage() {
  const { id } = useParams();
  const userAnswer = useLocation().state as string;

  if (!id) return <></>;

  function handleSubmit() {
    if (!id) throw new Error('invalid id');
    return problemApiWrapper.longProblemResult(id, userAnswer);
  }

  const {
    data: result,
    isLoading,
    mutate,
  } = useMutation<ILongProblemResultData>(handleSubmit);

  useEffect(() => {
    mutate();
  }, []);
  return (
    <>
      <Header />
      <div className={pageStyle}>
        <ProblemTitle
          id={id}
          title={result?.title ?? ''}
          totalSolved={result?.totalSolved}
          avgScore={result?.avgScore}
          topScore={result?.topScore}
          bottomScore={result?.bottomScore}
          tags={result?.tags ?? []}
          answer={userAnswer}
        />
        <div className={pageContentStyle}>
          <TextBox>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>내 답안</h3>
              <ul className={keywordListStyle}>
                {result?.keywords?.map(({ id, content, isExist }) => (
                  <KeywordBox name={content} isIncluded={isExist} key={id} />
                ))}
              </ul>
              <div className={answerContentStyle}>{userAnswer}</div>
            </div>
          </TextBox>
          <TextBox>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>모범 답안</h3>
              <p className={answerContentStyle}>{result?.standardAnswer}</p>
            </div>
          </TextBox>
        </div>
        <div className={buttonListStyle}>
          <Link to={URLWithParam.LONG_PROBLEM_DETAIL(parseInt(id))} state={{ problemId: id }}>
            <TextButton
              type={BUTTON_TYPE.BUTTON}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
            >
              다시 풀기
            </TextButton>
          </Link>
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
      </div>
    </>
  );
}
export default ResultPage;
