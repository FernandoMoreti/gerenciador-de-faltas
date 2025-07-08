// eslint-disable-next-line
import react from "react"
import { Container } from "./style"
import { useNavigate } from "react-router-dom"

export default function ButtonEscola(props) {

    const navigate = useNavigate()

    function goTo(props) {
        navigate(`/salas/${props.id}`)
    }

    return (
        <Container onClick={() => goTo(props)}>
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
        </Container>
    )
}