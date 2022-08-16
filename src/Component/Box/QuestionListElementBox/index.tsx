import { Link, Outlet } from 'react-router-dom';
import TagBox from '../TagBox';
import { IProblem } from '../../../types/problem';
import { detailWrapperStyle, tagListStyle, textBoxMainStyle, textBoxStyle } from './style.css';
import baseFontStyle from '../../../styles/font.css';
import { URLWithParam } from '../../../constants/url';
import { getTagById } from '../../../utils/getTagbyId';

function QuestionListElementBox({ title, numberSolved, averageScore, tagList, id }: IProblem) {
  return (
    <>
      <Link to={URLWithParam.LONG_PROBLEM_DETAIL(id)}>
        <div className={textBoxStyle}>
          <div className={textBoxMainStyle}>
            <p className={baseFontStyle.medium}>{title}</p>
            <ul className={tagListStyle}>
              {tagList.map((tagId) => {
                const { name, color } = getTagById(tagId);
                return <TagBox name={name} color={color} key={tagId} />;
              })}
            </ul>
          </div>
          <div className={detailWrapperStyle}>
            <p className={baseFontStyle.small}>푼 사람 수 : {numberSolved ?? 0} 명</p>
            <p>평균 점수 : {averageScore ?? 0} 점</p>
          </div>
        </div>
      </Link>
      <Outlet />
    </>
  );
}

export default QuestionListElementBox;
