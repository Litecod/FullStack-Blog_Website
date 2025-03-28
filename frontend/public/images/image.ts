import { StaticImageData } from "next/image";
import postOne from "../images/post1.jpg";

export interface BlogType {
  _id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  view: number;
  likes: number;
  image: StaticImageData;
  date: string;
}

export const BlogPost: BlogType[] = [
  {
    _id: "aaa1",
    title: "Grid system for better Design User Interfaces",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye ",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius distinctio maxime non voluptatibus modi officia assumenda repellat animi sed nobis! Qui culpa tenetur expedita rem accusantium labore voluptate earum dolor, esse sapiente ratione quibusdam debitis nulla ab quasi neque saepe necessitatibus? Eaque quos, numquam reiciendis architecto fuga nesciunt dolorum. In expedita ipsa at optio animi, rem libero voluptatibus aspernatur laborum eos quam est, alias corrupti ullam impedit accusamus natus quas velit fugit error vel itaque reiciendis? Maxime, assumenda, quod quaerat magnam dolore nihil debitis voluptates nisi incidunt molestiae nam beatae! Accusamus recusandae voluptatibus minima modi, voluptas velit quo iste facilis!",
    view: 1222,
    likes: 3000,
    image: postOne,
    date: "1 Jan 2023",
  },
  {
    _id: "aaa2",
    title: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye ",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius distinctio maxime non voluptatibus modi officia assumenda repellat animi sed nobis! Qui culpa tenetur expedita rem accusantium labore voluptate earum dolor, esse sapiente ratione quibusdam debitis nulla ab quasi neque saepe necessitatibus? Eaque quos, numquam reiciendis architecto fuga nesciunt dolorum. In expedita ipsa at optio animi, rem libero voluptatibus aspernatur laborum eos quam est, alias corrupti ullam impedit accusamus natus quas velit fugit error vel itaque reiciendis? Maxime, assumenda, quod quaerat magnam dolore nihil debitis voluptates nisi incidunt molestiae nam beatae! Accusamus recusandae voluptatibus minima modi, voluptas velit quo iste facilis!",
    view: 1222,
    likes: 3000,
    image: postOne,
    date: "1 Jan 2023",
  },
  {
    _id: "aaa3",
    title: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye ",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius distinctio maxime non voluptatibus modi officia assumenda repellat animi sed nobis! Qui culpa tenetur expedita rem accusantium labore voluptate earum dolor, esse sapiente ratione quibusdam debitis nulla ab quasi neque saepe necessitatibus? Eaque quos, numquam reiciendis architecto fuga nesciunt dolorum. In expedita ipsa at optio animi, rem libero voluptatibus aspernatur laborum eos quam est, alias corrupti ullam impedit accusamus natus quas velit fugit error vel itaque reiciendis? Maxime, assumenda, quod quaerat magnam dolore nihil debitis voluptates nisi incidunt molestiae nam beatae! Accusamus recusandae voluptatibus minima modi, voluptas velit quo iste facilis!",
    view: 1222,
    likes: 3000,
    image: postOne,
    date: "1 Jan 2023",
  },
  {
    _id: "aaa4",
    title: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye ",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius distinctio maxime non voluptatibus modi officia assumenda repellat animi sed nobis! Qui culpa tenetur expedita rem accusantium labore voluptate earum dolor, esse sapiente ratione quibusdam debitis nulla ab quasi neque saepe necessitatibus? Eaque quos, numquam reiciendis architecto fuga nesciunt dolorum. In expedita ipsa at optio animi, rem libero voluptatibus aspernatur laborum eos quam est, alias corrupti ullam impedit accusamus natus quas velit fugit error vel itaque reiciendis? Maxime, assumenda, quod quaerat magnam dolore nihil debitis voluptates nisi incidunt molestiae nam beatae! Accusamus recusandae voluptatibus minima modi, voluptas velit quo iste facilis!",
    view: 1222,
    likes: 3000,
    image: postOne,
    date: "1 Jan 2023",
  },
  {
    _id: "aaa5",
    title: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye ",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius distinctio maxime non voluptatibus modi officia assumenda repellat animi sed nobis! Qui culpa tenetur expedita rem accusantium labore voluptate earum dolor, esse sapiente ratione quibusdam debitis nulla ab quasi neque saepe necessitatibus? Eaque quos, numquam reiciendis architecto fuga nesciunt dolorum. In expedita ipsa at optio animi, rem libero voluptatibus aspernatur laborum eos quam est, alias corrupti ullam impedit accusamus natus quas velit fugit error vel itaque reiciendis? Maxime, assumenda, quod quaerat magnam dolore nihil debitis voluptates nisi incidunt molestiae nam beatae! Accusamus recusandae voluptatibus minima modi, voluptas velit quo iste facilis!",
    view: 1222,
    likes: 3000,
    image: postOne,
    date: "1 Jan 2023",
  },
  {
    _id: "aaa6",
    title: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye ",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius distinctio maxime non voluptatibus modi officia assumenda repellat animi sed nobis! Qui culpa tenetur expedita rem accusantium labore voluptate earum dolor, esse sapiente ratione quibusdam debitis nulla ab quasi neque saepe necessitatibus? Eaque quos, numquam reiciendis architecto fuga nesciunt dolorum. In expedita ipsa at optio animi, rem libero voluptatibus aspernatur laborum eos quam est, alias corrupti ullam impedit accusamus natus quas velit fugit error vel itaque reiciendis? Maxime, assumenda, quod quaerat magnam dolore nihil debitis voluptates nisi incidunt molestiae nam beatae! Accusamus recusandae voluptatibus minima modi, voluptas velit quo iste facilis!",
    view: 1222,
    likes: 3000,
    image: postOne,
    date: "1 Jan 2023",
  },
];
