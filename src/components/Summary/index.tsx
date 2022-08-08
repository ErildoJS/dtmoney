import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { Container } from './styles'

export function Summary() {
    const data = useContext(TransactionsContext)
    console.log(data)
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>kz 200,000</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>kz 50,000</strong>
            </div>

            <div className='highlight'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>kz 150,000</strong>
            </div>
        </Container>
    )
}