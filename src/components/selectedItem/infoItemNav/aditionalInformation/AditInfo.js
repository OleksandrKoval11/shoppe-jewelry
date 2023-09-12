import { useSelector } from "react-redux/es/hooks/useSelector";


const Info = () => {
    const { selectedItemId } = useSelector(state => state.item);

    const {weight, dimentions, colours, material} = selectedItemId.info;

    return (
        <ul className="item__info">
            <li className='info__catgrs-key'>Weight: <span className='info__catgrs-value'>{weight || null}</span></li>
            <li className='info__catgrs-key'>Dimentions: <span className='info__catgrs-value'>{dimentions || null} </span></li>
            <li className='info__catgrs-key'>Colours: <span className='info__catgrs-value'>{colours || null}</span></li>
            <li className='info__catgrs-key'>Material: <span className='info__catgrs-value'>{material || null}</span></li>
        </ul>
    )
}

export default Info;