import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  lessonTwoChoicesOne,
  lessonOneChoicesTwo,
  updateLesson,
} from '@/redux/slices/user';
import { Fragment } from 'react';
import MultiQuestionUtility from '@/components/utils/Options';

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
