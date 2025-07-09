export const youtubeWatchToEmbed = (url: string) => {
  const u = new URL(url);

  const videoId = u.searchParams.get('v');
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return '';
};
