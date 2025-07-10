import { getPresigned, putPresigned } from '@/services/snapshot/api';
import { PostGuestSnapShotReq } from '@/types/snapshot/remote';
import { useState } from 'react';

export const usePostGuestSnapShot = (id: string) => {
  const [image, setImage] = useState<File[] | null>(null);

  const handleImageChange = (files: (File | string)[] | null) => {
    if (!files) {
      setImage(null);
      return;
    }
    const fileArray = files.filter((file): file is File => file instanceof File);
    setImage(fileArray.length > 0 ? fileArray : null);
  };

  const getDownloadUrl = (presignedUrl: string) => {
    const withoutQuery = presignedUrl.split('?')[0];
    const fileKey = withoutQuery.replace(/^https:\/\/[^/]+\//, '');
    const decodedFileKey = decodeURIComponent(fileKey);
    const downloadableUrl = `${process.env.NEXT_PUBLIC_BASE_URL_FILE}/${decodedFileKey}`;

    return downloadableUrl;
  };

  const handleUploadFile = async (file: File | string): Promise<string> => {
    if (typeof file === 'string') return file;
    const presignedUrl = await getPresigned(file.name);
    await putPresigned(file, presignedUrl);
    const downloadableUrl = await getDownloadUrl(presignedUrl);

    return downloadableUrl;
  };

  const buildParams = async (): Promise<PostGuestSnapShotReq> => {
    const uploadedUrls = image?.length
      ? await Promise.all(image.map((file) => handleUploadFile(file)))
      : [];

    const baseParams = {
      cardId: id,
      urls: uploadedUrls,
    };

    return baseParams as PostGuestSnapShotReq;
  };

  return { image, handleImageChange, buildParams };
};
