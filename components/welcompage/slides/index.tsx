import Introduction from './introduction';
import React from 'react';
import dynamic from 'next/dynamic';
const UserIntro = dynamic(() => import('./userIntro'));

export const PAGES = {
  INTRODUCTION: 'INTRODUCTION',
  USER_INTRODUCTION: 'USER_INTRODUCTION',
} as const;

export type PageIdentifier = keyof typeof PAGES;

type Props = {
  pageId: PageIdentifier;
  gotoNextStage: (stage: PageIdentifier) => void;
};

export default function Pages({ pageId, gotoNextStage }: Props) {
  switch (pageId) {
    case PAGES.INTRODUCTION:
      return <Introduction gotoNextStage={gotoNextStage} />;
    case PAGES.USER_INTRODUCTION:
      return <UserIntro gotoNextStage={gotoNextStage} />;
    default:
      return <Introduction gotoNextStage={gotoNextStage} />;
  }
}
