import { useState } from "react";
import styled from "styled-components";
import { IDateItem } from "../../models/models";

const dateList= [
    {title: 'Month', status: 'active'},
    {title: 'Week', status: ''},
    {title: 'Yesterday', status: ''},
    {title: 'Today', status: ''},
]

const DateFilter: React.FC = () => {

    const [list, setList] = useState<IDateItem[]>(dateList);

    const setStatus = (checkItem: IDateItem ) => {
        const newDateList = dateList.concat();
        newDateList.forEach(i => {
            i.status = '';
            if(i.title === checkItem.title) i.status = 'active';
        })
        setList(newDateList)
    }

    return(
        <DateFilterList>
            { list && list
                .map(item => 
                    <DateFilterItem 
                        key={item.title} 
                        className={item.status ? 'active' : ''}
                        onClick={() => setStatus(item)}
                    >{item.title}</DateFilterItem>) 
            }
        </DateFilterList>
    )
}

const DateFilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const DateFilterItem = styled.li`
    line-height: 160%;
    color: #AAB7D4;
    margin-right: 2.5rem;

    &:last-child {
        margin-right: 0;
    }
    &:hover {
        color: #7B8AAB;
        cursor: pointer;
    }
    &.active {
        color: #3D8FEC;
    }
`

export default DateFilter;