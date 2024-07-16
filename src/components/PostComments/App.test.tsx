import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Post from '../Post';

test('inserção de dois comentários no Post', async () => {
    render(<Post />); // Renderiza o componente Post

    // Encontra o input de comentário pelo data-testid
    const commentInput = screen.getByTestId('comment-input');

    // Simula a entrada de texto e o envio de formulário para o primeiro comentário
    fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
    fireEvent.submit(screen.getByTestId('comment-form'));

    // Simula a entrada de texto e o envio de formulário para o segundo comentário
    fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
    fireEvent.submit(screen.getByTestId('comment-form'));

    // Aguarda a renderização dos comentários na tela
    const commentElements = await screen.findAllByTestId('comment');
    expect(commentElements).toHaveLength(2);
    expect(commentElements[0]).toHaveTextContent('Primeiro comentário');
    expect(commentElements[1]).toHaveTextContent('Segundo comentário');
});
