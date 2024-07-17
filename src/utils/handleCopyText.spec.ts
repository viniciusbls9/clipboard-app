import { vi, it, describe, expect, beforeEach } from "vitest";
import handleCopy from "./handleCopyText";
import { Dispatch, SetStateAction } from "react";

describe("handleCopy", () => {
  let setCopied: Dispatch<SetStateAction<boolean>>;

  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    setCopied = vi.fn();

    vi.useFakeTimers();
  });

  it("should copy text to clipboard and set copied state to true and then false after 2 seconds", async () => {
    const textToCopy = "Hello, World!";

    handleCopy(textToCopy, setCopied);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(textToCopy);

    await navigator.clipboard.writeText(textToCopy);

    expect(setCopied).toHaveBeenCalledWith(true);

    vi.advanceTimersByTime(2000);

    expect(setCopied).toHaveBeenCalledWith(false);
  });
});
