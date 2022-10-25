import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

  return(
    <Container>
      <table>

        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Trabalho</td>
            <td>05-10-22</td>
          </tr>
          <tr>
            <td className="title">Aluguel</td>
            <td className="withdraw">- R$1.200</td>
            <td>Casa</td>
            <td>21-10-22</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}