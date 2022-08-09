import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PAGES, PageIdentifier } from '../';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import StarFeedback from './StarFeedback';
import {
  collection,
  addDoc,
  setDoc,
  doc as firebaseDocument,
} from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { IFeedBackPoints } from '@/redux/slices/user';
type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};

const pushToFirebase = async (ratings: IFeedBackPoints, name: string) => {
  const key = 'Firebase-Feedback-Doc-Id';
  const collectionKey = 'user-feedback';
  const docID = localStorage.getItem(key);
  if (docID) {
    const existingDoc = firebaseDocument(db, collectionKey, docID);
    return setDoc(existingDoc, ratings, { merge: true })
      .then(() => ({ error: false }))
      .catch((error) => ({ error: true, message: error.message as string }));
  } else {
    return addDoc(collection(db, collectionKey), { ...ratings, name: name })
      .then((docRef) => {
        localStorage.setItem(key, docRef.id);
        return { error: false };
      })
      .catch((error) => ({ error: true, message: error.message as string }));
  }
};
export default function FeedbackSection({ gotoNextStage }: Props) {
  const {
    lessonOne: { stage },
    name,
    feedback,
  } = useAppSelector((state) => state.user);
  const [message, setMessage] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState<
    'pending' | 'fulfilled' | 'idle'
  >('idle');
  return (
    <AnimatePresence>
      <motion.div
        key={PAGES.LESSON_ONE}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeIn' }}>
        <img
          src='/assets/bank.png'
          alt='Bank Background'
          className='h-[20rem] w-[25rem]'
        />
        <h1>Thanks for taking up this assessment!</h1>
        <h1>Now, please take up this Feedback!</h1>
        <StarFeedback />
        {submitted === 'fulfilled' ? (
          message === null ? (
            <p className='font-semibold text-white'>
              Feedback Submitted Successfully. You can close this window now!
            </p>
          ) : (
            <p className='font-semibold text-red-500'>
              Error while submitting Form: {message}
            </p>
          )
        ) : null}
        {submitted === 'pending' ? (
          <div className='flex items-center justify-center mt-2'>
            <div className='w-8 h-8 border-b-2 border-white rounded-full animate-spin'></div>
          </div>
        ) : null}
        <br />
        <div className='flex justify-around w-full px-2'>
          <button
            className='bg-button py-2 px-4 rounded-md text-white font-inter'
            onClick={() => {
              gotoNextStage(PAGES.LESSON_THREE);
            }}>
            Previous
          </button>
          <button
            className='bg-button py-2 px-4 rounded-md text-white font-inter'
            onClick={() => {
              setSubmitted('pending');
              pushToFirebase(feedback, name)
                .then((result) => {
                  if (result.error) {
                    setSubmitted('fulfilled');
                    setMessage(
                      (result as { message: string; error: boolean }).message
                    );
                  } else {
                    setSubmitted('fulfilled');
                    setMessage(null);
                  }
                })
                .catch((error) => {
                  setMessage(error.message);
                  setSubmitted('fulfilled');
                });
            }}>
            Submit Feedback and Exit
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
