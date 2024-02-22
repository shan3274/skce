const { Skeleton } = require("./Skeleton");

const Skeletondata = [
  {
    name: "House in the woods",
    description:
      "  A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.",
  },
];

export const cards = [
  {
    id: 1,
    content: <Skeleton data={Skeletondata[0]} />,
    className: "md:col-span-2",
    thumbnail: "https://www.sreekrishnaengcollege.com/assets/img/gallery/1.jpg",
  },
  {
    id: 2,
    content: <Skeleton data={Skeletondata[0]} />,
    className: "col-span-1",
    thumbnail: "https://www.sreekrishnaengcollege.com/assets/img/gallery/2.jpg",
  },
  {
    id: 3,
    content: <Skeleton data={Skeletondata[0]} />,
    className: "col-span-1",
    thumbnail: "https://www.sreekrishnaengcollege.com/assets/img/gallery/3.jpg",
  },
  {
    id: 4,
    content: <Skeleton data={Skeletondata[0]} />,
    className: "md:col-span-2",
    thumbnail: "https://www.sreekrishnaengcollege.com/assets/img/gallery/4.jpg",
  },
];

export const cards1 = [
  {
    id: 1,
    content: <Skeleton data={Skeletondata[0]} />,
    className: "md:col-span-2",
    thumbnail: "https://www.sreekrishnaengcollege.com/assets/img/gallery/5.jpg",
  },
  {
    id: 2,
    content: <Skeleton data={Skeletondata[0]} />,
    className: "col-span-1",
    thumbnail: "https://www.sreekrishnaengcollege.com/assets/img/gallery/6.jpg",
  },
  {
    id: 3,
    content: <Skeleton data={Skeletondata[0]} />,
    className: "col-span-1",
    thumbnail: "https://www.sreekrishnaengcollege.com/assets/img/gallery/7.jpg",
  },
  {
    id: 4,
    content: <Skeleton data={Skeletondata[0]} />,
    className: "md:col-span-2",
    thumbnail: "https://www.sreekrishnaengcollege.com/assets/img/gallery/8.jpg",
  },
];
