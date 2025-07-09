import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface GalleryImageState {
  isToggle: boolean;
  title: string;
  imageList: File[] | null;
}

export const defaultGalleryImage: GalleryImageState = {
  isToggle: false,
  title: '',
  imageList: null,
};

const galleryImageAtomState = atom<GalleryImageState>({
  key: 'gallery-image-state',
  default: defaultGalleryImage,
});

export const useGalleryImageStore = () => useRecoilState(galleryImageAtomState);
export const useSetGalleryImageStore = () => useSetRecoilState(galleryImageAtomState);
export const useGalleryImageValueStore = () => useRecoilValue(galleryImageAtomState);
