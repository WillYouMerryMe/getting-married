import { useIsToggleHandler } from '@/hooks/useIsToggleHandler';
import { useAccountInfoStore } from '@/store/form/account';
import { AccountField } from '@/types/form/client';
import { color } from '@merried/design-system';
import { CheckBox, Column, Input, Row, Text, ToggleButton } from '@merried/ui';

const accountOptions: {
  label: string;
  key: AccountField;
}[] = [
  { label: '신랑', key: 'groom' },
  { label: '신부', key: 'bride' },
  { label: '신랑 아버지', key: 'groomFather' },
  { label: '신랑 어머니', key: 'groomMother' },
  { label: '신부 아버지', key: 'brideFather' },
  { label: '신부 어머니', key: 'brideMother' },
];

const AccountInfoOption = () => {
  const [accountInfo, setAccountInfo] = useAccountInfoStore();

  const handleTitleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePersonInputChange =
    (personKey: AccountField) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setAccountInfo((prev) => ({
        ...prev,
        [personKey]: {
          ...prev[personKey],
          [name]: value,
        },
      }));
    };

  const handleShowChange = (personKey: AccountField) => (value: boolean) => {
    setAccountInfo((prev) => ({
      ...prev,
      [personKey]: {
        ...prev[personKey],
        isVisible: value,
      },
    }));
  };

  const handleToggleChange = useIsToggleHandler(setAccountInfo);

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={accountInfo.isToggle} onToggle={handleToggleChange} />
        <Text fontType="H3" color={color.G900}>
          계좌 번호
        </Text>
      </Row>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          제목
        </Text>
        <Input
          name="title"
          width={384}
          platform="DESKTOP"
          placeholder="제목을 입력해주세요"
          value={accountInfo.title}
          onChange={handleTitleMessageChange}
        />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          내용
        </Text>
        <Input
          name="message"
          width={384}
          platform="DESKTOP"
          placeholder="내용을 입력해주세요"
          value={accountInfo.message}
          onChange={handleTitleMessageChange}
        />
      </Column>
      {accountOptions.map(({ label, key }) => {
        const person = accountInfo[key];
        return (
          <Column key={key} gap={8}>
            <CheckBox
              label={label}
              checked={person.isVisible}
              onChange={handleShowChange(key)}
            />
            {person.isVisible && (
              <Column gap={8}>
                <Input
                  name="bank"
                  width={384}
                  platform="DESKTOP"
                  placeholder="은행을 입력해주세요"
                  value={person.bank}
                  onChange={handlePersonInputChange(key)}
                />
                <Input
                  name="accountNumber"
                  width={384}
                  platform="DESKTOP"
                  placeholder="계좌번호를 입력해주세요"
                  value={person.accountNumber}
                  onChange={handlePersonInputChange(key)}
                />
                <Input
                  name="accountHolder"
                  width={384}
                  platform="DESKTOP"
                  placeholder="예금주를 입력해주세요"
                  value={person.accountHolder}
                  onChange={handlePersonInputChange(key)}
                />
              </Column>
            )}
          </Column>
        );
      })}
    </Column>
  );
};

export default AccountInfoOption;
