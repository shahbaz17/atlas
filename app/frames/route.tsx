// ./app/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span>
        {ctx.pressedButton
          ? `I clicked ${ctx.searchParams.value}`
          : `Select a Country to start the Quiz!`}
      </span>
    ),
    buttons: [
      <Button action="post" target={{ query: { value: "India" } }}>
        India
      </Button>,
      <Button action="post" target={{ query: { value: "USA" } }}>
        USA
      </Button>,
      <Button action="post" target={{ query: { value: "Germany" } }}>
        Germany
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
