import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '@/redux/store';

// Define a type for the slice state
interface UserState {
  name: string;
  userMessage: string;
  lessonOneChoice: string;
}

// Define the initial state using that type
const initialState: UserState = {
  name: '',
  userMessage:
    "Hi! My name is XD. Welcome to the ATB Classroom. I'm so happy to have you here. Let's get started and dive in to all things finance.",
  lessonOneChoice: 'Laptop',
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
    updateLessonOneChoice: (
      state: UserState,
      action: PayloadAction<string>
    ) => {
      state.lessonOneChoice = action.payload;
    },
  },
});

export const { updateUserName, updateUserMessage, updateLessonOneChoice } =
  counterSlice.actions;

export default counterSlice.reducer;
