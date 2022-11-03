import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import JestTestExample from ".";

describe("Containers -> JestTestExample", () => {
  it("should render", () => {
    render(<JestTestExample />);

    // screen.logTestingPlaygroundURL();

    expect(screen.getByText(/submeter/i)).toBeTruthy();
  });

  it("should show hidden text when form is correctly submitted", async () => {
    render(<JestTestExample />);

    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);

    fireEvent.change(nameInput, { target: { value: "Nome Mock" } });
    fireEvent.change(emailInput, { target: { value: "mocked@mock.com" } });

    const button = screen.getByRole("button", { name: /submeter/i });

    fireEvent.click(button);

    await waitFor(
      () => {
        expect(
          screen.getByText("Formulário submetido com sucesso")
        ).toBeTruthy();
      },
      {
        timeout: 2200,
      }
    );
  });
});
