import { useEffect } from "react";
import { api } from "../../services/api";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}