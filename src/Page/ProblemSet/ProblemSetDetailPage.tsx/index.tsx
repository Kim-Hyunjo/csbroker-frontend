import { useParams } from 'react-router-dom';
import problemSet from '../../../mock/problemSet.json';
import {
  contentWrapperStyle,
  indexButtonWrapperStyle,
  problemDetailWrapperStyle,
  problemSetDetailTitleStyle,
  problemSetTitleStyle,
} from './style.css';
import { TabMenuButton } from '../../../Component/Button/TabMenuButton';
import { useMemo, useState } from 'react';
import { ErrorPage } from '../../Error/ErrorPage';
import { MetaTag } from '../../utils/MetaTag';
import { MultipleProblemSetDetail } from '../ProblemSetDetail/Multiple';
import { ShortProblemSetDetail } from '../ProblemSetDetail/Short';
import { LongProblemSetDetail } from '../ProblemSetDetail/Long';
import { ProblemSetDetailButtonList } from '../../../Organism/ButtonList/ProblemSet';

interface IProblemDetail {
  problemType: string;
  problemId: number;
}

const ProblemDetail = ({ problemType, problemId }: IProblemDetail) => {
  return (
    <div className={problemDetailWrapperStyle}>
      {problemType === 'long' ? (
        <LongProblemSetDetail problemId={problemId} />
      ) : problemType === 'short' ? (
        <ShortProblemSetDetail problemId={problemId} />
      ) : problemType === 'multiple' ? (
        <MultipleProblemSetDetail problemId={problemId} />
      ) : (
        <></>
      )}
      <ProblemSetDetailButtonList />
    </div>
  );
};

export const ProblemSetDetailPage = () => {
  const { setId, id } = useParams();

  if (!setId || !id) return <ErrorPage />;

  const [problemId, setProblemId] = useState(parseInt(id));
  const problemSetData = problemSet[parseInt(setId)];
  const problemType = useMemo(
    () =>
      [...problemSetData.problems, problemSetData.final_problem_id].find((e) => e.id === problemId),
    [problemId],
  )?.type;

  return (
    <>
      <MetaTag
        title={`CS Broker - ${problemSetData.set_title}`}
        description={`${problemSetData.set_title}에 관한 문제 세트입니다.`}
        keywords={`${problemSetData.set_title}, 서술형, 객관식, 단답형`}
      />
      <div className={problemSetDetailTitleStyle}>
        <h1 className={problemSetTitleStyle}>{problemSetData.set_title}</h1>
        <div>{`문제수: ${problemSetData.problems?.length + 1}개`}</div>
      </div>
      <div className={contentWrapperStyle}>
        <div className={indexButtonWrapperStyle}>
          {[...problemSetData.problems, problemSetData.final_problem_id].map((e, idx) => (
            <TabMenuButton
              key={e.id}
              idx={idx}
              isSelected={problemId === e.id}
              onClick={() => {
                setProblemId(e.id);
              }}
            />
          ))}
        </div>
        {problemType ? <ProblemDetail problemType={problemType} problemId={problemId} /> : <></>}
      </div>
    </>
  );
};
