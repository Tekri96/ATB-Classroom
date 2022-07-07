import Introduction from './introduction';
import React from 'react';
import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateUserMessage } from '@/redux/slices/user';
const UserIntro = dynamic(() => import('./userIntro'));
const LessonOne = dynamic(() => import('./lessonOne'));

export const PAGES = {
  INTRODUCTION: 'INTRODUCTION',
  USER_INTRODUCTION: 'USER_INTRODUCTION',
  LESSON_ONE: 'LESSON_ONE',
} as const;

export type PageIdentifier = keyof typeof PAGES;

type Props = {
  pageId: PageIdentifier;
  gotoNextStage: (stage: PageIdentifier) => void;
};

export type ExpectedPayload = {
  name: string;
};

export default function Pages({ pageId, gotoNextStage }: Props) {
  const { name } = useAppSelector((state) => state.user);
  const message = messageBoxText(pageId, { name });
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
    default:
      return <Introduction gotoNextStage={gotoNextStage} />;
  }
}

const messageBoxText = (pageId: PageIdentifier, payload: ExpectedPayload) => {
  switch (pageId) {
    case PAGES.LESSON_ONE:
      return `Hi ${payload.name}, nice to meet you! Let's begin our first lesson. I would like to ask some quick short questions to get started. Lets Go!`;
    default:
      return "Hi! My name is XD. Welcome to the ATB Classroom. I'm so happy to have you here. Let's get started and dive in to all things finance.";
  }
};
