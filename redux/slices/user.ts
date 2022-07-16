import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { logger } from '@/redux/logger';
// import type { RootState } from '@/redux/store';

// Define a type for the slice state
export const lessonOneChoicesOne = ['Laptop', 'Car', 'Pizza', 'Poptarts'];
export const lessonTwoChoicesOne = [
  'Spend it, get your favourite thing',
  'Count how much money you have',
  'Give it to your parent/caregiver',
  'Store it somewhere safe',
];

export const lessonOneChoicesTwo = [
  'Parents',
  'Piggy Bank',
  'Caregiver',
  'Magic',
];

export const lessonTwoChoicesTwo = [
  'Piggy Bank',
  'Under your Bed',
  'Bank',
  'With your Parents or Caregiver',
];

export const feedbackPoints: IFeedBackPoints = {
  learnedValuableSkills: 0,
  learningwasIntuitive: 0,
  learningwasEasy: 0,
  learningwasFun: 0,
  learningwasPractical: 0,
};

export interface IFeedBackPoints {
  learnedValuableSkills: number;
  learningwasIntuitive: number;
  learningwasEasy: number;
  learningwasFun: number;
  learningwasPractical: number;
}

export interface ILessonOneChoices {
  choice1: typeof lessonOneChoicesOne[number];
  choice2: typeof lessonOneChoicesTwo[number];
  stage: number;
}

export interface ILessonTwoChoices {
  choice1: typeof lessonTwoChoicesOne[number];
  choice2: typeof lessonTwoChoicesTwo[number];
  stage: number;
}

export type LessonChoiceKeys = 'choice1' | 'choice2';
export type LessonKeys = 'lessonOne' | 'lessonTwo';

export interface ILessonPayload {
  lessonKey: LessonKeys;
  lessonChoice: LessonChoiceKeys;
  value: string;
}

export interface IFeedBackPayload {
  feedbackKey: keyof IFeedBackPoints;
  value: number;
}
interface UserState {
  name: string;
  userMessage: string;
  lessonOne: ILessonOneChoices;
  lessonTwo: ILessonTwoChoices;
  feedback: IFeedBackPoints;
}

// Define the initial state using that type
const initialState: UserState = {
  name: '',
  userMessage:
    "Hi! My name is XD. Welcome to the ATB Classroom. I'm so happy to have you here. Let's get started and dive in to all things finance.",
  lessonOne: {
    choice1: 'Laptop',
    choice2: 'Parents',
    stage: 0,
  },
  lessonTwo: {
    choice1: 'Spend it, get your favourite thing',
    choice2: 'Piggy Bank',
    stage: 0,
  },
  feedback: feedbackPoints,
};

export const counterSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateUserName: (state: UserState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateUserMessage: (state: UserState, action: PayloadAction<string>) => {
      state.userMessage = action.payload;
    },
    updateLesson: (state: UserState, action: PayloadAction<ILessonPayload>) => {
      const { lessonKey, lessonChoice, value } = action.payload;
      if (state[lessonKey]) {
        //@ts-ignore
        if (state[lessonKey][lessonChoice as string]) {
          //@ts-ignore
          state[lessonKey][lessonChoice] = value;
        } else
          logger(action.payload, 'ERROR: updateLesson, Unknown lessonChoice');
      } else logger(action.payload, 'ERROR: updateLesson, Unknown lessonKey');
    },
    updateLessonOneStage: (state: UserState, action: PayloadAction<number>) => {
      const { payload } = action;
      state.lessonOne.stage = payload;
    },
    updateLessonTwoStage: (state: UserState, action: PayloadAction<number>) => {
      const { payload } = action;
      state.lessonTwo.stage = payload;
    },
    updateFeedback: (
      state: UserState,
      action: PayloadAction<IFeedBackPayload>
    ) => {
      const { feedbackKey, value } = action.payload;
      state.feedback[feedbackKey] = value;
    },
  },
});

export const {
  updateUserName,
  updateUserMessage,
  updateLesson,
  updateLessonOneStage,
  updateLessonTwoStage,
  updateFeedback,
} = counterSlice.actions;

export default counterSlice.reducer;
