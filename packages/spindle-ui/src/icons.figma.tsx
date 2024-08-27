import figma from '@figma/code-connect';

import {
  Youtube,
  Twitter,
  Requ,
  Pigg,
  Ownd,
  LineSquare,
  LineCircle,
  Koeblog,
  Instagram,
  Hatenabookmark,
  Facebook,
  Dotmoney,
  BottomnvavMypageInactive,
  BottomnavSearchInactive,
  BottomnavSearchActive,
  BottomnavMypageActive,
  BottomnavHomeInactive,
  BottomnavHomeActive,
  BottomnavFollowfeedInactive,
  BottomnavFollowfeedActive,
  Abematv,
  Abemakun,
  Amebapick,
  X,
  Accesslink,
  Accesspage,
  AccesspageFill,
  AddressbookFill,
  AlbumFill,
  AlbumAddFill,
  AlignLeft,
  AllFill,
  Amegold,
  Amember,
  PersonTwoFill,
  PersonTwoAddFill,
  PersonTwoDeleteFill,
  PersonTwoDoneFill,
  ArrowDown,
  ArrowDownBold,
  ArrowLeft,
  ArrowLeftBold,
  ArrowRight,
  ArrowRightBold,
  ArrowRightCircle,
  ArrowRightCircleFill,
  ArrowUp,
  ArrowUpBold,
  ArrowpagingDown,
  ArrowpagingDownCircle,
  ArrowpagingLeft,
  ArrowpagingLeftCircle,
  ArrowpagingRight,
  ArrowpagingRightCircle,
  ArrowpagingUp,
  ArrowpagingUpCircle,
  Article,
  Astrogy,
  AstrogyFill,
  Bbs,
  Beginner,
  Bell,
  BellFill,
  BellFillSlash,
  BellSlash,
  Blog,
  Sprout,
  Book,
  BookFill,
  Bookmark,
  BookmarkFill,
  Bullets,
  Calendar,
  CameraFill,
  SwitchingCamera,
  CautionFill,
  Check,
  CheckBold,
  CheckCircle,
  CheckCircleFill,
  Checklist,
  ChevronDown,
  ChevronDownBold,
  ChevronLeft,
  ChevronLeftBold,
  ChevronRight,
  ChevronRightBold,
  ChevronUp,
  ChevronUpBold,
  CircleFill,
  Clock,
  ClockFill,
  Coin,
  Comment,
  CommentFill,
  CommentPen,
  CommentTwoFill,
  CommentTwoSlashFill,
  Community,
  Coupon,
  CropDin,
  CropLandscape,
  Cross,
  CrossBold,
  CrossCircle,
  CrossCircleFill,
  Dot,
  FolderTwo,
  FolderTwoFill,
  Embed,
  EmotionFill,
  EntryLost,
  Exclamationmark,
  ExclamationmarkBold,
  ExclamationmarkCircle,
  ExclamationmarkCircleFill,
  Expand,
  ExpandExit,
  HandWaveFill,
  TagOfficialFill,
  Heart,
  HeartFill,
  History,
  HomeFill,
  Hot,
  Htmltag,
  ImageFill,
  ImageBanFill,
  ImageQuestionFill,
  File,
  FileAdd,
  FileAddFill,
  FileCircle,
  FileCircleFill,
  FileFill,
  Filter,
  ArrowLeftright,
  FlagFill,
  FlagRanking,
  FlagRankingTrim,
  FlashAuto,
  FlashOff,
  Flash,
  Folder,
  FolderFill,
  Font,
  Fontstyle,
  Game,
  GameFill,
  Genre,
  GenreAdd,
  GenreDone,
  GraphBar,
  Gruppo,
  Information,
  GameKantan,
  Kaomoji,
  Keyboard,
  KeyboardFill,
  Link,
  Loading,
  LockFill,
  Magicwand,
  Mail,
  MailCheck,
  MailCircle,
  MailCircleFill,
  MailFill,
  MenuHamburger,
  MenuHamburgerBold,
  MenuHorizontal,
  MenuVertical,
  Messageboard,
  Microphone,
  MicrophoneFill,
  MovieCameraFill,
  MoviePlay,
  MoviePlayFill,
  MovieStop,
  MusicFill,
  New,
  News,
  Nice,
  NiceDone,
  Nodate,
  Now,
  Officialstar,
  OfficialstarFill,
  OnedariFill,
  OpenCl,
  Openblank,
  OpenblankFill,
  PaletteFill,
  Pencil,
  PencilAdd,
  PencilBold,
  Person,
  PersonFill,
  PersonThreeFill,
  Peta,
  PlayCircle,
  Plus,
  PlusBold,
  PlusCircle,
  PlusCircleFill,
  PremiumFill,
  Present,
  Profilecard,
  Qr,
  Question,
  QuestionmarkCircle,
  QuestionmarkCircleFill,
  RankingCrown,
  RankingCrownFill,
  RankingPlatformFill,
  Reblog,
  ReblogSlash,
  Refresh,
  ReplyFill,
  ReplyCircleFill,
  MenuHamburgerFourline,
  Sad,
  Saveblog,
  ScreenFull,
  ScreenInline,
  Search,
  Service,
  Share,
  ShineFill,
  SidefaceClose,
  SidefaceOpen,
  Smartphone,
  SmartphoneFill,
  Sort,
  SortFeed,
  SortTile,
  SpeakerOffFill,
  SpeakerOnFill,
  StarFaceFill,
  Stampside,
  Star,
  StarFill,
  StopFill,
  Switching,
  StarCircleFill,
  TagFill,
  TranscriptOff,
  TranscriptOn,
  Transmission,
  Trashcan,
  Trend,
  TrendFill,
  TriangleDown,
  TriangleLeft,
  TriangleRight,
  TriangleUp,
  TrianglearrowDown,
  TrianglearrowDownright,
  TrianglearrowRight,
  TrianglearrowUp,
  TrianglearrowUpright,
  TriangleendLeft,
  TriangleendRight,
  TrophyFill,
  TvFill,
  Webview,
  TopbloggerRibbon,
  ImageAddFill,
  Undo,
  Redo,
  UndoBold,
  RedoBold,
  Title,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  ListNumbered,
  ListBulleted,
  AlignCenter,
  AlignRight,
  Border,
  Thumbsup,
  ThumbsupFill,
  Amebacoin,
  Baby,
  Compass,
  Dice,
  Shirt,
  Flowervase,
  Cutlery,
  Pawprint,
  Wallet,
  ImageFillSlash,
  Beginnermark,
  Circle,
  CircleBold,
  Minus,
  MinusBold,
  Sun,
  SunFill,
  Moon,
  MoonFill,
  LockOpenFill,
  Crop,
  ArticleSlash,
  Gear,
  GearFill,
  Download,
  FilterCheck,
  PlayFill,
  Bookshelf,
  BookshelfFill,
  Newbook,
  NewbookFill,
  ExclamationmarkBalloon,
  ExclamationmarkBalloonFill,
  CrossRectangle,
  CheckRectangle,
  PinFill,
  FaceUnhappy,
  DiamondTwo,
  Megaphone,
  KeyboardDownFill,
  Articledesign,
  CircleSlash,
  Pause,
  PauseBold,
  Cards,
  Cart,
  CartFill,
  FreeCircle,
  FreeCircleFill,
  ChevronUpTwoBold,
  ListBookmarkFill,
  ArrowUpdown,
  TriangleendLeftBold,
  TriangleendRightBold,
  PersonBan,
  ArrowSubdirectory,
  ArrowSubdirectoryBold,
  Ad,
  Bloggersshop,
  Paperplane,
  PaperplaneFill,
  ShineTwo,
  Paidplan,
  DragIndicator,
} from './Icon';

