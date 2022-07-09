import {
  LessonKeys,
  LessonChoiceKeys,
  ILessonPayload,
} from '@/redux/slices/user';
import { Fragment } from 'react';
import { BiRadioCircleMarked } from 'react-icons/bi';

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
        activeChoice === element
          ? 'text-green-600 font-inter cursor-pointer'
          : 'text-white cursor-pointer';
      return (
        <div
          className='flex items-center gap-2 cursor-pointer'
          key={element}
          onClick={() => {
            const payload: ILessonPayload = {
              lessonKey,
              lessonChoice,
              value: element,
            };
            onChangeCallBack(payload);
          }}>
          <BiRadioCircleMarked key={element} className={className} />
          <label className={className}>{element}</label>
        </div>
      );
    })}
  </Fragment>
);

export default MultiQuestionUtility;
