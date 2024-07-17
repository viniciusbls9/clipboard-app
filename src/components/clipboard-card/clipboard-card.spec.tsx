import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import CliboardCard from "./clipboard-card";
import handleCopy from "../../utils/handleCopyText";

vi.mock("../../utils/handleCopyText");

describe("CliboardCard", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValueOnce(undefined),
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should render a text received from props", () => {
    const text = "Hello World!";
    const { getByText } = render(<CliboardCard text={text} />);

    expect(getByText(text)).toBeInTheDocument();
  });

  test("should call handleCopy when clicked", async () => {
    const text = "Hello World!";
    const { getByText } = render(<CliboardCard text={text} />);

    await userEvent.click(getByText(text));

    expect(handleCopy).toHaveBeenCalledWith(text, expect.any(Function));
  });
});
