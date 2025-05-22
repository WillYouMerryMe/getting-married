import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface GalleryImageState {
  title: string;
  imageList: string[] | null;
}

const defaultCeremonyInfo: GalleryImageState = {
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
