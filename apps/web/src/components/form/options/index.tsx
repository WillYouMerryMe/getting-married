import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  InvitationNameOption,
  InvitationSetupOption,
  MainScreenOption,
  InvitationMessageOption,
  CoupleIntroOption,
  CeremonyInfoOption,
  GalleryOption,
  VideoOption,
  DirectionsOption,
  AccountInfoOption,
  NoticeOption,
  GuestbookOption,
  GuestSnapOption,
  UrlShareStyleOption,
} from '@/components/form';
import { useState } from 'react';
import { IconDragHandle } from '@merried/icon';
import { color } from '@merried/design-system';
import { useComponentOrderStore } from '@/store/form/orderState';

const OPTION_COMPONENTS = [
  { id: 'INVITATION_MESSAGE', Component: InvitationMessageOption },
  { id: 'GROOM_BRIDE_PROFILE', Component: CoupleIntroOption },
  { id: 'WEDDING_DATE', Component: CeremonyInfoOption },
  { id: 'PHOTO_GALLERY', Component: GalleryOption },
  { id: 'VIDEO_GALLERY', Component: VideoOption },
  { id: 'LOCATION_GUIDE', Component: DirectionsOption },
  { id: 'ACCOUNT_INFO', Component: AccountInfoOption },
  { id: 'GUEST_NOTICE', Component: NoticeOption },
  { id: 'GUEST_BOOK', Component: GuestbookOption },
  { id: 'GUEST_SNAPSHOTS', Component: GuestSnapOption },
  { id: 'SHARE_URL_STYLE', Component: UrlShareStyleOption },
];

const SortableItem = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <StyledOptionItem ref={setNodeRef} style={style} {...attributes}>
      {children}
      <IconDragHandle {...listeners} />
    </StyledOptionItem>
  );
};

interface Props {
  templateId: string;
}

const Options = ({ templateId }: Props) => {
  const [items, setItems] = useState(OPTION_COMPONENTS.map((item) => item.id));
  const [componentOrder, setComponentOrder] = useComponentOrderStore();

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.indexOf(active.id);
    const newIndex = items.indexOf(over.id);
    const newItems = arrayMove(items, oldIndex, newIndex);

    setItems(newItems);
    setComponentOrder(newItems);
  };

  return (
    <StyledOptions>
      <InvitationNameOption />
      <InvitationSetupOption />
      <MainScreenOption id={templateId} />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id: string) => {
            const Component = OPTION_COMPONENTS.find((item) => item.id === id)?.Component;
            return Component ? (
              <SortableItem key={id} id={id}>
                <Component />
              </SortableItem>
            ) : null;
          })}
        </SortableContext>
      </DndContext>
    </StyledOptions>
  );
};

export default Options;

const StyledOptions = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  padding-bottom: 100px;
  gap: 18px;

  height: 874px;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE & Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

const StyledOptionItem = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'flex-start' })}
  padding: 28px 20px;
  width: 548px;
  border-radius: 8px;
  background: ${color.G0};
`;
