import { PROBLEM_TYPE } from '../constants/problem';
import {
  ILongProblemDetailResponseData,
  IMultipleProblemDetailResponseData,
  IShortProblemDetailResponseData,
} from './api/problem';
import { ITagBox } from './tag';

interface IProblem {
  id: string;
  title: string;
  tags: string[];
  type?: TProblemType;
  totalSubmission?: number;
  avgScore?: number;
  topScore?: number;
  bottomScore?: number;
  desc?: string;
  keywordList?: string[];
  answer?: string;
  correctSubmission?: number;
  correctUserCnt?: number;
  isSolved?: boolean;
}

interface IQuestionListElementBox {
  id: number;
  title: string;
  tags: string[];
  type: TProblemType;
  totalSubmission: number;
  avgScore: number;
  isColumn?: boolean;
}

interface IProblemIdLinkState {
  problemId: number;
}

interface ITag extends ITagBox {
  id: string;
}

type TProblemType = typeof PROBLEM_TYPE[keyof typeof PROBLEM_TYPE];

interface IProblemDetailResponseData
  extends IShortProblemDetailResponseData,
    IMultipleProblemDetailResponseData,
    ILongProblemDetailResponseData {}

type TPartialProblemDetailResponseData = Partial<IProblemDetailResponseData>;

interface IProblemDetailPageTemplate {
  data: TPartialProblemDetailResponseData | undefined;
  children?: React.ReactNode;
  handleSubmit?: () => void;
  isResult?: boolean;
  resetResult?: () => void;
  isResultPage?: boolean;
  bottomContent?: React.ReactNode;
}

interface ISplitProblemDetailPageTemplate extends IProblemDetailPageTemplate {
  leftSideContent?: React.ReactNode;
  rightSideContent?: React.ReactNode;
  sizes?: number[];
}

export interface IMypageProblem {
  id: number;
  title: string;
  type: string;
}

export interface ILongProblemResultLocationState {
  userAnswer: string;
  title: string;
  id: string;
  tags: string[];
}

export type {
  IProblem,
  IProblemIdLinkState,
  ITag,
  TProblemType,
  IQuestionListElementBox,
  IProblemDetailPageTemplate,
  TPartialProblemDetailResponseData,
  ISplitProblemDetailPageTemplate,
};
