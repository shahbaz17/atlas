/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";
import { farcasterHubContext, openframes } from "frames.js/middleware";
import { getXmtpFrameMessage, isXmtpFrameActionPayload } from "frames.js/xmtp";
import { DEFAULT_DEBUGGER_HUB_URL } from "../debug";

const frames = createFrames({
  basePath: "/frame",
  middleware: [
    farcasterHubContext({
      hubHttpUrl: DEFAULT_DEBUGGER_HUB_URL,
    }),
    openframes({
      clientProtocol: {
        id: "xmtp",
        version: "2024-02-09",
      },
      handler: {
        isValidPayload: (body: JSON) => isXmtpFrameActionPayload(body),
        getFrameMessage: async (body: JSON) => {
          if (!isXmtpFrameActionPayload(body)) {
            return undefined;
          }
          const result = await getXmtpFrameMessage(body);

          return { ...result };
        },
      },
    }),
  ],
});

const handleRequest = frames(async (ctx) => {
  const country = ctx.searchParams.country || "Next";
  const capitalValue = ctx.searchParams.capitalValue;
  const questionType = ctx.searchParams.questionType;

  switch (country) {
    case "India":
      switch (questionType) {
        case "capital":
          switch (capitalValue) {
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
                      query: { country: "India", questionType: "currency" },
                    }}
                  >
                    Next Question!
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
                      query: {
                        country: "India",
                        questionType: "capital",
                        capitalValue: "Mumbai",
                      },
                    }}
                  >
                    Mumbai
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "India",
                        questionType: "capital",
                        capitalValue: "New Delhi",
                      },
                    }}
                  >
                    New Delhi
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "India",
                        questionType: "capital",
                        capitalValue: "Kolkata",
                      },
                    }}
                  >
                    Kolkata
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "India",
                        questionType: "capital",
                        capitalValue: "Chennai",
                      },
                    }}
                  >
                    Chennai
                  </Button>,
                ],
              };
          }
        case "currency":
          switch (capitalValue) {
            case "Rupee":
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
                      query: { country: "India", questionType: "language" },
                    }}
                  >
                    Next Question!
                  </Button>,
                ],
              };
            case "Dollar":
            case "Euro":
            case "Yen":
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
                    <div tw="flex text-5xl">What is the currency of India?</div>
                  </div>
                ),
                buttons: [
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "India",
                        questionType: "currency",
                        capitalValue: "Dollar",
                      },
                    }}
                  >
                    Dollar
                  </Button>,

                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "India",
                        questionType: "currency",
                        capitalValue: "Euro",
                      },
                    }}
                  >
                    Euro
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "India",
                        questionType: "currency",
                        capitalValue: "Yen",
                      },
                    }}
                  >
                    Yen
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "India",
                        questionType: "currency",
                        capitalValue: "Rupee",
                      },
                    }}
                  >
                    Rupee
                  </Button>,
                ],
              };
          }
      }
    case "USA":
      switch (questionType) {
        case "capital":
          switch (capitalValue) {
            case "Washington, D.C.":
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
                      query: { country: "USA", questionType: "currency" },
                    }}
                  >
                    Next Question!
                  </Button>,
                ],
              };
            case "New York City":
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
                      query: {
                        country: "USA",
                        questionType: "capital",
                        capitalValue: "Washington, D.C.",
                      },
                    }}
                  >
                    Washington, D.C.
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "USA",
                        questionType: "capital",
                        capitalValue: "New York City",
                      },
                    }}
                  >
                    New York City
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "USA",
                        questionType: "capital",
                        capitalValue: "Los Angeles",
                      },
                    }}
                  >
                    Los Angeles
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "USA",
                        questionType: "capital",
                        capitalValue: "Chicago",
                      },
                    }}
                  >
                    Chicago
                  </Button>,
                ],
              };
          }
        case "currency":
          switch (capitalValue) {
            case "Dollar":
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
                      query: { country: "USA", questionType: "language" },
                    }}
                  >
                    Next Question!
                  </Button>,
                ],
              };
            case "Rupee":
            case "Euro":
            case "Yen":
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
                    <div tw="flex text-5xl">What is the currency of USA?</div>
                  </div>
                ),
                buttons: [
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "USA",
                        questionType: "currency",
                        capitalValue: "Rupee",
                      },
                    }}
                  >
                    Rupee
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "USA",
                        questionType: "currency",
                        capitalValue: "Euro",
                      },
                    }}
                  >
                    Euro
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "USA",
                        questionType: "currency",
                        capitalValue: "Dollar",
                      },
                    }}
                  >
                    Dollar
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "USA",
                        questionType: "currency",
                        capitalValue: "Yen",
                      },
                    }}
                  >
                    Yen
                  </Button>,
                ],
              };
          }
      }
    case "Germany":
      switch (questionType) {
        case "capital":
          switch (capitalValue) {
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
                      query: { country: "Germany", questionType: "currency" },
                    }}
                  >
                    Next Question!
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
                    <div tw="flex text-5xl">
                      What is the capital of Germany?
                    </div>
                  </div>
                ),
                buttons: [
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "Germany",
                        questionType: "capital",
                        capitalValue: "Munich",
                      },
                    }}
                  >
                    Munich
                  </Button>,

                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "Germany",
                        questionType: "capital",
                        capitalValue: "Hamburg",
                      },
                    }}
                  >
                    Hamburg
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "Germany",
                        questionType: "capital",
                        capitalValue: "Berlin",
                      },
                    }}
                  >
                    Berlin
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "Germany",
                        questionType: "capital",
                        capitalValue: "Frankfurt",
                      },
                    }}
                  >
                    Frankfurt
                  </Button>,
                ],
              };
          }
        case "currency":
          switch (capitalValue) {
            case "Euro":
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
                      query: { country: "Germany", questionType: "language" },
                    }}
                  >
                    Next Question!
                  </Button>,
                ],
              };
            case "Dollar":
            case "Rupee":
            case "Yen":
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
                    <div tw="flex text-5xl">
                      What is the currency of Germany?
                    </div>
                  </div>
                ),
                buttons: [
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "Germany",
                        questionType: "currency",
                        capitalValue: "Dollar",
                      },
                    }}
                  >
                    Dollar
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "Germany",
                        questionType: "currency",
                        capitalValue: "Euro",
                      },
                    }}
                  >
                    Euro
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "Germany",
                        questionType: "currency",
                        capitalValue: "Rupee",
                      },
                    }}
                  >
                    Rupee
                  </Button>,
                  <Button
                    action="post"
                    target={{
                      query: {
                        country: "Germany",
                        questionType: "currency",
                        capitalValue: "Yen",
                      },
                    }}
                  >
                    Yen
                  </Button>,
                ],
              };
          }
      }

    default:
      return {
        image: (
          <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
            <div tw="flex text-5xl">
              Select a 🌎 country to start the 🌐 Atlas quiz!🎉
            </div>
          </div>
        ),
        buttons: [
          <Button
            key="indiaButton"
            action="post"
            target={{
              query: {
                country: "India",
                questionType: "capital",
              },
            }}
          >
            India
          </Button>,
          <Button
            key="usaButton"
            action="post"
            target={{
              query: { country: "USA", questionType: "capital" },
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
                questionType: "capital",
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
