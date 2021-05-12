
import RenderELemenBYType from "../renders/RenderELemenBYType";
import { uid } from 'uid'

const Column = ({ column }) => {
    return <div style={{ ...column.style }}>
        {column.elements.map(element => <RenderELemenBYType key={uid()} element={element} />)}
    </div>
}

export default Column