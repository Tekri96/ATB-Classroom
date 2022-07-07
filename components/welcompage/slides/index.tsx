import Introduction from './introduction';
import React from 'react';
import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateUserMessage } from '@/redux/slices/user';
const UserIntro = dynamic(() => import('./userIntro'));
const LessonOne = dynamic(() => import('./lessonOne'));
const LessonTwo = dynamic(() => import('./lessonTwo'));

export const PAGES = {
  INTRODUCTION: 'INTRODUCTION',
  USER_INTRODUCTION: 'USER_INTRODUCTION',
  LESSON_ONE: 'LESSON_ONE',
  LESSON_TWO: 'LESSON_TWO',
} as const;

export type PageIdentifier = keyof typeof PAGES;

type Props = {
  pageId: PageIdentifier;
  gotoNextStage: (stage: PageIdentifier) => void;
};

export type ExpectedPayload = {
  name: string;
  lessonOneChoice: string;
};

export default function Pages({ pageId, gotoNextStage }: Props) {
  const { name, lessonOneChoice } = useAppSelector((state) => state.user);
  const message = messageBoxText(pageId, { name, lessonOneChoice });
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(updateUserMessage(message));
  }, [pageId]);
  switch (pageId) {
    case PAGES.INTRODUCTION:
      return <Introduction gotoNextStage={gotoNextStage} />;
    case PAGES.USER_INTRODUCTION:
      return <UserIntro gotoNextStage={gotoNextStage} />;
    case PAGES.LESSON_ONE:
      return <LessonOne gotoNextStage={gotoNextStage} />;
    case PAGES.LESSON_TWO:
      return <LessonTwo gotoNextStage={gotoNextStage} />;
    default:
      return <Introduction gotoNextStage={gotoNextStage} />;
  }
}

const messageBoxText = (pageId: PageIdentifier, payload: ExpectedPayload) => {
  switch (pageId) {
    case PAGES.LESSON_TWO:
      return getMessageFromLessonTwo(payload.lessonOneChoice);
    case PAGES.LESSON_ONE:
      return `Hi ${payload.name}, nice to meet you! Let's begin our first lesson. I would like to ask some quick short questions to get started. Lets Go!`;
    default:
      return "Hi! My name is XD. Welcome to the ATB Classroom. I'm so happy to have you here. Let's get started and dive in to all things finance.";
  }
};

export const firstQuestionChoices = ['Laptop', 'Car', 'Pizza', 'Poptarts'];

const getMessageFromLessonTwo = (choice: string) => {
  switch (choice) {
    case firstQuestionChoices[0]:
      return "I love gadgets I've always wanted to get a Macbook. Great choice! Lets see the next question.";
    case firstQuestionChoices[1]:
      return ' I love cars, I want to buy a cool sports car. Great choice! Lets see the next question.';
    case firstQuestionChoices[2]:
      return 'I love pizzas. My favourite one would be mushroom pizza. Nice choice! Lets see the next question.';
    case firstQuestionChoices[3]:
      return "Sweet tooth. I like strawberry ones. Nice choice. Let's see the next question.";
    default:
      return '';
  }
};
