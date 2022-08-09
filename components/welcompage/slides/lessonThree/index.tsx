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
    imageUri: '/flash-cards/savings.png',
    descriptionImageUri: '/flash-cards/savings.jpg',
    paraContent: `Savings are forms of money that are set aside for use in the future. Money that is not meant to be spent immediately. These can be used either for future purchases such as a car or for emergencies such as illnesses. Savings are also able to be invested in order to grow your income without spending.
    Savings are very important as they help you build towards your future. Larger purchases such as vehicles or houses tend to cost a lot of money, therefore having money you've been accumulating over time will help you make these larger purchases.
    When it comes to saving, it's better to start young and build up the habit. Even if it's only a couple of dollars a month, everything counts. If you start building this habit young, you will be putting yourself in a very good situation when you start earning a higher salary`,
    title: 'Savings',
    key: 'tax-returns',
  },
  {
    imageUri: '/flash-cards/debit-cards.png',
    descriptionImageUri: '/flash-cards/debit-cards.jpg',
    paraContent: `Debit cards are linked to a bank account that is your chequing account and whenever you pay using a debit card, the amount is deducted from the bank account on completion of the transaction. So, instead of withdrawing and handing over cash for a purchase, you can swipe the card. You put money into the account and then draw money out by using the card. Most people have their paychecks auto-deposit into their checking. They're cards intended for your convenience, not for the bank's profit through massive fees.`,
    title: 'Debit Cards',
    key: 'cards-03',
  },
  {
    imageUri: '/flash-cards/creditcard.png',
    descriptionImageUri: '/flash-cards/creditcard.jpg',
    paraContent: `For credit cards, as the name suggests, the money is not taken directly from you. The institution that issued the card gives the money at the time of making the payment, and you have to pay the amount back later. There is a time limit in which you have to pay back. If you make a late payment, you have to pay back the amount owed + some interest on it which is decided by the institution that issued the card. Simply, you borrow money or think of it as a loan.
    How much can you borrow? The companies that issue cards decide a credit limit. For example, for a card the limit might be $1000 per month. Which means you can’t make a payment that is more than $1000 using that credit card and you can’t make multiple payments whose sum is more than $1000, unless you pay back some amount to have some more room to borrow.
    There are special offers for students who want to get credit cards. Check them out by talking to a financial advisor or by searching online. How timely you pay back and how much you pay back affects your credit score. So, remember to pay what you owe in time!`,
    title: 'Credit Card',
    key: 'cards-04',
  },
  {
    imageUri: '/flash-cards/interestrates.png',
    descriptionImageUri: '/flash-cards/interestrates.jpg',
    paraContent: `You want to borrow $12000 to buy my car. Well I can give you $12000 unless I get something in return. So your gonna pay me back 1100 a month for 12 months. That's a total of $13200 that you're gonna pay me back. That extra $1200 dollars is interest. Meaning my profit for giving you money.`,
    title: 'Interest Rates',
    key: 'cards-05',
  },
  {
    imageUri: '/flash-cards/compoundinterest.png',
    descriptionImageUri: '/flash-cards/compoundinterest.jpg',
    paraContent: `Compound interest means that the interest is added to the balance, and next period's interest is calculated off of the total balance, including the interest. Hence, it compounds.
    $100 gaining 10% interest, compounding annually, grows like this:    
    End of year 1 - 10% of $100 which is $10, total balance is $110.    
    End of year 2 - 10% of $110 which is $11, total balance is $121.    
    End of year 3 - 10% of $121 which is $12.12, total balance is $133.12.  
    End of year 4 - 10% of $133.12 which is $13.31, total balance is $146.43   
    You see how each year the amount of interest goes up? It's compounding - you're getting interest on the interest!
    `,
    title: 'Compound Interests',
    key: 'cards-06',
  },
  {
    imageUri: '/flash-cards/creditScore.png',
    descriptionImageUri: '/flash-cards/creditScore.jpg',
    paraContent: ` It's a one-number metric used by lenders to judge how able you are or will be able to pay back your debts. 300 is bad. Noone will lend you anything. 900 is perfect. You could walk into a bank and ask for a $500k mortgage and you should have no problem.
    Generally we cannot say much on how they are calculated but remember:
    The more you pay off your debts (credit cards) = good
    You pay off big % of your debts every month (good) vs. just paying the minimum (bad)
    Do you have just a few big debts like a mortgage that you make regular payments on? Good. Or do you have lots of small debts like 3 credit cards that all carry balances? more outstanding debt = bad.
    To summarize this number, shows your creditworthiness and it ranges from 350 to 850. Its important because it gives some insight on how likely it would be for you to pay back your loans, and thus whether or not the lender would want to risk giving you money. Pretty much, its trustworthiness folks!
    `,
    title: 'Credit Score',
    key: 'cards-07',
  },
  {
    imageUri: '/flash-cards/investing.png',
    descriptionImageUri: '/flash-cards/investments.jpeg',
    paraContent: `Say you have lemonade stand. You built it, you buy the lemons and the sugar and the cups, and any profit left after doing those things is all yours. You're the sole owner.
Now, your lemonade is delicious and the stand is doing really well. You'd like to open another one and hire some helpers to run it for you. You could wait until you pile up enough profit, though that might take a long time. You could go to the bank and ask them to lend you money, but banks are pretty stingy about who they'll lend money to and they'll want you to pay it back with interest.
Or, you could go to your rich buddy Frank and say, hey, you know me, you know how awesome my lemonade is, how about you give me the money to build a new stand and I'll split the profits with you even-steven? Franks says sure.
Congratulations, Frank has just invested in your company. He became a co-owner of the company, giving you the money in the hope that he'll eventually get back even more money in profits as your company grows. That's investing , and it comes in two basic varieties: Buying something in the hope that it will be worth more in the future, or lending someone money and having them pay you back with interest.`,
    title: 'Investing',
    key: 'investing',
  },
  {
    imageUri: '/flash-cards/insurance.png',
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
    No kid ever goes without a lunch. Considering the circumstances, it's a pretty sweet deal for everyone, right? This is insurance!`,
    title: 'Insurance',
    key: 'cards',
  },
  {
    imageUri: '/flash-cards/mortgage-img.png',
    descriptionImageUri: '/flash-cards/mortgage.png',
    paraContent: `You want a house. You can't afford said house. Bank has money. Go to bank. Bank says will give money for house. Super sweet. You owe bank interest. Buy house for 100K. Spend >200K with interest. That is home mortgage. One more term to learn here is collateral. The house is used as collateral for the loan. That means that the reason the bank is willing to lend you so much money (hundreds of thousands of dollars!) at a low rate is that the bank can take the house if you don't pay them in time..`,
    title: 'Mortgage',
    key: 'mortgage',
  },

  {
    imageUri: '/flash-cards/donating.png',
    descriptionImageUri: '/flash-cards/donatingDesc.png',
    paraContent: `Giving promotes feelings of happiness. Helping others feels good.
    Benefits of Charity - You can help out local communities or groups of people or causes in need. 
    Steps - Choose your cause, Choose the amount, Make your donation.
    ATB Cares - ATB will match 20% of every dollar donated to Alberta-based, non-religious charities through this site, up to $30,000 per month. Eligible causes may receive up to $5,000 of matching per year (April 1-March 31). Individual donations qualify for a maximum donation match of $500.`,
    title: 'Donating',
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
            className='bg-button py-2 px-4 rounded-md text-white font-inter'
            onClick={() => {
              gotoNextStage(PAGES.BANK);
            }}>
            Previous
          </button>
          <button
            className='bg-button py-2 px-4 rounded-md text-white font-inter'
            onClick={() => gotoNextStage(PAGES.FEEDBACK)}>
            Move to Next Section
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
