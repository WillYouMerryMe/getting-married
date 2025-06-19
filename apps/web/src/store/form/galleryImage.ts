import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface GalleryImageState {
  isToggle: boolean;
  title: string;
  imageList: string[] | null;
}

const defaultCeremonyInfo: GalleryImageState = {
  isToggle: false,
  title: '',
  imageList: null,
};

const galleryImageAtomState = atom<GalleryImageState>({
  key: 'gallery-image-state',
  default: defaultCeremonyInfo,
});

export const useGalleryImageStore = () => useRecoilState(galleryImageAtomState);
export const useSetGalleryImageStore = () => useSetRecoilState(galleryImageAtomState);
export const useGalleryImageValueStore = () => useRecoilValue(galleryImageAtomState);
