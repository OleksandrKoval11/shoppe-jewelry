import { useSelector } from "react-redux/es/hooks/useSelector";

const Descr  = () => {
    const { selectedItemId } = useSelector(state => state.item);

    return (
        <div className="item__descr">{selectedItemId.descr || 'No description'}</div> 
    )
}

export default Descr;