import styled from "styled-components";
import { CardProps } from "../../models/models";

const Card: React.FC<CardProps> = ({
    title, 
    count, 
    price, 
    color,
    iconSrc,
}) => {
    return(
        <CardBlock>
            <CardIconBlock color={color}>
                <img src={iconSrc} alt={'Card icon'}/>
            </CardIconBlock>
            <CardContent>
                <CardTitle color={color}>{title}</CardTitle>
                <CardText>
                    <span>{count}</span>
                    { price ? <div className='separator'></div> : null }
                    <span className='price'>{price}</span>
                </CardText>
            </CardContent>
        </CardBlock>
    )
}

const CardBlock = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 90px;
    padding: 1rem;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px #EEF4FE, 0px 1px 2px #D0DAEB;
    border-radius: 7px;
`

const CardIconBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: ${props => props.color};
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    margin-right: 1rem;
`
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`
const CardTitle = styled.p`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${props => props.color};
`
const CardText = styled.div`
    display: flex;
    align-items: center;

    & > span {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 150%;
        color: #373737;
        &.price {
            font-weight: 400;
        }
    }

    & > div.separator {
        width: 2px;
        height: 19px;
        background: #373737;
        border-radius: 2px;
        margin: 0 .3rem;
    }
`

export default Card;