import { color } from '@merried/design-system';
import { IconDragHandle } from '@merried/icon';
import { CheckBox, Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { flex } from '@merried/utils';
import { useReducer } from 'react';
import { styled } from 'styled-components';
import type { AccountState, AccountAction, AccountField } from '@/types/form/client';

const reducer = (state: AccountState, action: AccountAction): AccountState => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    default:
      return state;
  }
};

const initialState: AccountState = {
  groom: false,
  bride: false,
  groomFather: false,
  groomMother: false,
  brideFather: false,
  brideMother: false,
};

const accountOptions: { label: string; key: AccountField }[] = [
  { label: '신랑', key: 'groom' },
  { label: '신부', key: 'bride' },
  { label: '신랑 아버지', key: 'groomFather' },
  { label: '신랑 어머니', key: 'groomMother' },
  { label: '신부 아버지', key: 'brideFather' },
  { label: '신부 어머니', key: 'brideMother' },
];

const AccountInfoOption = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StyledAccountInfoOption>
      <Column gap={28}>
        <Row gap={8}>
          <ToggleButton isOpen={false} />
          <Text fontType="H3" color={color.G900}>
            계좌 번호
          </Text>
        </Row>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            제목
          </Text>
          <Input width={384} platform="DESKTOP" placeholder="제목을 입력해주세요" />
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            내용
          </Text>
          <Input width={384} platform="DESKTOP" placeholder="내용을 입력해주세요" />
        </Column>
        {accountOptions.map(({ label, key }) => (
          <Column key={key} gap={8}>
            <CheckBox
              label={label}
              checked={state[key]}
              onChange={() => dispatch({ type: 'TOGGLE', payload: key })}
            />
            {state[key] && (
              <Column gap={8}>
                <Input width={384} platform="DESKTOP" placeholder="은행을 입력해주세요" />
                <Input
                  width={384}
                  platform="DESKTOP"
                  placeholder="계좌번호를 입력해주세요"
                />
                <Input
                  width={384}
                  platform="DESKTOP"
                  placeholder="예금주를 입력해주세요"
                />
              </Column>
            )}
          </Column>
        ))}
      </Column>
      <IconDragHandle />
    </StyledAccountInfoOption>
  );
};

export default AccountInfoOption;

const StyledAccountInfoOption = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'flex-start' })}
  padding: 28px 20px;
  border-radius: 8px;
  background: ${color.G0};
`;
