/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const totalPages = 4;

const frames = createFrames({
  basePath: "/atlas/frames",
});

const handleRequest = frames(async (ctx) => {
  const pageIndex = Number(ctx.searchParams.pageIndex || 0);

  if (pageIndex === 1) {
    return {
      image: (
        <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
          <div tw="flex text-5xl">What is the capital of India?</div>
        </div>
      ),
      buttons: [
        <Button
          action="post"
          target={{
            query: { pageIndex: (pageIndex + 1) % totalPages },
          }}
        >
          Mumbai
        </Button>,
        <Button
          action="post"
          target={{
            query: { pageIndex: (pageIndex + 1) % totalPages },
          }}
        >
          New Delhi
        </Button>,
        <Button
          action="post"
          target={{
            query: { pageIndex: (pageIndex + 1) % totalPages },
          }}
        >
          Kolkata
        </Button>,
        <Button
          action="post"
          target={{
            query: { pageIndex: (pageIndex + 1) % totalPages },
          }}
        >
          Chennai
        </Button>,
      ],
    };
  } else {
    return {
      image: (
        <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
          <div tw="flex text-5xl">Select a county to start the quiz!🎉</div>
        </div>
      ),
      buttons: [
        <Button
          action="post"
          target={{
            query: { pageIndex: (pageIndex + 1) % totalPages },
          }}
        >
          India
        </Button>,
        <Button
          action="post"
          target={{
            query: { pageIndex: (pageIndex + 2) % totalPages },
          }}
        >
          USA
        </Button>,
        <Button
          action="post"
          target={{
            query: { pageIndex: (pageIndex + 3) % totalPages },
          }}
        >
          Germany
        </Button>,
      ],
    };
  }
});

export const GET = handleRequest;
export const POST = handleRequest;
