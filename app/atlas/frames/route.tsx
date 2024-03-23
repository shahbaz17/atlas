/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next"; // Adjust import path if necessary

const frames = createFrames({
  basePath: "/atlas/frames",
});

const handleRequest = frames(async (ctx) => {
  const country = ctx.searchParams.country || "Next";
  const capital = ctx.searchParams.value;

  switch (country) {
    case "India":
      switch (capital) {
        case "New Delhi":
          return {
            image: (
              <div tw="bg-green-400 text-black w-full h-full justify-center items-center flex">
                <div tw="flex text-5xl">Correct!🎉</div>
              </div>
            ),
            buttons: [
              <Button
                key="nextButton"
                action="post"
                target={{
                  query: { pageIndex: 0 },
                }}
              >
                Try for Next Country!
              </Button>,
            ],
          };
        case "Mumbai":
        case "Chennai":
        case "Kolkata":
          return {
            image: (
              <div tw="bg-red-400 text-white w-full h-full justify-center items-center flex">
                <div tw="flex text-5xl">Incorrect!😢</div>
              </div>
            ),
            buttons: [
              <Button
                key="restartButton"
                action="post"
                target={{
                  query: { pageIndex: 0 },
                }}
              >
                Restart!
              </Button>,
            ],
          };
        default:
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
                  query: { country: "India", value: "Mumbai" },
                }}
              >
                Mumbai
              </Button>,
              <Button
                action="post"
                target={{
                  query: { country: "India", value: "New Delhi" },
                }}
              >
                New Delhi
              </Button>,
              <Button
                action="post"
                target={{
                  query: { country: "India", value: "Kolkata" },
                }}
              >
                Kolkata
              </Button>,
              <Button
                action="post"
                target={{
                  query: { country: "India", value: "Chennai" },
                }}
              >
                Chennai
              </Button>,
            ],
          };
      }
    case "USA":
      switch (capital) {
        case "Washington D.C.":
          return {
            image: (
              <div tw="bg-green-400 text-black w-full h-full justify-center items-center flex">
                <div tw="flex text-5xl">Correct!🎉</div>
              </div>
            ),
            buttons: [
              <Button
                key="nextButton"
                action="post"
                target={{
                  query: { pageIndex: 0 },
                }}
              >
                Try for Next Country!
              </Button>,
            ],
          };
        case "New York":
        case "Los Angeles":
        case "Chicago":
          return {
            image: (
              <div tw="bg-red-400 text-white w-full h-full justify-center items-center flex">
                <div tw="flex text-5xl">Incorrect!😢</div>
              </div>
            ),
            buttons: [
              <Button
                key="restartButton"
                action="post"
                target={{
                  query: { pageIndex: 0 },
                }}
              >
                Restart!
              </Button>,
            ],
          };
        default:
          return {
            image: (
              <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
                <div tw="flex text-5xl">What is the capital of USA?</div>
              </div>
            ),
            buttons: [
              <Button
                action="post"
                target={{
                  query: { country: "USA", value: "New York" },
                }}
              >
                New York
              </Button>,
              <Button
                action="post"
                target={{
                  query: { country: "USA", value: "Los Angeles" },
                }}
              >
                Los Angeles
              </Button>,
              <Button
                action="post"
                target={{
                  query: { country: "USA", value: "Washington D.C." },
                }}
              >
                Washington D.C.
              </Button>,
              <Button
                action="post"
                target={{
                  query: { country: "USA", value: "Chicago" },
                }}
              >
                Chicago
              </Button>,
            ],
          };
      }
    case "Germany":
      switch (capital) {
        case "Berlin":
          return {
            image: (
              <div tw="bg-green-400 text-black w-full h-full justify-center items-center flex">
                <div tw="flex text-5xl">Correct!🎉</div>
              </div>
            ),
            buttons: [
              <Button
                key="nextButton"
                action="post"
                target={{
                  query: { pageIndex: 0 },
                }}
              >
                Try for Next Country!
              </Button>,
            ],
          };
        case "Munich":
        case "Hamburg":
        case "Frankfurt":
          return {
            image: (
              <div tw="bg-red-400 text-white w-full h-full justify-center items-center flex">
                <div tw="flex text-5xl">Incorrect!😢</div>
              </div>
            ),
            buttons: [
              <Button
                key="restartButton"
                action="post"
                target={{
                  query: { pageIndex: 0 },
                }}
              >
                Restart!
              </Button>,
            ],
          };
        default:
          return {
            image: (
              <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
                <div tw="flex text-5xl">What is the capital of Germany?</div>
              </div>
            ),
            buttons: [
              <Button
                action="post"
                target={{
                  query: { country: "Germany", value: "Munich" },
                }}
              >
                Munich
              </Button>,
              <Button
                action="post"
                target={{
                  query: { country: "Germany", value: "Hamburg" },
                }}
              >
                Hamburg
              </Button>,
              <Button
                action="post"
                target={{
                  query: { country: "Germany", value: "Frankfurt" },
                }}
              >
                Frankfurt
              </Button>,
              <Button
                action="post"
                target={{
                  query: { country: "Germany", value: "Berlin" },
                }}
              >
                Berlin
              </Button>,
            ],
          };
      }

    default:
      return {
        image: (
          <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
            <div tw="flex text-5xl">Select a county to start the quiz!🎉</div>
          </div>
        ),
        buttons: [
          <Button
            key="indiaButton"
            action="post"
            target={{
              query: {
                country: "India",
              },
            }}
          >
            India
          </Button>,
          <Button
            key="usaButton"
            action="post"
            target={{
              query: { country: "USA" },
            }}
          >
            USA
          </Button>,
          <Button
            key="germanyButton"
            action="post"
            target={{
              query: {
                country: "Germany",
              },
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