figma.connect(
  Youtube,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3344',
  { imports: ["import { Youtube } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Twitter,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3325',
  { imports: ["import { Twitter } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Requ,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3330',
  { imports: ["import { Requ } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Pigg,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3316',
  { imports: ["import { Pigg } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Ownd,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4348-542',
  { imports: ["import { Ownd } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  LineSquare,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3318',
  { imports: ["import { LineSquare } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  LineCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3319',
  { imports: ["import { LineCircle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Koeblog,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3493',
  { imports: ["import { Koeblog } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Instagram,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3328',
  { imports: ["import { Instagram } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Hatenabookmark,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3326',
  { imports: ["import { Hatenabookmark } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Facebook,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3331',
  { imports: ["import { Facebook } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Dotmoney,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3317',
  { imports: ["import { Dotmoney } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  BottomnvavMypageInactive,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-975',
  {
    imports: [
      "import { BottomnvavMypageInactive } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  BottomnavSearchInactive,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-972',
  {
    imports: [
      "import { BottomnavSearchInactive } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  BottomnavSearchActive,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-973',
  {
    imports: [
      "import { BottomnavSearchActive } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  BottomnavMypageActive,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-974',
  {
    imports: [
      "import { BottomnavMypageActive } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  BottomnavHomeInactive,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-968',
  {
    imports: [
      "import { BottomnavHomeInactive } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  BottomnavHomeActive,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-969',
  {
    imports: [
      "import { BottomnavHomeActive } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  BottomnavFollowfeedInactive,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-971',
  {
    imports: [
      "import { BottomnavFollowfeedInactive } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  BottomnavFollowfeedActive,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-970',
  {
    imports: [
      "import { BottomnavFollowfeedActive } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  Abematv,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3329',
  { imports: ["import { Abematv } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Abemakun,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3315',
  { imports: ["import { Abemakun } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Amebapick,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7570-4287',
  { imports: ["import { Amebapick } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  X,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=11174-461',
  { imports: ["import { X } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Accesslink,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4751',
  { imports: ["import { Accesslink } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Accesspage,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2506-100',
  { imports: ["import { Accesspage } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  AccesspageFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3403',
  { imports: ["import { AccesspageFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  AddressbookFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4504-3978',
  {
    imports: ["import { AddressbookFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  AlbumFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-98',
  { imports: ["import { AlbumFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  AlbumAddFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-103',
  { imports: ["import { AlbumAddFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  AlignLeft,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4556',
  { imports: ["import { AlignLeft } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  AllFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3841',
  { imports: ["import { AllFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Amegold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-54',
  { imports: ["import { Amegold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Amember,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4301-1',
  { imports: ["import { Amember } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PersonTwoFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4504-3910',
  { imports: ["import { PersonTwoFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PersonTwoAddFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4504-3927',
  {
    imports: ["import { PersonTwoAddFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  PersonTwoDeleteFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4504-3944',
  {
    imports: [
      "import { PersonTwoDeleteFill } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  PersonTwoDoneFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4504-3961',
  {
    imports: [
      "import { PersonTwoDoneFill } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  ArrowDown,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-36',
  { imports: ["import { ArrowDown } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowDownBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-58',
  { imports: ["import { ArrowDownBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowLeft,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-34',
  { imports: ["import { ArrowLeft } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowLeftBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-56',
  { imports: ["import { ArrowLeftBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowRight,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-930',
  { imports: ["import { ArrowRight } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowRightBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-931',
  { imports: ["import { ArrowRightBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowRightCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4697',
  {
    imports: ["import { ArrowRightCircle } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ArrowRightCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-965',
  {
    imports: [
      "import { ArrowRightCircleFill } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  ArrowUp,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-35',
  { imports: ["import { ArrowUp } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowUpBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-57',
  { imports: ["import { ArrowUpBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowpagingDown,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2456-557',
  {
    imports: ["import { ArrowpagingDown } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ArrowpagingDownCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3013',
  {
    imports: [
      "import { ArrowpagingDownCircle } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  ArrowpagingLeft,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2458-20',
  {
    imports: ["import { ArrowpagingLeft } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ArrowpagingLeftCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3119',
  {
    imports: [
      "import { ArrowpagingLeftCircle } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  ArrowpagingRight,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2458-26',
  {
    imports: ["import { ArrowpagingRight } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ArrowpagingRightCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3083',
  {
    imports: [
      "import { ArrowpagingRightCircle } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  ArrowpagingUp,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2456-566',
  { imports: ["import { ArrowpagingUp } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowpagingUpCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3048',
  {
    imports: [
      "import { ArrowpagingUpCircle } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  Article,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-16',
  { imports: ["import { Article } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Astrogy,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-946',
  { imports: ["import { Astrogy } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  AstrogyFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-947',
  { imports: ["import { AstrogyFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Bbs,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-53',
  { imports: ["import { Bbs } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Beginner,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-209',
  { imports: ["import { Beginner } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Bell,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-954',
  { imports: ["import { Bell } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  BellFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-955',
  { imports: ["import { BellFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  BellFillSlash,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-956',
  { imports: ["import { BellFillSlash } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  BellSlash,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-957',
  { imports: ["import { BellSlash } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Blog,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-9',
  { imports: ["import { Blog } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Sprout,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-208',
  { imports: ["import { Sprout } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Book,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-933',
  { imports: ["import { Book } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  BookFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-932',
  { imports: ["import { BookFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Bookmark,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3299-4',
  { imports: ["import { Bookmark } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  BookmarkFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3067-0',
  { imports: ["import { BookmarkFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Bullets,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4382',
  { imports: ["import { Bullets } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Calendar,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-28',
  { imports: ["import { Calendar } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CameraFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3925',
  { imports: ["import { CameraFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  SwitchingCamera,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4051',
  {
    imports: ["import { SwitchingCamera } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  CautionFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2817-18',
  { imports: ["import { CautionFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Check,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1233-131',
  { imports: ["import { Check } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CheckBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1233-130',
  { imports: ["import { CheckBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CheckCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1089-12',
  { imports: ["import { CheckCircle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CheckCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1089-13',
  {
    imports: ["import { CheckCircleFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  Checklist,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-43',
  { imports: ["import { Checklist } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ChevronDown,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-74',
  { imports: ["import { ChevronDown } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ChevronDownBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-98',
  {
    imports: ["import { ChevronDownBold } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ChevronLeft,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-72',
  { imports: ["import { ChevronLeft } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ChevronLeftBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-100',
  {
    imports: ["import { ChevronLeftBold } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ChevronRight,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1190-18',
  { imports: ["import { ChevronRight } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ChevronRightBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1190-19',
  {
    imports: ["import { ChevronRightBold } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ChevronUp,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-73',
  { imports: ["import { ChevronUp } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ChevronUpBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-99',
  { imports: ["import { ChevronUpBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4504-4012',
  { imports: ["import { CircleFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Clock,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-929',
  { imports: ["import { Clock } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ClockFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-928',
  { imports: ["import { ClockFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Coin,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4297-4',
  { imports: ["import { Coin } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Comment,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3577-1805',
  { imports: ["import { Comment } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CommentFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2474-845',
  { imports: ["import { CommentFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CommentPen,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-51',
  { imports: ["import { CommentPen } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CommentTwoFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4358-2858',
  { imports: ["import { CommentTwoFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CommentTwoSlashFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3576',
  {
    imports: [
      "import { CommentTwoSlashFill } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  Community,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-20',
  { imports: ["import { Community } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Coupon,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4658',
  { imports: ["import { Coupon } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CropDin,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-53',
  { imports: ["import { CropDin } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CropLandscape,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-56',
  { imports: ["import { CropLandscape } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Cross,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1196-11',
  { imports: ["import { Cross } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CrossBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1196-10',
  { imports: ["import { CrossBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CrossCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1166-16',
  { imports: ["import { CrossCircle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CrossCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1166-17',
  {
    imports: ["import { CrossCircleFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  Dot,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-48',
  { imports: ["import { Dot } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FolderTwo,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-2856',
  { imports: ["import { FolderTwo } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FolderTwoFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-2827',
  { imports: ["import { FolderTwoFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Embed,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-65',
  { imports: ["import { Embed } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  EmotionFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4758',
  { imports: ["import { EmotionFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  EntryLost,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4870',
  { imports: ["import { EntryLost } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Exclamationmark,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-926',
  {
    imports: ["import { Exclamationmark } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ExclamationmarkBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-927',
  {
    imports: [
      "import { ExclamationmarkBold } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  ExclamationmarkCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1235-11',
  {
    imports: [
      "import { ExclamationmarkCircle } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  ExclamationmarkCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=1235-10',
  {
    imports: [
      "import { ExclamationmarkCircleFill } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  Expand,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-70',
  { imports: ["import { Expand } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ExpandExit,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4659',
  { imports: ["import { ExpandExit } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  HandWaveFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3564',
  { imports: ["import { HandWaveFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TagOfficialFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4776',
  {
    imports: ["import { TagOfficialFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  Heart,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2569-135',
  { imports: ["import { Heart } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  HeartFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2569-168',
  { imports: ["import { HeartFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  History,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-30',
  { imports: ["import { History } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  HomeFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3043-206',
  { imports: ["import { HomeFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Hot,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-207',
  { imports: ["import { Hot } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Htmltag,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3063-12',
  { imports: ["import { Htmltag } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ImageFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-93',
  { imports: ["import { ImageFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ImageBanFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4348-27',
  { imports: ["import { ImageBanFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ImageQuestionFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4348-20',
  {
    imports: [
      "import { ImageQuestionFill } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  File,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-953',
  { imports: ["import { File } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FileAdd,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-958',
  { imports: ["import { FileAdd } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FileAddFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-959',
  { imports: ["import { FileAddFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FileCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-963',
  { imports: ["import { FileCircle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FileCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-962',
  { imports: ["import { FileCircleFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FileFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-952',
  { imports: ["import { FileFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Filter,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4506',
  { imports: ["import { Filter } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowLeftright,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3066-61',
  { imports: ["import { ArrowLeftright } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FlagFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3776',
  { imports: ["import { FlagFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FlagRanking,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4358-2823',
  { imports: ["import { FlagRanking } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FlagRankingTrim,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4358-2828',
  {
    imports: ["import { FlagRankingTrim } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  FlashAuto,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4614',
  { imports: ["import { FlashAuto } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FlashOff,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3066-46',
  { imports: ["import { FlashOff } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Flash,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3066-43',
  { imports: ["import { Flash } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Folder,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-937',
  { imports: ["import { Folder } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FolderFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-936',
  { imports: ["import { FolderFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Font,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2964-166',
  { imports: ["import { Font } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Fontstyle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2965-13',
  { imports: ["import { Fontstyle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Game,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-949',
  { imports: ["import { Game } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  GameFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-948',
  { imports: ["import { GameFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Genre,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-48',
  { imports: ["import { Genre } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  GenreAdd,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-49',
  { imports: ["import { GenreAdd } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  GenreDone,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3535',
  { imports: ["import { GenreDone } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  GraphBar,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3727',
  { imports: ["import { GraphBar } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Gruppo,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-38',
  { imports: ["import { Gruppo } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Information,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2817-72',
  { imports: ["import { Information } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  GameKantan,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3551',
  { imports: ["import { GameKantan } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Kaomoji,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-52',
  { imports: ["import { Kaomoji } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Keyboard,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3420',
  { imports: ["import { Keyboard } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  KeyboardFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3425',
  { imports: ["import { KeyboardFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Link,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-46',
  { imports: ["import { Link } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Loading,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-2461',
  { imports: ["import { Loading } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  LockFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-2451',
  { imports: ["import { LockFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Magicwand,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-2456',
  { imports: ["import { Magicwand } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Mail,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-938',
  { imports: ["import { Mail } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MailCheck,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-2901',
  { imports: ["import { MailCheck } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MailCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-967',
  { imports: ["import { MailCircle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MailCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-966',
  { imports: ["import { MailCircleFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MailFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-939',
  { imports: ["import { MailFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MenuHamburger,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-950',
  { imports: ["import { MenuHamburger } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MenuHamburgerBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-951',
  {
    imports: [
      "import { MenuHamburgerBold } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  MenuHorizontal,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2817-105',
  { imports: ["import { MenuHorizontal } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MenuVertical,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2817-100',
  { imports: ["import { MenuVertical } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Messageboard,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-55',
  { imports: ["import { Messageboard } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Microphone,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3438',
  { imports: ["import { Microphone } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MicrophoneFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3450',
  { imports: ["import { MicrophoneFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MovieCameraFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3032-7',
  {
    imports: ["import { MovieCameraFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  MoviePlay,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-47',
  { imports: ["import { MoviePlay } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MoviePlayFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-5',
  { imports: ["import { MoviePlayFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MovieStop,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-46',
  { imports: ["import { MovieStop } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MusicFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-60',
  { imports: ["import { MusicFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  New,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-206',
  { imports: ["import { New } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  News,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4301-3',
  { imports: ["import { News } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Nice,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3376',
  { imports: ["import { Nice } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  NiceDone,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3350',
  { imports: ["import { NiceDone } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Nodate,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2506-95',
  { imports: ["import { Nodate } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Now,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4719',
  { imports: ["import { Now } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Officialstar,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-942',
  { imports: ["import { Officialstar } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  OfficialstarFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-943',
  {
    imports: ["import { OfficialstarFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  OnedariFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4301-0',
  { imports: ["import { OnedariFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  OpenCl,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4462',
  { imports: ["import { OpenCl } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Openblank,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3478',
  { imports: ["import { Openblank } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  OpenblankFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3483',
  { imports: ["import { OpenblankFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PaletteFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-210',
  { imports: ["import { PaletteFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Pencil,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-945',
  { imports: ["import { Pencil } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PencilAdd,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-4',
  { imports: ["import { PencilAdd } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PencilBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-944',
  { imports: ["import { PencilBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Person,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3503',
  { imports: ["import { Person } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PersonFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3502',
  { imports: ["import { PersonFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PersonThreeFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4504-4029',
  {
    imports: ["import { PersonThreeFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  Peta,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-33',
  { imports: ["import { Peta } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PlayCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3616',
  { imports: ["import { PlayCircle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Plus,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-934',
  { imports: ["import { Plus } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PlusBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-935',
  { imports: ["import { PlusBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PlusCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-960',
  { imports: ["import { PlusCircle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PlusCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-961',
  { imports: ["import { PlusCircleFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PremiumFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4303-50',
  { imports: ["import { PremiumFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Present,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-21',
  { imports: ["import { Present } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Profilecard,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4504-3995',
  { imports: ["import { Profilecard } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Qr,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-15',
  { imports: ["import { Qr } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Question,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4587',
  { imports: ["import { Question } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  QuestionmarkCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4366-16',
  {
    imports: [
      "import { QuestionmarkCircle } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  QuestionmarkCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4366-21',
  {
    imports: [
      "import { QuestionmarkCircleFill } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  RankingCrown,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3473',
  { imports: ["import { RankingCrown } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  RankingCrownFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3365',
  {
    imports: ["import { RankingCrownFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  RankingPlatformFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-14',
  {
    imports: [
      "import { RankingPlatformFill } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  Reblog,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4138',
  { imports: ["import { Reblog } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ReblogSlash,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4182',
  { imports: ["import { ReblogSlash } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Refresh,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2951-1131',
  { imports: ["import { Refresh } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ReplyFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3567-1656',
  { imports: ["import { ReplyFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ReplyCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3567-1663',
  {
    imports: ["import { ReplyCircleFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  MenuHamburgerFourline,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4301-2',
  {
    imports: [
      "import { MenuHamburgerFourline } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  Sad,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3289',
  { imports: ["import { Sad } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Saveblog,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4732',
  { imports: ["import { Saveblog } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ScreenFull,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4270',
  { imports: ["import { ScreenFull } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ScreenInline,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4320',
  { imports: ["import { ScreenInline } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Search,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3043-188',
  { imports: ["import { Search } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Service,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-25',
  { imports: ["import { Service } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Share,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3890',
  { imports: ["import { Share } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ShineFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-2431',
  { imports: ["import { ShineFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  SidefaceClose,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3605',
  { imports: ["import { SidefaceClose } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  SidefaceOpen,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3600',
  { imports: ["import { SidefaceOpen } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Smartphone,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3463',
  { imports: ["import { Smartphone } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  SmartphoneFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3468',
  { imports: ["import { SmartphoneFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Sort,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4220',
  { imports: ["import { Sort } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  SortFeed,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-61',
  { imports: ["import { SortFeed } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  SortTile,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-66',
  { imports: ["import { SortTile } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  SpeakerOffFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4007',
  { imports: ["import { SpeakerOffFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  SpeakerOnFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3969',
  { imports: ["import { SpeakerOnFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  StarFaceFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-13',
  { imports: ["import { StarFaceFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Stampside,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-88',
  { imports: ["import { Stampside } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Star,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-941',
  { imports: ["import { Star } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  StarFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=991-940',
  { imports: ["import { StarFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  StopFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2822-20',
  { imports: ["import { StopFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Switching,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-4100',
  { imports: ["import { Switching } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  StarCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2602-60',
  { imports: ["import { StarCircleFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TagFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-2466',
  { imports: ["import { TagFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TranscriptOff,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-2441',
  { imports: ["import { TranscriptOff } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TranscriptOn,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-2446',
  { imports: ["import { TranscriptOn } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Transmission,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-53',
  { imports: ["import { Transmission } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Trashcan,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-2436',
  { imports: ["import { Trashcan } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Trend,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3229-1691',
  { imports: ["import { Trend } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TrendFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3226-9',
  { imports: ["import { TrendFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TriangleDown,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-205',
  { imports: ["import { TriangleDown } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TriangleLeft,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-71',
  { imports: ["import { TriangleLeft } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TriangleRight,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-204',
  { imports: ["import { TriangleRight } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TriangleUp,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4299-203',
  { imports: ["import { TriangleUp } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TrianglearrowDown,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-128',
  {
    imports: [
      "import { TrianglearrowDown } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  TrianglearrowDownright,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-129',
  {
    imports: [
      "import { TrianglearrowDownright } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  TrianglearrowRight,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-130',
  {
    imports: [
      "import { TrianglearrowRight } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  TrianglearrowUp,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=3041-1351',
  {
    imports: ["import { TrianglearrowUp } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  TrianglearrowUpright,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2484-138',
  {
    imports: [
      "import { TrianglearrowUpright } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  TriangleendLeft,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3452',
  {
    imports: ["import { TriangleendLeft } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  TriangleendRight,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3501',
  {
    imports: ["import { TriangleendRight } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  TrophyFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4293-83',
  { imports: ["import { TrophyFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TvFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4327-3488',
  { imports: ["import { TvFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Webview,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2951-1104',
  { imports: ["import { Webview } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TopbloggerRibbon,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-2978',
  {
    imports: ["import { TopbloggerRibbon } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ImageAddFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4934-0',
  { imports: ["import { ImageAddFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Undo,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=11762-471',
  { imports: ["import { Undo } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Redo,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=11762-469',
  { imports: ["import { Redo } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  UndoBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=11762-470',
  { imports: ["import { UndoBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  RedoBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=11762-468',
  { imports: ["import { RedoBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Title,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3676',
  { imports: ["import { Title } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Bold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3685',
  { imports: ["import { Bold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Italic,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3686',
  { imports: ["import { Italic } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Strikethrough,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3687',
  { imports: ["import { Strikethrough } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Underline,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3688',
  { imports: ["import { Underline } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ListNumbered,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3699',
  { imports: ["import { ListNumbered } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ListBulleted,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3700',
  { imports: ["import { ListBulleted } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  AlignCenter,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3701',
  { imports: ["import { AlignCenter } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  AlignRight,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3702',
  { imports: ["import { AlignRight } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Border,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5187-3703',
  { imports: ["import { Border } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Thumbsup,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5538-35',
  { imports: ["import { Thumbsup } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ThumbsupFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5538-34',
  { imports: ["import { ThumbsupFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Amebacoin,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5648-0',
  { imports: ["import { Amebacoin } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Baby,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6054-4008',
  { imports: ["import { Baby } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Compass,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6054-4010',
  { imports: ["import { Compass } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Dice,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6054-4012',
  { imports: ["import { Dice } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Shirt,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6054-4018',
  { imports: ["import { Shirt } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Flowervase,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6054-4014',
  { imports: ["import { Flowervase } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Cutlery,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6054-4020',
  { imports: ["import { Cutlery } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Pawprint,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6054-4016',
  { imports: ["import { Pawprint } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Wallet,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6054-4022',
  { imports: ["import { Wallet } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ImageFillSlash,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=5961-0',
  { imports: ["import { ImageFillSlash } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Beginnermark,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6178-4017',
  { imports: ["import { Beginnermark } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Circle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6409-9',
  { imports: ["import { Circle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CircleBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6409-4',
  { imports: ["import { CircleBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Minus,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6409-14',
  { imports: ["import { Minus } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MinusBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6409-21',
  { imports: ["import { MinusBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Sun,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6409-31',
  { imports: ["import { Sun } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  SunFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6409-26',
  { imports: ["import { SunFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Moon,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6409-49',
  { imports: ["import { Moon } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  MoonFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6409-63',
  { imports: ["import { MoonFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  LockOpenFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6434-4039',
  { imports: ["import { LockOpenFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Crop,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6600-4230',
  { imports: ["import { Crop } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArticleSlash,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6957-4181',
  { imports: ["import { ArticleSlash } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Gear,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7030-4174',
  { imports: ["import { Gear } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  GearFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2602-125',
  { imports: ["import { GearFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Download,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7030-4184',
  { imports: ["import { Download } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FilterCheck,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7030-4189',
  { imports: ["import { FilterCheck } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PlayFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=2822-19',
  { imports: ["import { PlayFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Bookshelf,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6178-4018',
  { imports: ["import { Bookshelf } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  BookshelfFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7030-4284',
  { imports: ["import { BookshelfFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Newbook,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7030-4288',
  { imports: ["import { Newbook } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  NewbookFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7030-4296',
  { imports: ["import { NewbookFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ExclamationmarkBalloon,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7100-4202',
  {
    imports: [
      "import { ExclamationmarkBalloon } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  ExclamationmarkBalloonFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7180-4175',
  {
    imports: [
      "import { ExclamationmarkBalloonFill } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  CrossRectangle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7160-4184',
  { imports: ["import { CrossRectangle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CheckRectangle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7160-4171',
  { imports: ["import { CheckRectangle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PinFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7206-4135',
  { imports: ["import { PinFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FaceUnhappy,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7420-4144',
  { imports: ["import { FaceUnhappy } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  DiamondTwo,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7493-4146',
  { imports: ["import { DiamondTwo } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Megaphone,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7537-4145',
  { imports: ["import { Megaphone } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  KeyboardDownFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7557-4184',
  {
    imports: ["import { KeyboardDownFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  Articledesign,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7557-4183',
  { imports: ["import { Articledesign } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CircleSlash,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=7833-4168',
  { imports: ["import { CircleSlash } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Pause,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6331-4030',
  { imports: ["import { Pause } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PauseBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=4357-3589',
  { imports: ["import { PauseBold } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Cards,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8131-4152',
  { imports: ["import { Cards } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Cart,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8184-4151',
  { imports: ["import { Cart } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  CartFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8184-4152',
  { imports: ["import { CartFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FreeCircle,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=6178-4020',
  { imports: ["import { FreeCircle } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  FreeCircleFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8184-4146',
  { imports: ["import { FreeCircleFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ChevronUpTwoBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8184-4149',
  {
    imports: ["import { ChevronUpTwoBold } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ListBookmarkFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8304-4158',
  {
    imports: ["import { ListBookmarkFill } from '@openameba/spindle-ui/Icon';"],
  },
);
figma.connect(
  ArrowUpdown,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8304-4163',
  { imports: ["import { ArrowUpdown } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  TriangleendLeftBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8332-4185',
  {
    imports: [
      "import { TriangleendLeftBold } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  TriangleendRightBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8332-4186',
  {
    imports: [
      "import { TriangleendRightBold } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  PersonBan,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8332-4187',
  { imports: ["import { PersonBan } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ArrowSubdirectory,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8451-4199',
  {
    imports: [
      "import { ArrowSubdirectory } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  ArrowSubdirectoryBold,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8451-4198',
  {
    imports: [
      "import { ArrowSubdirectoryBold } from '@openameba/spindle-ui/Icon';",
    ],
  },
);
figma.connect(
  Ad,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=8737-4285',
  { imports: ["import { Ad } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Bloggersshop,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=9445-4997',
  { imports: ["import { Bloggersshop } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Paperplane,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=10728-5590',
  { imports: ["import { Paperplane } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  PaperplaneFill,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=10728-5591',
  { imports: ["import { PaperplaneFill } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  ShineTwo,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=10945-453',
  { imports: ["import { ShineTwo } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  Paidplan,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=11086-456',
  { imports: ["import { Paidplan } from '@openameba/spindle-ui/Icon';"] },
);
figma.connect(
  DragIndicator,
  'https://www.figma.com/design/G445fTskctZn7y3gkmSp8xaT/icon?node-id=11333-478',
  { imports: ["import { DragIndicator } from '@openameba/spindle-ui/Icon';"] },
);
