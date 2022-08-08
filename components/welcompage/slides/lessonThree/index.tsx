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
    imageUri: '/flash-cards/mortgage-img.png',
    descriptionImageUri: '/flash-cards/mortgage.png',
    paraContent: `You want a house. You can't afford said house. Bank has money. Go to bank. Bank says will give money for house. Super sweet. You owe bank interest. Buy house for 100K. Spend >200K with interest. That is home mortgage. One more term to learn here is collateral. The house is used as collateral for the loan. That means that the reason the bank is willing to lend you so much money (hundreds of thousands of dollars!) at a low rate is that the bank can take the house if you don't pay them in time..`,
    title: 'Mortgage',
    key: 'mortgage',
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
    No kid ever goes without a lunch.
    Considering the circumstances, it's a pretty sweet deal for everyone, right? This is insurance!`,
    title: 'Insurance',
    key: 'cards',
  },
  {
    imageUri: '/flash-cards/taxes.png',
    descriptionImageUri: '/flash-cards/tax-return.jpeg',
    paraContent: `Your future employer takes a certain percentage of your income every pay cheque and instead of paying it to you, it gets paid to the government instead.
    A tax return is your opportunity to prove to the government that they took too much and that they should give some of it back to you.
    So a tax return is a document that lists off how much money you officially earned in the past year, how much you saved, invested, spent, donated, etc. After all those values are calculated together with complicated formulas (that change from year to year!), a number gets spit out that tells you and the government how much more tax money they took from you compared to what they should have. That number is the amount of money that is returned to you.`,
    title: 'Taxes',
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
    paraContent: `The best way to think about a credit card is it is a loan. Every time you buy something with your credit card you are actually taking out a loan from the credit card company. 
    Let’s take an example:
    You have a credit card with a $1,000 limit where the billing cycle starts on the first of each month. You go out tomorrow and you charge a $100 dollar purchase to your card. You have now borrowed $100 of your $1000 limit. You cannot make a $1000 purchase now; your card would be declined. You could however spend up to $900 more, but we will assume you don't. Let’s consider that you don't spend any more money this month. On the first day of the next month, you will get a bill from your credit card company. It will tell you a bunch of things, like transactions and amounts for the previous month, your available credit (still only $900), your bill due date and your minimum required payment (let's say $15).
    Now you have 3 (but really only 2 reasonable options):
    the non-viable option; you ignore it and eventually you will start getting past due notices, the card will be canceled. 
    Before the due date, you choose to pay off the card in full for $100 and done. Your next month's bill will show a 0 balance and $1000 available credit limit. You didn't pay any interest, and didn't lose any money.
    You choose to pay the minimum or any other non full payment above the minimum. Let's say you pay $20; now let's take a look at your next month's bill (still imagining you did not charge anything new to the card). Now the $80 that you didn't pay off during the first month will accrue interest based on the interest rate established when you opened the card. So now your bill will say you owe $83 or so, and you, again, can make a minimum payment of $15. Eventually after 7-8 months of minimum payments you will pay off the entire amount and gain back your full credit limit, but you will also have lost a portion of money to interest payments.
`,
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
    imageUri: '/flash-cards/estateplanning.png',
    descriptionImageUri: '/flash-cards/estateplanning.jpg',
    paraContent: `Estate planning is needed before a person dies. One can decide how their assets (property, money, jewelry, vehicles, etc.) will be distributed after their death. There are legal procedures involved. A will is written properly, and there are laws of inheritance that will be followed. A will is a legal document that expresses a person's wishes as to how their properties and more assets will be distributed after their death and who will get those.
    A father of 2 died before writing a will and the children fought a court case to get ownership of assets. The judge then decided who would get what and how much because there was no will. So, it is always better to do estate planning so your assets go where you want them to. `,
    title: 'Estate Planning',
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
