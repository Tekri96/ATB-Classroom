import Introduction from './introduction';
import React from 'react';
import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ILessonOneChoices, updateUserMessage } from '@/redux/slices/user';
const UserIntro = dynamic(() => import('./userIntro'));
const LessonOne = dynamic(() => import('./lessonOne'));
const LessonTwo = dynamic(() => import('./lessonTwo'));
const Money = dynamic(() => import('./Money'));

export const PAGES = {
  INTRODUCTION: 'INTRODUCTION',
  USER_INTRODUCTION: 'USER_INTRODUCTION',
  LESSON_ONE: 'LESSON_ONE',
  MONEY: 'MONEY',
  LESSON_TWO: 'LESSON_TWO',
} as const;

export type PageIdentifier = keyof typeof PAGES;

type Props = {
  pageId: PageIdentifier;
  gotoNextStage: (stage: PageIdentifier) => void;
};

export type ExpectedPayload = {
  name: string;
  lessonOne: ILessonOneChoices;
};

export default function Pages({ pageId, gotoNextStage }: Props) {
  const { name, lessonOne } = useAppSelector((state) => state.user);
  const message = messageBoxText(pageId, { name, lessonOne });
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
    case PAGES.LESSON_TWO:
      return <LessonTwo gotoNextStage={gotoNextStage} />;
    case PAGES.MONEY:
      return <Money gotoNextStage={gotoNextStage} />;
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
