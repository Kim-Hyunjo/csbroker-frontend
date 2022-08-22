import {
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  answerInputWrapperStyle,
  answerInputTitleStyle,
  answerLengthButtonStyle,
  answerLengthOpenStyle,
  answerLengthNotOpenStyle,
  hintWrapperStyle,
  answerInputScoredStyle,
} from './style.css';
import '../gutter.css';
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../../../hooks/useStore';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import {
  IShortProblemDetailResponseData,
  IShortProblemResultData,
} from '../../../types/api/problem';
import { TransparentButton } from '../../../Component/Button';
import { XIcon } from '../../../Icon/XIcon';
import { COLOR } from '../../../constants/color';
import { OIcon } from '../../../Icon/OIcon';
import { ProblemDetailPageTemplate } from '../../../Template/ProblemDetailPageTemplate';

export function ShortQuestionDetailPage() {
  const { id } = useParams();
  const { isLogin } = useAuthStore();
  const [isDark, setIsDark] = useState(true);
  const [data, setData] = useState<IShortProblemDetailResponseData | null>(null);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [result, setResult] = useState<IShortProblemResultData | null>(null);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isGraded, setIsGraded] = useState(false);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
  }

  function handleSubmit() {
    if (!id) return;
    const data = (document.getElementById('answer') as HTMLInputElement).value;
    problemApiWrapper.shortProblemResult(id, data).then((data) => setResult(data));
  }

  function showHint() {
    setIsHintOpen(true);
    setTimeout(() => {
      setIsHintOpen(false);
    }, 2000);
  }

  useEffect(() => {
    if (!id) return;
    problemApiWrapper.shortProblemDetail(id).then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    if (!result) return;
    setIsAnswer(result.isAnswer);
    setIsGraded(true);
    setTimeout(() => {
      setIsGraded(false);
      (document.getElementById('answer') as HTMLInputElement).value = '';
    }, 1000);
  }, [result]);

  if (!id) return <></>;

  return (
    <ProblemDetailPageTemplate data={data} handleSubmit={handleSubmit}>
      <div className={contentWrapperStyle}>
        <div className={contentTitleStyle}>문제 설명</div>
        <div className={problemDescContentStyle}>{data?.description}</div>
      </div>
      <div className={answerInputWrapperStyle}>
        <label htmlFor='answer' className={answerInputTitleStyle}>
          정답 입력
        </label>
        <input
          id='answer'
          placeholder='답변을 입력해주세요'
          className={
            answerInputScoredStyle[isGraded ? (isAnswer ? 'correct' : 'wrong') : 'default']
          }
          autoComplete='off'
        ></input>
        {isGraded ? (
          isAnswer ? (
            <OIcon fill={COLOR.CORRECT} width='3rem' height='3rem' />
          ) : (
            <XIcon fill={COLOR.ERROR} width='3rem' height='3rem' />
          )
        ) : (
          <></>
        )}
      </div>
      <div className={hintWrapperStyle}>
        <TransparentButton className={answerLengthButtonStyle} onClick={showHint}>
          힌트 보기
        </TransparentButton>
        <div className={isHintOpen ? answerLengthOpenStyle : answerLengthNotOpenStyle}>
          정답은 {data?.answerLength}글자
        </div>
      </div>
    </ProblemDetailPageTemplate>
  );
}
