import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { logger } from '@/redux/logger';
// import type { RootState } from '@/redux/store';

// Define a type for the slice state
export const lessonOneChoicesOne = ['Laptop', 'Car', 'Pizza', 'Poptarts'];

export const lessonOneChoicesTwo = [
  'Parents',
  'Piggy Bank',
  'Caregiver',
  'Magic',
];

interface ILessonOneChoices {
  choice1: 'Laptop' | 'Car' | 'Pizza' | 'Poptarts';
  choice2: 'Parents' | 'Piggy Bank' | 'Caregiver' | 'Magic';
  stage: number;
}

export type LessonChoiceKeys = 'choice1' | 'choice2';
export type LessonKeys = 'lessonOne';

export interface ILessonPayload {
  lessonKey: LessonKeys;
  lessonChoice: LessonChoiceKeys;
  value: string;
}
interface UserState {
  name: string;
  userMessage: string;
  lessonOne: ILessonOneChoices;
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
  },
});

export const {
  updateUserName,
  updateUserMessage,
  updateLesson,
  updateLessonOneStage,
} = counterSlice.actions;

export default counterSlice.reducer;
