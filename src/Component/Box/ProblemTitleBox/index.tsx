import { Link } from 'react-router-dom';
import { COLOR_LABEL_LIST } from '../../../constants/colorLabel';
import { PROBLEM_TYPE } from '../../../constants/problem';
import { URLWithParam } from '../../../constants/url';
import { problemTitleBoxStyle, textStyle } from './style.css';

interface IProblemTitleBox {
  id: number;
  title: string;
  type: string;
}

export const ProblemTitleBox = ({ id, title, type }: IProblemTitleBox) => {
  const url =
    type === PROBLEM_TYPE.LONG
      ? URLWithParam.LONG_PROBLEM_DETAIL(id)
      : type === PROBLEM_TYPE.SHORT
      ? URLWithParam.SHORT_PROBLEM_DETAIL(id)
      : URLWithParam.MULTIPLE_PROBLEM_DETAIL(id);
  return (
    <Link to={url}>
      <div
        style={{ backgroundColor: COLOR_LABEL_LIST.find((e) => e.type === type)?.color }}
        className={problemTitleBoxStyle}
      >
        <span className={textStyle}>{title}</span>
      </div>
    </Link>
  );
};
