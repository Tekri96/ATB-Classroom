import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  lessonTwoChoicesOne,
  lessonTwoChoicesTwo,
  updateLesson,
} from '@/redux/slices/user';
import { Fragment } from 'react';
import MultiQuestionUtility from '@/components/utils/Options';
import QuestionTemplate from '@/components/utils/QuestionTemplate';

const LessonTwo_QuestionOne = () => (
  <QuestionTemplate questionString=' What do you think is the safest place to store or keep your money?' />
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

const LessonTwo_QuestionTwo = () => {
  return (
    <QuestionTemplate questionString='What do you think is the safest place to store or keep your money?' />
  );
};

const LessonTwo_AnswerTwo = () => {
  const {
    lessonTwo: { choice2 },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <MultiQuestionUtility
      array={lessonTwoChoicesTwo}
      lessonKey={'lessonTwo'}
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
          <LessonTwo_QuestionTwo />
          <LessonTwo_AnswerTwo />
        </Fragment>
      );
    default:
      return <LessonTwo_QuestionOne />;
  }
};

export default StageWiseQuestions;
