import styled from "styled-components";
import Card from "../Card/Card";
import icon1 from "../../images/Group 3277.svg"
import icon2 from "../../images/Vector 160.svg"
import icon3 from "../../images/Group 3258.svg"
import icon4 from "../../images/User.svg"
import icon5 from "../../images/Group 3304.svg"
import icon6 from "../../images/Group 3305.svg"
import icon7 from "../../images/Group 3306.svg"
import icon8 from "../../images/Group 3275.svg"


const cardList = [
    {title: 'Total Leads and Deals', count: '1600', price: '132 000 999 €', color: '#C37ADD', iconSrc: icon1},
    {title: 'Won', count: '45', price: '108 000 €', color:'#7AD744', iconSrc: icon2},
    {title: 'Lost', count: '15', price: ' 24 000 €', color:'#F85C5C', iconSrc: icon3},
    {title: 'New leads', count: '115', color:'#2BBEF8', iconSrc: icon4},
    {title: 'Total tasks', count: '269', color:'#C37ADD', iconSrc: icon5},
    {title: 'Completed tasks', count: '115', color:'#7AD744', iconSrc: icon6},
    {title: 'Expired tasks', count: '45', color:'#F85C5C', iconSrc: icon7},
    {title: 'No tasks', count: '10', color:'#2BBEF8', iconSrc: icon8},
]

const CardList: React.FC = () => {
    return(
        <CardListBlock>
            {   cardList && cardList.map(item => {
                    return(
                        <Card
                            key={item.title}
                            title={item.title}
                            count={item.count}
                            price={item.price}
                            color={item.color}
                            iconSrc={item.iconSrc}
                        />
                    )
                })
            }
        </CardListBlock>
  
    )
}

const CardListBlock = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns : repeat(4, 294px);
`

export default CardList;