import { IProblem } from '../../types/problem';
import TagBox from '../../Component/Box/TagBox';
import {
  descStyle,
  problemDetailStyle,
  titleTagStyle,
  tagListStyle,
  problemDescriptionLabelStyle,
  problemDescriptionValueStyle,
  problemDescriptionElementWrapperStyle,
} from './style.css';
import baseFontStyle from '../../styles/font.css';
import { getTagById } from '../../utils/getTagbyId';
import { RowBox } from '../../Component/Box/CustomBox';

interface IProblemDetail {
  totalSubmission: string;
  avgScore: string;
  topScore: string;
  bottomScore: string;
  correctSubmission: string;
  correctUserCnt: string;
}

interface IProblemDetailDescription {
  label: string;
  value: string | undefined;
  unit: string | null;
}

const problemDetailMap: Record<
  keyof IProblemDetail,
  (num: string | undefined) => IProblemDetailDescription | null
> = {
  totalSubmission: (num: string | undefined) =>
    num !== null && num !== undefined ? { label: '제출', value: num, unit: null } : null,
  avgScore: (num: string | undefined) =>
    num !== null && num !== undefined
      ? { label: '평균 점수', value: parseFloat(num).toFixed(2), unit: '점' }
      : null,
  topScore: (num: string | undefined) =>
    num !== null && num !== undefined
      ? { label: '최고점', value: parseFloat(num).toFixed(2), unit: '점' }
      : null,
  bottomScore: (num: string | undefined) =>
    num !== null && num !== undefined
      ? { label: '최저점', value: parseFloat(num).toFixed(2), unit: '점' }
      : null,
  correctSubmission: (num: string | undefined) =>
    num !== null && num !== undefined ? { label: '정답', value: num, unit: '' } : null,
  correctUserCnt: (num: string | undefined) =>
    num !== null && num !== undefined ? { label: '맞힌 사람 수', value: num, unit: '명' } : null,
};

function ProblemTitle(props: IProblem) {
  return (
    <div className={descStyle}>
      <div className={titleTagStyle}>
        <h1 className={baseFontStyle.title}>{props.title}</h1>
        <ul className={tagListStyle}>
          {props.tags.map((tagId) => {
            const { name, color } = getTagById(tagId);
            return <TagBox name={name} color={color} key={tagId} />;
          })}
          {
            props.isSolved ? <TagBox name={'푼 문제'} color={'color3'} key={'solved'} /> : <TagBox name={'안 푼 문제'} color={'color3'} key={'solved'} />
          }
        </ul>
      </div>
      <div className={problemDetailStyle}>
        {Object.entries(props).map(([propKey, propValue]) =>
          Object.entries(problemDetailMap).map(([detailKey, detailValue]) => {
            const descriptionValue = detailValue(propValue);
            return propKey === detailKey && propValue !== null && propValue !== undefined ? (
              <RowBox key={propKey} className={problemDescriptionElementWrapperStyle}>
                <div className={problemDescriptionLabelStyle}>{descriptionValue?.label}</div>
                <div className={problemDescriptionValueStyle}>{`${descriptionValue?.value}${
                  descriptionValue?.unit ?? ''
                }`}</div>
              </RowBox>
            ) : (
              ''
            );
          }),
        )}
      </div>
    </div>
  );
}
export default ProblemTitle;
