const formatWeddingDate = (id: string, dateStr: string): string => {
  if (!dateStr) return '';
  const date = new Date(dateStr);

  const weekKOR = ['일', '월', '화', '수', '목', '금', '토'];
  const weekENG = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const dayIdx = date.getDay();
  const dayKor = weekKOR[dayIdx];
  const dayEng = weekENG[dayIdx];

  let hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;

  switch (id) {
    case '1':
      return `${yyyy}. ${mm}. ${dd} ${dayKor}`;
    case '2':
      return `${yyyy}. ${mm}. ${dd}`;
    case '3':
      return '';
    case '4':
      return `${yyyy}.${mm}.${dd} ${dayEng}`;
    case '5':
    case '6':
      return `${yyyy}.${mm}.${dd} ${dayEng} ${hour}:${minute}${ampm}`;
    case '7':
      return '';
    case '8':
      return `${yyyy}. ${mm}. ${dd}`;
    default:
      return '';
  }
};

export default formatWeddingDate;
