const getLetteringTextsById = (id: string): string[] => {
  const letteringTextMap: Record<string, string[]> = {
    '1': [
      'THE START OF OUR FORERVER',
      'WHERE OUR STORY BEGINS',
      'A LOVE THAT LASTS FOREVER',
      'FOREVER BEGINS WITH YOU',
    ],
    '2': ['With you', 'By your side', 'For us', 'Always yours'],
    '3': ['Dear My Soulmate', 'My One And Only', 'Forever Yours', 'Hello My Dear'],
    '4': [
      '끝나지 않을 행복의 시작',
      '영원의 첫걸음',
      '곧 시작될 우리의 이야기',
      '함께라서 더 빛나는 순간',
    ],
    '5': ['Endless Love', 'Forever Yours', 'Timeless Bond', 'Everlasting Joy'],
    '6': [
      'We Are Getting Married',
      "We're Tying the Knot",
      'We Begin Our Forever',
      "We're Becoming One",
    ],
    '7': [
      'Our Lovely Days',
      'Happily Ever After',
      'Forever Together',
      'Two Heart United',
    ],
    '8': ['Wedding'],
  };

  return letteringTextMap[id] ?? ['THE START OF OUR FOREVER'];
};

export default getLetteringTextsById;
