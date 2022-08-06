import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

type NewTransactionModalProps = {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('deposit')//comeca com deposit - 1
    const [category, setCategory] = useState('')

    function handleAddNewTransaction(event: FormEvent) {
        event.preventDefault()
        const data = {
            title, value, type, category
        }

        api.post('/transactions', data)
    }

    return (
        <Modal isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
         >

        <button type="button"
         onClick={onRequestClose} 
         className="react-modal-close"
         >
            <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container onSubmit={handleAddNewTransaction}>

        <h2>Cadastrar nova Transaçao</h2>

        <input placeholder="Titulo"
         onChange={event => setTitle(event.target.value)}
          value={title} />
        <input placeholder="Valor"
         type="number"
          onChange={event => setValue(Number(event.target.value))}
           value={value}
           />
        <TransactionTypeContainer>
            <RadioBox type="button"
             onClick={() => setType('deposit')}
              isActive={type == 'deposit'}
               activeColor="green"
               >{/* - 2 */}
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox type="button" 
            onClick={() => setType('withdraw')}
             isActive={type == 'withdraw'}
              activeColor="red"
              >
                <img src={outcomeImg} alt="Saida" />
                <span>Saida</span>
            </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria"
         onChange={event => setCategory(event.target.value)}
          value={category}
          />
        <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )
}