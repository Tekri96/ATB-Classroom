import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  ILessonPayload,
  LessonChoiceKeys,
  LessonKeys,
  lessonOneChoicesOne,
  lessonOneChoicesTwo,
  updateLesson,
} from '@/redux/slices/user';
import { BiRadioCircleMarked } from 'react-icons/bi';
import { Fragment } from 'react';
import MultiQuestionUtility from '@/components/utils/Options';

const LessonOne_QuestionOne = () => (
  <h1 className='text-sm font-inter'>What do you like?</h1>
);

const LessonOne_AnswerOne = () => {
  const {
    lessonOne: { choice1 },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <MultiQuestionUtility
      array={lessonOneChoicesOne}
      lessonKey={'lessonOne'}
      lessonChoice={'choice1'}
      activeChoice={choice1}
      onChangeCallBack={(payload) => dispatch(updateLesson(payload))}
    />
  );
};

const LessonOne_QuestionTwo = () => {
  const { lessonOne } = useAppSelector((state) => state.user);

  return (
    <h1 className='text-sm font-inter'>
      How will you get {lessonOne.choice1}?
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

const LessoneOne_QuestionThree = () => {
  const { lessonOne } = useAppSelector((state) => state.user);
  return (
    <h1 className='text-sm font-inter'>
      Wonder how {lessonOne.choice2} will get it??
    </h1>
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
          <LessonOne_QuestionOne />
          <LessonOne_AnswerOne />
        </Fragment>
      );
    case 1:
      return (
        <Fragment>
          <LessonOne_QuestionTwo />
          <LessonOne_AnswerTwo />
        </Fragment>
      );
    case 2:
      return <LessoneOne_QuestionThree />;
    default:
      return <LessonOne_QuestionOne />;
  }
};

export default StageWiseQuestions;
