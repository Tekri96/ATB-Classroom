import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { PAGES, PageIdentifier } from '../';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { updateLessonOneStage } from '@/redux/slices/user';
import FlashCard from './FlashCard';
const StageWiseQuestions = dynamic(() => import('./QuestionsTemplate'));

type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};

const FlashCards = [
  {
    imageUri: '/flash-cards/investments.jpg',
    descriptionImageUri: '/flash-cards/investments.jpeg',
    paraContent: `Say you have lemonade stand. You built it, you buy the lemons and the sugar and the cups, and any profit left after doing those things is all yours. You're the sole owner.
Now, your lemonade is delicious and the stand is doing really well. You'd like to open another one and hire some helpers to run it for you. You could wait until you pile up enough profit, though that might take a long time. You could go to the bank and ask them to lend you money, but banks are pretty stingy about who they'll lend money to and they'll want you to pay it back with interest.
Or, you could go to your rich buddy Frank and say, hey, you know me, you know how awesome my lemonade is, how about you give me the money to build a new stand and I'll split the profits with you even-steven? Franks says sure.
Congratulations, Frank has just invested in your company. He became a co-owner of the company, giving you the money in the hope that he'll eventually get back even more money in profits as your company grows. That's investing , and it comes in two basic varieties: Buying something in the hope that it will be worth more in the future, or lending someone money and having them pay you back with interest.`,
    title: 'Investing',
    key: 'investing',
  },
  {
    imageUri: '/flash-cards/mortgage.jpeg',
    descriptionImageUri: '/flash-cards/mortgage.png',
    paraContent: `You want a house. You can't afford said house. Bank has money. Go to bank. Bank says will give money for house. Super sweet. You owe bank interest. Buy house for 100K. Spend >200K with interest. That is home mortgage. One more term to learn here is collateral. The house is used as collateral for the loan. That means that the reason the bank is willing to lend you so much money (hundreds of thousands of dollars!) at a low rate is that the bank can take the house if you don't pay them in time..`,
    title: 'Mortgage',
    key: 'mortgage',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    descriptionImageUri: '/flash-cards/insurance.jpeg',
    paraContent: `Let's say you go to school with 10 other kids and one bad guy Frank who is always stealing one kid's lunch money. Every single day the bad guy finds one random kid and steals their $5.
    But the teacher's aren't doing anything about it.  But you are up to solve this issue.
    Fortunately, you're someone who loves math and you come up with a exciting idea.
    You go to the other kids and tell them that if they give you just $0.75 then you'll buy them lunch if the bad guy Frank steals their money. You're selling them lunch insurance.
    The other kids think this is okay. They give you $0.75/day which leaves them $4.25 for lunch, which is still enough for a decent lunch. If the bad guy Frank does take their $4.25, you buy them a $5 lunch. Sweet deal for them.
    How about for you? What do you get for your brilliant math skills?
    Well, every day you collect $7.50 (10 X $.75) and you pay for one person's lunch ($5).
    That means:
    You make $2.50 /day
    The bad guy Frank still makes  $4.25/day 
    No kid ever goes without a lunch.
    Considering the circumstances, it's a pretty sweet deal for everyone, right? This is insurance!`,
    title: 'Insurance',
    key: 'cards',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    descriptionImageUri: '/flash-cards/investments.jpeg',
    paraContent: `Say you have lemonade stand. You built it, you buy the lemons and the sugar and the cups, and any profit left after doing those things is all yours. You're the sole owner.
Now, your lemonade is delicious and the stand is doing really well. You'd like to open another one and hire some helpers to run it for you. You could wait until you pile up enough profit, though that might take a long time. You could go to the bank and ask them to lend you money, but banks are pretty stingy about who they'll lend money to and they'll want you to pay it back with interest.
Or, you could go to your rich buddy Frank and say, hey, you know me, you know how awesome my lemonade is, how about you give me the money to build a new stand and I'll split the profits with you even-steven? Franks says sure.
Congratulations, Frank has just invested in your company. He became a co-owner of the company, giving you the money in the hope that he'll eventually get back even more money in profits as your company grows. That's investing , and it comes in two basic varieties: Buying something in the hope that it will be worth more in the future, or lending someone money and having them pay you back with interest.`,
    title: 'Investing',
    key: 'cards-02',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    descriptionImageUri: '/flash-cards/investments.jpeg',
    paraContent: `Say you have lemonade stand. You built it, you buy the lemons and the sugar and the cups, and any profit left after doing those things is all yours. You're the sole owner.
Now, your lemonade is delicious and the stand is doing really well. You'd like to open another one and hire some helpers to run it for you. You could wait until you pile up enough profit, though that might take a long time. You could go to the bank and ask them to lend you money, but banks are pretty stingy about who they'll lend money to and they'll want you to pay it back with interest.
Or, you could go to your rich buddy Frank and say, hey, you know me, you know how awesome my lemonade is, how about you give me the money to build a new stand and I'll split the profits with you even-steven? Franks says sure.
Congratulations, Frank has just invested in your company. He became a co-owner of the company, giving you the money in the hope that he'll eventually get back even more money in profits as your company grows. That's investing , and it comes in two basic varieties: Buying something in the hope that it will be worth more in the future, or lending someone money and having them pay you back with interest.`,
    title: 'Investing',
    key: 'cards-03',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    descriptionImageUri: '/flash-cards/investments.jpeg',
    paraContent: `Say you have lemonade stand. You built it, you buy the lemons and the sugar and the cups, and any profit left after doing those things is all yours. You're the sole owner.
Now, your lemonade is delicious and the stand is doing really well. You'd like to open another one and hire some helpers to run it for you. You could wait until you pile up enough profit, though that might take a long time. You could go to the bank and ask them to lend you money, but banks are pretty stingy about who they'll lend money to and they'll want you to pay it back with interest.
Or, you could go to your rich buddy Frank and say, hey, you know me, you know how awesome my lemonade is, how about you give me the money to build a new stand and I'll split the profits with you even-steven? Franks says sure.
Congratulations, Frank has just invested in your company. He became a co-owner of the company, giving you the money in the hope that he'll eventually get back even more money in profits as your company grows. That's investing , and it comes in two basic varieties: Buying something in the hope that it will be worth more in the future, or lending someone money and having them pay you back with interest.`,
    title: 'Investing',
    key: 'cards-04',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    descriptionImageUri: '/flash-cards/investments.jpeg',
    paraContent: `Say you have lemonade stand. You built it, you buy the lemons and the sugar and the cups, and any profit left after doing those things is all yours. You're the sole owner.
Now, your lemonade is delicious and the stand is doing really well. You'd like to open another one and hire some helpers to run it for you. You could wait until you pile up enough profit, though that might take a long time. You could go to the bank and ask them to lend you money, but banks are pretty stingy about who they'll lend money to and they'll want you to pay it back with interest.
Or, you could go to your rich buddy Frank and say, hey, you know me, you know how awesome my lemonade is, how about you give me the money to build a new stand and I'll split the profits with you even-steven? Franks says sure.
Congratulations, Frank has just invested in your company. He became a co-owner of the company, giving you the money in the hope that he'll eventually get back even more money in profits as your company grows. That's investing , and it comes in two basic varieties: Buying something in the hope that it will be worth more in the future, or lending someone money and having them pay you back with interest.`,
    title: 'Investing',
    key: 'cards-05',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    descriptionImageUri: '/flash-cards/investments.jpeg',
    paraContent: `Say you have lemonade stand. You built it, you buy the lemons and the sugar and the cups, and any profit left after doing those things is all yours. You're the sole owner.
Now, your lemonade is delicious and the stand is doing really well. You'd like to open another one and hire some helpers to run it for you. You could wait until you pile up enough profit, though that might take a long time. You could go to the bank and ask them to lend you money, but banks are pretty stingy about who they'll lend money to and they'll want you to pay it back with interest.
Or, you could go to your rich buddy Frank and say, hey, you know me, you know how awesome my lemonade is, how about you give me the money to build a new stand and I'll split the profits with you even-steven? Franks says sure.
Congratulations, Frank has just invested in your company. He became a co-owner of the company, giving you the money in the hope that he'll eventually get back even more money in profits as your company grows. That's investing , and it comes in two basic varieties: Buying something in the hope that it will be worth more in the future, or lending someone money and having them pay you back with interest.`,
    title: 'Investing',
    key: 'cards-06',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    descriptionImageUri: '/flash-cards/investments.jpeg',
    paraContent: `Say you have lemonade stand. You built it, you buy the lemons and the sugar and the cups, and any profit left after doing those things is all yours. You're the sole owner.
Now, your lemonade is delicious and the stand is doing really well. You'd like to open another one and hire some helpers to run it for you. You could wait until you pile up enough profit, though that might take a long time. You could go to the bank and ask them to lend you money, but banks are pretty stingy about who they'll lend money to and they'll want you to pay it back with interest.
Or, you could go to your rich buddy Frank and say, hey, you know me, you know how awesome my lemonade is, how about you give me the money to build a new stand and I'll split the profits with you even-steven? Franks says sure.
Congratulations, Frank has just invested in your company. He became a co-owner of the company, giving you the money in the hope that he'll eventually get back even more money in profits as your company grows. That's investing , and it comes in two basic varieties: Buying something in the hope that it will be worth more in the future, or lending someone money and having them pay you back with interest.`,
    title: 'Investing',
    key: 'cards-07',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    descriptionImageUri: '/flash-cards/investments.jpeg',
    paraContent: `Say you have lemonade stand. You built it, you buy the lemons and the sugar and the cups, and any profit left after doing those things is all yours. You're the sole owner.
Now, your lemonade is delicious and the stand is doing really well. You'd like to open another one and hire some helpers to run it for you. You could wait until you pile up enough profit, though that might take a long time. You could go to the bank and ask them to lend you money, but banks are pretty stingy about who they'll lend money to and they'll want you to pay it back with interest.
Or, you could go to your rich buddy Frank and say, hey, you know me, you know how awesome my lemonade is, how about you give me the money to build a new stand and I'll split the profits with you even-steven? Franks says sure.
Congratulations, Frank has just invested in your company. He became a co-owner of the company, giving you the money in the hope that he'll eventually get back even more money in profits as your company grows. That's investing , and it comes in two basic varieties: Buying something in the hope that it will be worth more in the future, or lending someone money and having them pay you back with interest.`,
    title: 'Investing',
    key: 'cards-08',
  },
];

export default function UserIntro({ gotoNextStage }: Props) {
  const {
    lessonOne: { stage },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <AnimatePresence>
      <motion.div
        key={PAGES.LESSON_ONE}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeIn' }}>
        <div
          className='grid w-full h-full grid-cols-5 gap-2 p-4'
          aria-label='Flash-Cards'>
          {FlashCards.map((card) => (
            <FlashCard {...card} id={card.key} />
          ))}
        </div>
        <div className='flex justify-around w-full px-2'>
          <button
            className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
            onClick={() => {
              gotoNextStage(PAGES.BANK);
            }}>
            Previous
          </button>
          <button
            className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
            onClick={() => gotoNextStage(PAGES.FEEDBACK)}>
            Move to Next Section
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
