import { fireEvent, render, screen } from "@testing-library/react";
import PostComments from ".";

describe("Teste para o componente PostComments", () => {
  it('Deve renderizar o botão "Comentar"', () => {
    render(<PostComments />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar dois comentários corretamente", () => {
    render(<PostComments />);

    const textarea = screen.getByTestId("comment-input");
    const button = screen.getByTestId("comment-button");

    fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
    fireEvent.click(button);

    fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
    fireEvent.click(button);

    const comments = screen.getAllByTestId("comment-item");
    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent("Primeiro comentário");
    expect(comments[1]).toHaveTextContent("Segundo comentário");
  });
});
