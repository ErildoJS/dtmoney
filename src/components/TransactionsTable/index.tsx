import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>criacao de um site</td>
                        <td className="deposit">kz 120,000</td>
                        <td>desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>aluguel</td>
                        <td className="withdraw">- kz 1020,000</td>
                        <td>casa</td>
                        <td>20/02/2022</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}