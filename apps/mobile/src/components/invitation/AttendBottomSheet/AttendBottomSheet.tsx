import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import ButtonGroup from '@/components/common/ButtonGroup/ButtonGroup';
import DesktopButtonGroup from '@/components/common/ButtonGroup/DesktopButtonGroup';
import { color } from '@merried/design-system';
import { Button, Column, Input, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import { useInput } from './AttendBottomSheet.hooks';

interface AttendBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const AttendBottomSheet = ({ isOpen, onClose }: AttendBottomSheetProps) => {
  const { handleCountChange, handleCountBlur, count } = useInput();

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <StyledAttendBottomSheet>
        <Column gap={40}>
          <Column gap={24}>
            <Column>
              <Text fontType="H2" color={color.G900}>
                결혼식 참석 의사
              </Text>
              <Text fontType="P2" color={color.G80}>
                솔직한 답은 신랑•신부에게 도움이 됩니다
              </Text>
            </Column>
            <ButtonGroup
              buttons={[
                { label: '신랑측', onClick: () => {} },
                { label: '신부측', onClick: () => {} },
              ]}
              pointColor={color.pointYellow}
            />
            <Column gap={18}>
              <Input
                label="이름"
                placeholder="이름을 입력해주세요"
                size="LARGE"
                width="100%"
                onChange={() => {}}
              />
              <Input
                label="전화번호"
                placeholder="전화번호를 입력해주세요"
                size="LARGE"
                width="100%"
                onChange={() => {}}
              />
              <Input
                label="참석인원"
                size="LARGE"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min={1}
                step={1}
                value={count}
                onChange={handleCountChange}
                onBlur={handleCountBlur}
              />
              <DesktopButtonGroup
                title="식사 여부"
                buttons={[
                  { label: '예정', onClick: () => {} },
                  { label: '안함', onClick: () => {} },
                  { label: '미정', onClick: () => {} },
                ]}
                pointColor={color.pointYellow}
              />
            </Column>
          </Column>
          <Button
            size="VERY_LARGE"
            onClick={() => {}}
            pointColor={color.pointYellow}
            width="100%"
          >
            <Text fontType="Button3" color={color.G900}>
              참석 의사 전달하기
            </Text>
          </Button>
        </Column>
      </StyledAttendBottomSheet>
    </BottomSheet>
  );
};

export default AttendBottomSheet;

const StyledAttendBottomSheet = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'stretch' })}
  width: 100%;
  margin-top: 40px;
`;
