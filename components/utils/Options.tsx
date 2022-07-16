import {
  LessonKeys,
  LessonChoiceKeys,
  ILessonPayload,
} from '@/redux/slices/user';
import { Fragment } from 'react';
import { BiRadioCircleMarked } from 'react-icons/bi';
import { motion } from 'framer-motion';
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
        <motion.div
          key={element}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.5, ease: 'easeIn' }}
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => {
            const payload: ILessonPayload = {
              lessonKey,
              lessonChoice,
              value: element,
            };
            onChangeCallBack(payload);
          }}>
          <BiRadioCircleMarked className={className} />
          <label className={className}>{element}</label>
        </motion.div>
      );
    })}
  </Fragment>
);

export default MultiQuestionUtility;
