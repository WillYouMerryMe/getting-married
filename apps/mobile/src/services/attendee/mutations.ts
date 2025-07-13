import { useMutation } from '@tanstack/react-query';
import {
  deleteAttendee,
  patchAttendee,
  postAccount,
  postAttendee,
  postIntention,
} from './api';
import {
  PatchAttendeeParams,
  PostAccountReq,
  PostAttendeeReq,
  PostIntentionReq,
} from '@/types/invitation/remote';
import { useSetAccountStepStore } from '@/stores/invitation/accountStep';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/common/constant';
import { useToast } from '@/utils/useToast';

export const useAccount = () => {
  const setAccountStep = useSetAccountStepStore();
  const { show } = useToast();

  const { mutate: accountMutate, ...restMutate } = useMutation({
    mutationFn: ({ cardId, name, phoneNumber }: PostAccountReq) =>
      postAccount({ cardId, name, phoneNumber }),
    onSuccess: () => {
      setAccountStep('계좌번호');
    },
    onError: () => {
      show('잠시후 다시 시도해주세요', 'ERROR');
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
  const { show } = useToast();

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
      show('참석자 추가에 성공했습니다', 'SUCCESS');
    },
    onError: () => {
      show('참석자 추가에 실패했습니다', 'ERROR');
    },
  });

  return { attendeeMutate, ...restMutate };
};

export const useDeleteAttendee = () => {
  const { mutate: deleteAttendeeMutate, ...restMutate } = useMutation({
    mutationFn: (id: string) => deleteAttendee(id),
  });

  return { deleteAttendeeMutate, ...restMutate };
};

export const usePatchAttendee = () => {
  const { mutate: patchAttendeeMutate, ...restMutate } = useMutation({
    mutationFn: ({
      attendeeId,
      numberOfAttendees,
      isAttending,
      hasSentGift,
      mealPreference,
    }: PatchAttendeeParams) =>
      patchAttendee({
        attendeeId,
        numberOfAttendees,
        isAttending,
        hasSentGift,
        mealPreference,
      }),
  });

  return { patchAttendeeMutate, ...restMutate };
};
