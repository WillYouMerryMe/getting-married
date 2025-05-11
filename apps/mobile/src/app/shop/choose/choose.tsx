import {
  MEAL,
  MEAL_OPTIONS,
  PAID,
  PAID_OPTIONS,
  STATUS,
  STATUS_OPTIONS,
} from '@/constants/shop/constants';
import { Meal, Paid, Status } from '@/types/shop/client';
import { color } from '@merried/design-system';
import { ActionButton, Button, Column, MiniDropdown, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import { useCTAButton, useFieldChange } from './choose.hooks';

const Choose = () => {
  const { handleChange, attendee } = useFieldChange();
  const { handleMoveSend } = useCTAButton();

  return (
    <StyledChoose>
      <Column width="100%" gap={32}>
        <Column width="100%" gap={24}>
          <Text fontType="H2" color={color.G900}>
            답례품
          </Text>
          <Row width="100%" alignItems="center" justifyContent="space-between">
            <MiniDropdown
              label="참석 여부"
              name="status"
              value={STATUS[attendee.status as Status]}
              data={STATUS_OPTIONS}
              onChange={handleChange}
            />
            <MiniDropdown
              label="축의금 여부"
              name="paid"
              value={PAID[attendee.paid as Paid]}
              data={PAID_OPTIONS}
              onChange={handleChange}
            />
            <MiniDropdown
              label="식권 여부"
              name="meal"
              value={MEAL[attendee.meal as Meal]}
              data={MEAL_OPTIONS}
              onChange={handleChange}
            />
          </Row>
        </Column>
        <Column width="100%" gap={20}>
          <Row alignItems="center" justifyContent="space-between">
            <Column gap={6}>
              <Text fontType="P3" color="#A2A2A2">
                선택한 답례품
              </Text>
              <Text fontType="H3" color="#1A1A1A">
                선택한 답례품
              </Text>
            </Column>
            <ActionButton onClick={() => {}}>변경</ActionButton>
          </Row>
          <ItemImage />
        </Column>
      </Column>
      <Button width="100%" size="VERY_LARGE" onClick={handleMoveSend}>
        <Text fontType="Button3" color={color.G0}>
          다음으로
        </Text>
      </Button>
    </StyledChoose>
  );
};

export default Choose;

const StyledChoose = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: calc(100vh - 71px - 142px);
`;

const ItemImage = styled.div`
  width: 100%;
  aspect-ratio: 351 / 155;
  background: url('/images/ssg.svg') center / contain no-repeat;
`;
