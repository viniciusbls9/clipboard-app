import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import ClipboardWrapper from "./clipboard-wrapper";

describe("ClipboardWrapper", () => {
  test("should render ClipboardWrapper", () => {
    const clipboardContent = ["text1", "text2"];

    const { getAllByTestId } = render(
      <ClipboardWrapper clipboardContent={clipboardContent} />
    );

    expect(getAllByTestId("clipboard-card")).toHaveLength(
      clipboardContent.length
    );
  });
});
