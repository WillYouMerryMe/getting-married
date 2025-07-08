import { useMutation } from '@tanstack/react-query';
import { postAccount, postAttendee, postIntention } from './api';
import {
  PostAccountReq,
  PostAttendeeReq,
  PostIntentionReq,
} from '@/types/invitation/remote';
import { useSetAccountStepStore } from '@/stores/invitation/accountStep';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/common/constant';

export const useAccount = () => {
  const setAccountStep = useSetAccountStepStore();

  const { mutate: accountMutate, ...restMutate } = useMutation({
    mutationFn: ({ cardId, name, phoneNumber }: PostAccountReq) =>
      postAccount({ cardId, name, phoneNumber }),
    onSuccess: () => {
      setAccountStep('계좌번호');
    },
    onError: () => {
      alert('잠시후 다시 시도해주시길 바랍니다.');
    },
  });

  return { accountMutate, ...restMutate };
};

export const useIntention = () => {
  const { mutate: intentionMutate, ...restMutate } = useMutation({
    mutationFn: ({
      cardId,
      side,
      name,
      phoneNumber,
      numberOfAttendees,
      mealPreference,
    }: PostIntentionReq) =>
      postIntention({
        cardId,
        side,
        name,
        phoneNumber,
        numberOfAttendees,
        mealPreference,
      }),
  });

  return { intentionMutate, ...restMutate };
};

export const useAttendeeMutation = () => {
  const router = useRouter();

  const { mutate: attendeeMutate, ...restMutate } = useMutation({
    mutationFn: ({
      cardId,
      side,
      name,
      phoneNumber,
      numberOfAttendees,
      mealPreference,
      isAttending,
      hasSentGift,
    }: PostAttendeeReq) =>
      postAttendee({
        cardId,
        side,
        name,
        phoneNumber,
        numberOfAttendees,
        mealPreference,
        isAttending,
        hasSentGift,
      }),
    onSuccess: () => {
      router.push(ROUTES.MANAGE);
    },
    onError: () => {
      alert('잠시후 다시 시도해주세요.');
    },
  });

  return { attendeeMutate, restMutate };
};
