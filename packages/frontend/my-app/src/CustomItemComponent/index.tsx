import React from 'react';

interface CustomItemProp{
    callBack: (value: string) => void
}

interface items{
    title: string,
    isActive: boolean
}

export const CustomItemComponent: React.FC <CustomItemProp> = (props) => {

    const {callBack} = props;

    const items: Array<items> = [
        {
            title: 'Dog',
            isActive: true
        },
         {
            title: 'Cat',
            isActive: false
         },
          {
            title: 'Mouse',
            isActive: true
        },
           {
            title: 'Chicken',
            isActive: false
        }
    ]

    const handleOnClick = (value:string) => {
        callBack(value);
    }

    return  <ul className="ul-dropdown">
        {items.map(
            (value, index) => {
                return <li className={value.isActive == true ? 'active' : 'inActive'} key = {index} onClick={()=> value.isActive == true && handleOnClick(value.title) }>  {value.title} </li>
            }
        )}
    </ul>
}
