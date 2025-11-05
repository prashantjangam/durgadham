export type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  imageHint: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
};

export const events: Event[] = [
  {
    id: "1",
    title: "वार्षिक कीर्तन महोत्सव",
    date: "२० ऑगस्ट, २०२४",
    description: "प्रसिद्ध कीर्तनकारांच्या उपस्थितीत भव्य कीर्तन सोहळा.",
    image: "https://picsum.photos/seed/event1/400/250",
    imageHint: "devotional singing"
  },
  {
    id: "2",
    title: "नवरात्री उत्सव",
    date: "३ ऑक्टोबर - १२ ऑक्टोबर, २०२४",
    description: "नऊ दिवसांचा भव्य नवरात्री उत्सव, दररोज विविध धार्मिक कार्यक्रम.",
    image: "https://picsum.photos/seed/event2/400/250",
    imageHint: "navratri festival"
  },
  {
    id: "3",
    title: "महाप्रसाद",
    date: "प्रत्येक शनिवारी",
    description: "दर शनिवारी संध्याकाळी आरतीनंतर महाप्रसादाचे आयोजन.",
    image: "https://picsum.photos/seed/event3/400/250",
    imageHint: "community meal"
  },
  {
    id: "4",
    title: "भूमिपूजन समारंभ",
    date: "२५ डिसेंबर, २०२४",
    description: "मंदिराच्या जिर्णोद्धार कार्याचा शुभारंभ, भूमिपूजन समारंभ.",
    image: "https://picsum.photos/seed/event4/400/250",
    imageHint: "groundbreaking ceremony"
  },
];

export const members: Member[] = [
  {
    id: "1",
    name: "श्री. रमेश पाटील",
    role: "अध्यक्ष",
    imageUrl: "https://picsum.photos/seed/member1/200/200",
    imageHint: "man portrait"
  },
  {
    id: "2",
    name: "श्री. सुरेश जाधव",
    role: "उपाध्यक्ष",
    imageUrl: "https://picsum.photos/seed/member2/200/200",
    imageHint: "smiling man"
  },
  {
    id: "3",
    name: "सौ. अनिता देसाई",
    role: "सचिव",
    imageUrl: "https://picsum.photos/seed/member3/200/200",
    imageHint: "woman portrait"
  },
  {
    id: "4",
    name: "श्री. विकास शिंदे",
    role: "खजिनदार",
    imageUrl: "https://picsum.photos/seed/member4/200/200",
    imageHint: "older man"
  },
];
