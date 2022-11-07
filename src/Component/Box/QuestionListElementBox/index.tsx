import { Link, Outlet } from 'react-router-dom';
import TagBox from '../TagBox';
import { IQuestionListElementBox, TProblemType } from '../../../types/problem';
import {
  detailLabelStyle,
  detailStyle,
  detailValueStyle,
  detailWrapperStyle,
  dividerStyle,
  problemStatisticsWrapperStyle,
  tagListStyle,
  textBoxMainStyle,
  textBoxStyle,
  titleStyle,
} from './style.css';
import { URLWithParam } from '../../../constants/url';
import { getTagById } from '../../../utils/getTagbyId';
import { Divider } from '../../Divider';
import { formatNumber } from '../../../utils/formatNumber';
import { RowBox } from '../CustomBox';

interface IProblemStatisticsBox {
  label: string;
  value: number;
  unit: string;
}

const URLByType: Record<TProblemType, (id: number) => string> = {
  long: (id: number) => URLWithParam.LONG_PROBLEM_DETAIL(id),
  short: (id: number) => URLWithParam.SHORT_PROBLEM_DETAIL(id),
  multiple: (id: number) => URLWithParam.MULTIPLE_PROBLEM_DETAIL(id),
};

function ProblemStatisticsBox({ label, value, unit }: IProblemStatisticsBox) {
  return (
    <div className={detailWrapperStyle}>
      <div className={detailStyle}>
        <div className={detailLabelStyle}>{label}</div>
        <div className={detailValueStyle}>
          {`${value !== null && value !== undefined ? formatNumber(value) : 0} ${unit}`}
        </div>
      </div>
    </div>
  );
}

function QuestionListElementBox({
  title,
  avgScore,
  totalSubmission,
  isSolved,
  tags,
  id,
  type,
  isColumn,
}: IQuestionListElementBox) {
  return (
    <>
      <Link to={URLByType[type](id)}>
        <div className={textBoxStyle} id={`element-${id}`}>
          <div className={textBoxMainStyle}>
            <ul className={tagListStyle}>
              {tags.map((tagId) => {
                const { name, color } = getTagById(tagId);
                return <TagBox name={name} color={color} key={tagId} />;
              })}
              <TagBox
                name={type === 'long' ? '서술형' : type === 'short' ? '단답형' : '객관식'}
                color='color2'
              />
              {isSolved !== undefined ? (
                <TagBox name={isSolved ? '푼 문제' : '안 푼 문제'} color='color3' />
              ) : (
                <></>
              )}
            </ul>
            <p className={titleStyle}>{title}</p>
          </div>
          <Divider className={dividerStyle} />
          {isColumn ? (
            <div className={problemStatisticsWrapperStyle.column}>
              <ProblemStatisticsBox label='제출' value={totalSubmission} unit='' />
              <ProblemStatisticsBox label='평균점수' value={avgScore} unit='점' />
            </div>
          ) : (
            <RowBox className={problemStatisticsWrapperStyle.row}>
              <ProblemStatisticsBox label='제출' value={totalSubmission} unit='' />
              <ProblemStatisticsBox label='평균점수' value={avgScore} unit='점' />
            </RowBox>
          )}
        </div>
      </Link>
      <Outlet />
    </>
  );
}

export default QuestionListElementBox;
