import React from "react"
import {Table} from "react-bootstrap"
import {orderBy} from 'lodash'

export default ({email, points, firstName, lastName}) => {
    const specialStyle = {background: "rgba(148,222,144,0.84)", paddingTop: "50px"}
    const data = orderBy([
        {firstName: "Борис", lastName: "Петраков", points: 1, email: "borys.petrakov@gmail.com"},
            {firstName: "Данило", lastName: "Кушнірук", points: 2, email: "some.email@gmail.com"},
            {firstName: "Рад", lastName: "Вихрущ", points: 1, email: "some.email@gmail.com"},
            {firstName: "Боримир", lastName: "Макарушка", points: 3, email: "some.email@gmail.com"},
            {firstName: "Йоханес", lastName: "Заіченко", points: 3, email: "some.email@gmail.com"},
            {firstName: "Ладолюб", lastName: "Роздольський", points: 4, email: "some.email@gmail.com"},
            {firstName: "Ядвіга", lastName: "Готра", points: 5, email: "some.email@gmail.com"},
            {firstName: "Цвітана", lastName: "Боцюрко", points: 10, email: "some.email@gmail.com"},
            {firstName: "Красимира", lastName: "Болбочан", points: 14, email: "some.email@gmail.com"},
            {firstName: "Ніна", lastName: "Мірчук", points: 15, email: "some.email@gmail.com"},
            {firstName: "Дарія", lastName: "Ус", points: 11, email: "some.email@gmail.com"},
            {firstName: "Злата", lastName: "Варенко", points: 16, email: "some.email@gmail.com"},
            {firstName, lastName, points, email, isYou: true}
        ],
        ['points'], ['desc']);
    return <><Table striped bordered hover size="sm" style={{width: "80%", marginLeft: "10%", marginTop: "50px"}}>
        <thead>
        <tr>
            <th>#</th>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Email</th>
            <th>Балли</th>
        </tr>
        </thead>
        <tbody>
        {
            data.map((val, index) =>
                <tr key={index} style={val.isYou? specialStyle: {}}>
                    <td>{index + 1}</td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.email}</td>
                    <td>{val.points}</td>
                </tr>
            )
        }
        </tbody>
    </Table>
        </>
    //`${email}\n${firstName}\n${lastName}\n${points}`;

}