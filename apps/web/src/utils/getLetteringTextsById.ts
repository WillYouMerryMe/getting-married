const getLetteringTextsById = (id: string): string[] => {
  const letteringTextMap: Record<string, string[]> = {
    '1': [
      'THE START OF\n OUR FORERVER',
      'WHERE OUR \nSTORY BEGINS',
      'A LOVE THAT \nLASTS FOREVER',
      'FOREVER BEGINS \nWITH YOU',
    ],
    '2': ['With you', 'By your side', 'For us', 'Always yours'],
    '3': [
      'Dear My \nSoulmate',
      'My One \nAnd Only',
      'Forever \nYours',
      'Hello \nMy Dear',
    ],
    '4': [
      '끝나지 않을\n 행복의 시작',
      '영원의 \n첫걸음',
      '곧 시작될 \n우리의 이야기',
      '함께라서 \n더 빛나는 순간',
    ],
    '5': ['Endless\n Love', 'Forever\n Yours', 'Timeless\n Bond', 'Everlasting\n Joy'],
    '6': [
      'We Are\n Getting Married',
      "We're\n Tying the Knot",
      'We Begin\n Our Forever',
      "We're\n Becoming One",
    ],
    '7': [
      'Our\n Lovely\n Days',
      'Happily\n Ever\n After',
      'Forever\n Together',
      'Two\n Heart\n United',
    ],
    '8': ['Wedding'],
  };

  return letteringTextMap[id] ?? ['THE START OF OUR FOREVER'];
};

export default getLetteringTextsById;
