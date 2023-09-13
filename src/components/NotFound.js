
import './NotFound.css'


export default function NotFound(props){
    return(
        <section>
            <h1 className>!! DAY {props.dayFind} NOT FOUND !!</h1>
            <h4>TRY NUMBERS LESS THAN OR EQUAL {props.days}</h4>
        </section>
    )
}