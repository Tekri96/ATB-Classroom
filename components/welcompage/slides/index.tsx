import Introduction from './introduction';
import React from 'react';
import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  ILessonOneChoices,
  ILessonTwoChoices,
  updateUserMessage,
} from '@/redux/slices/user';
import FeedbackSection from './Feedback';
const UserIntro = dynamic(() => import('./userIntro'));
const LessonOne = dynamic(() => import('./lessonOne'));
const Money = dynamic(() => import('./money'));
const LessonTwo = dynamic(() => import('./lessonTwo'));
const Bank = dynamic(() => import('./Bank'));
const LessonThree = dynamic(() => import('./lessonThree'));

export const PAGES = {
  INTRODUCTION: 'INTRODUCTION',
  USER_INTRODUCTION: 'USER_INTRODUCTION',
  LESSON_ONE: 'LESSON_ONE',
  MONEY: 'MONEY',
  LESSON_TWO: 'LESSON_TWO',
  BANK: 'BANK',
  LESSON_THREE: 'LESSON_THREE',
  LESSON_FOUR: 'LESSON_FOUR',
  FEEDBACK: 'FEEDBACK',
} as const;

export type PageIdentifier = keyof typeof PAGES;

type Props = {
  pageId: PageIdentifier;
  gotoNextStage: (stage: PageIdentifier) => void;
};

export type ExpectedPayload = {
  name: string;
  lessonOne: ILessonOneChoices;
  lessonTwo: ILessonTwoChoices;
};

export default function Pages({ pageId, gotoNextStage }: Props) {
  const { name, lessonOne, lessonTwo } = useAppSelector((state) => state.user);
  const message = messageBoxText(pageId, { name, lessonOne, lessonTwo });
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(updateUserMessage(message));
  }, [pageId, message]);
  switch (pageId) {
    case PAGES.INTRODUCTION:
      return <Introduction gotoNextStage={gotoNextStage} />;
    case PAGES.USER_INTRODUCTION:
      return <UserIntro gotoNextStage={gotoNextStage} />;
    case PAGES.LESSON_ONE:
      return <LessonOne gotoNextStage={gotoNextStage} />;
    case PAGES.MONEY:
      return <Money gotoNextStage={gotoNextStage} />;
    case PAGES.LESSON_TWO:
      return <LessonTwo gotoNextStage={gotoNextStage} />;
    case PAGES.BANK:
      return <Bank gotoNextStage={gotoNextStage} />;
    case PAGES.LESSON_THREE:
      return <LessonThree gotoNextStage={gotoNextStage} />;
    case PAGES.FEEDBACK:
      return <FeedbackSection gotoNextStage={gotoNextStage} />;
    default:
      return <Introduction gotoNextStage={gotoNextStage} />;
  }
}

const messageBoxText = (pageId: PageIdentifier, payload: ExpectedPayload) => {
  switch (pageId) {
    case PAGES.LESSON_ONE:
      return updateMessageForLessonOne(payload.name, payload.lessonOne);
    case PAGES.MONEY:
      return "Congratulations on completing the first lesson. Here's a fun fact about money - The currencies of 1 Canadian dollar are nicknamed loonies, from the name of the aquatic bird present on the coin.";
    case PAGES.LESSON_TWO:
      return updateMessageForLessonTwo(payload.name, payload.lessonTwo);
    case PAGES.LESSON_THREE:
      return updateMessageForLessonThree();
    case PAGES.BANK:
      return "If you said banks, you're absolutely right.";
    case PAGES.FEEDBACK:
      return 'Thanks for your active participation. Please give us a feedback so that we can improve the learning experience.';
    default:
      return "Hi! My name is XD. Welcome to the ATB Classroom. I'm so happy to have you here. Let's get started and dive in to all things finance.";
  }
};

const updateMessageForLessonOne = (
  name: string,
  lessonOne: ILessonOneChoices
) => {
  const { stage } = lessonOne;
  switch (stage) {
    case 0:
      return `Hi ${name}, nice to meet you! Let's begin our first lesson. I would like to ask some quick short questions to get started. Lets Go!`;
    case 1: {
      if (lessonOne.choice1 === 'Laptop')
        return " I love gadgets I've always wanted to get a Macbook. Great choice! Lets see the next question.";
      else if (lessonOne.choice1 === 'Car')
        return 'I love cars, I want to buy a cool sports car. Great choice! Lets see the next question';
      else if (lessonOne.choice1 === 'Pizza')
        return 'I love pizzas. My favourite one would be mushroom pizza. Nice choice! Lets see the next question.';
      else if (lessonOne.choice1 === 'Poptarts')
        return "Sweet tooth. I like strawberry ones. Nice choice. Let's see the next question.";
    }
    case 2:
      return "You're about to uncover the first lesson. You got this!";
    default:
      return ``;
  }
};

const updateMessageForLessonTwo = (
  name: string,
  lessonOne: ILessonTwoChoices
) => {
  const { stage } = lessonOne;
  switch (stage) {
    case 0:
      return 'We talked about money in the first lesson. You got this. I love asking questions. Lets go!';
    case 1:
      return "you're already way ahead in your journey to become a financial expert in the future. Congrats! If you didn't, no worries, you got this!";

    default:
      return "If you said banks, you're absolutely right.";
  }
};

const updateMessageForLessonThree = () => {
  return "Congratulations on covering the first two lessons. We'll know cover some basic financial terms that you need to be aware about.";
};
