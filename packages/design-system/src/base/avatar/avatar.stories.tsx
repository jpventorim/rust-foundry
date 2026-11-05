import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Avatar } from "./index";

const meta = {
  title: "Base/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A coarse iron portrait medallion with a recessed paper initials insert. The frame stays compact at every size.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = { render: () => <Avatar name="Mira Vale" /> };
export const Sizes: StoryObj = {
  render: () => (
    <div className="rf-row">
      <Avatar name="Mira Vale" size="sm" />
      <Avatar name="Mira Vale" />
      <Avatar name="Mira Vale" size="lg" />
      <Avatar name="Ada" size="sm" />
    </div>
  ),
};
export const ImageFailure: StoryObj = {
  render: () => <Avatar name="Mira Vale" src="data:image/png;base64,invalid" />,
};

const portrait = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#8b9c8d"/><path d="M8 100Q10 67 50 66T92 100" fill="#2a537e"/><path d="M25 45Q16 9 50 10T75 47L72 73H28Z" fill="#30271e"/><ellipse cx="50" cy="43" rx="21" ry="27" fill="#d8b18a"/><path d="M27 32Q32 9 52 13Q75 13 76 37Q60 32 49 20Q43 31 27 32" fill="#30271e"/><path d="M42 56Q50 61 58 56" fill="none" stroke="#75483b" stroke-width="2"/><g fill="#30271e"><circle cx="42" cy="42" r="2"/><circle cx="58" cy="42" r="2"/></g></svg>',
)}`;

export const Portrait: StoryObj = {
  render: () => (
    <div className="rf-row">
      <Avatar name="Mira Vale" src={portrait} size="sm" />
      <Avatar name="Mira Vale" src={portrait} />
      <Avatar name="Mira Vale" src={portrait} size="lg" />
    </div>
  ),
};
