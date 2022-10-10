import { useState } from "react";
import arrow from '../../images/Arrow.svg'
import styled from "styled-components";
import { IDropdownItem } from "../../models/models";

const dropdownList = [
    {title: 'All Pipelines', status: 'active'},
    {title: 'Sales', status: ''}, 
    {title: 'Marketing', status: ''},
    {title: 'Partners', status: ''},
]

const Dropdown: React.FC  = () => {
    const [list, setList] = useState<IDropdownItem[]>(dropdownList);
    const [active, setActive] = useState(false);
    const [dropdownTitle, setDropdownTitle] = useState('All Pipelines');

    const handleClick = (checkItem: IDropdownItem) => {
        setActive(!active);
        const newDropdownList = dropdownList.concat();
        newDropdownList.forEach(i => {
            i.status = '';
            if(i.title === checkItem.title) {
                i.status = 'active'
                setDropdownTitle(checkItem.title);
            };
        })
        setList(newDropdownList);
    }

    return(
        <DropdownBlock>
            <DropdownButton onClick={() => setActive(!active)} className={active ? 'active' : ''}>
                {dropdownTitle}
                <img src={arrow} alt='arrow icon'/>
            </DropdownButton>
            <DropdownList className={active ? 'active' : ''}>
                { list.map(item => 
                    <DropdownItem 
                        key={item.title} 
                        onClick={() => handleClick(item)} 
                    >{item.title}</DropdownItem>) 
                }
            </DropdownList>
        </DropdownBlock>
    )
}

const DropdownBlock = styled.div`
    position: relative;
`

const DropdownButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    line-height: 150%;
    color: #555555;
    margin-bottom: 9px;

    & > img {
        width: 7px;
        height: 4px;
        margin-left: 8.5px;
    }
    &.active > img {
        transform: rotate(180deg);
    }
`

const DropdownList = styled.ul`
    display: none;
    position: absolute;
    width: 167px;
    height: 182px;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px #EEF4FE, 0px 1px 2px #D0DAEB;
    border-radius: 7px;

    &.active {
        display: block;
    }

`
const DropdownItem = styled.li`
    padding: 12px 1rem;
    color: #555555;
    transition: .3s easy;
    border: 1px solid transparent;

    &:hover {
        color: #000;
        background: #D4DBE9;
        opacity: 0.25;
        border-color: #000000;
        cursor: pointer;
    }
`

export default Dropdown;