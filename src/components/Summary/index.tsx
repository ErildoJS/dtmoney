import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export function Summary() {
  const {transactions} = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits = acc.deposits + transaction.amount
      acc.total = acc.total + transaction.amount
    }else {
      acc.deposits = acc.deposits + transaction.amount
      acc.withdraws = acc.withdraws - transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-AO', {
                                style: 'currency',
                                currency: 'Kwz'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-AO', {
                                style: 'currency',
                                currency: 'Kwz'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className='highlight'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-AO', {
                                style: 'currency',
                                currency: 'Kwz'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}