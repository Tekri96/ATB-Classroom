import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  ILessonPayload,
  LessonChoiceKeys,
  LessonKeys,
  lessonTwoChoicesOne,
  lessonOneChoicesTwo,
  updateLesson,
} from '@/redux/slices/user';
import { BiRadioCircleMarked } from 'react-icons/bi';
import { Fragment } from 'react';

interface IMultiQuestionUtilityProps {
  array: string[];
  lessonKey: LessonKeys;
  lessonChoice: LessonChoiceKeys;
  onChangeCallBack: (payload: ILessonPayload) => void;
  activeChoice: string;
}

const MultiQuestionUtility = ({
  array,
  lessonKey,
  lessonChoice,
  onChangeCallBack,
  activeChoice,
}: IMultiQuestionUtilityProps) => (
  <Fragment>
    {array.map((element) => {
      const className =
        activeChoice === element ? 'text-green-600 font-inter' : 'text-white';
      return (
        <div className='flex items-center gap-2 cursor-pointer' key={element}>
          <BiRadioCircleMarked
            key={element}
            className={className}
            onClick={() => {
              const payload: ILessonPayload = {
                lessonKey,
                lessonChoice,
                value: element,
              };
              onChangeCallBack(payload);
            }}
          />
          <label className={className}>{element}</label>
        </div>
      );
    })}
  </Fragment>
);

const LessonTwo_QuestionOne = () => (
  <h1 className='text-sm font-inter'>
    Questions: What is the first thing you think about when you have money?
  </h1>
);

const LessonTwo_AnswerOne = () => {
  const {
    lessonTwo: { choice1 },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <MultiQuestionUtility
      array={lessonTwoChoicesOne}
      lessonKey={'lessonTwo'}
      lessonChoice={'choice1'}
      activeChoice={choice1}
      onChangeCallBack={(payload) => dispatch(updateLesson(payload))}
    />
  );
};

const LessonOne_QuestionTwo = () => {
  return (
    <h1 className='text-sm font-inter'>
      What do you think is the safest place to store or keep your money?
    </h1>
  );
};

const LessonOne_AnswerTwo = () => {
  const {
    lessonOne: { choice2 },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <MultiQuestionUtility
      array={lessonOneChoicesTwo}
      lessonKey={'lessonOne'}
      lessonChoice={'choice2'}
      activeChoice={choice2}
      onChangeCallBack={(payload) => dispatch(updateLesson(payload))}
    />
  );
};

type StageProps = {
  stage: number;
};
const StageWiseQuestions = ({ stage }: StageProps) => {
  switch (stage) {
    case 0:
      return (
        <Fragment>
          <LessonTwo_QuestionOne />
          <LessonTwo_AnswerOne />
        </Fragment>
      );
    case 1:
      return (
        <Fragment>
          <LessonOne_QuestionTwo />
          <LessonOne_AnswerTwo />
        </Fragment>
      );
    default:
      return <LessonTwo_QuestionOne />;
  }
};

export default StageWiseQuestions;
