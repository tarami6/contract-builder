
import RenderELemenBYType from "../renders/RenderELemenBYType";

const Column = ({ column }) => {
    return <div style={{ ...column.style }}>
        {column.elements.map(element => <RenderELemenBYType key={element.id} element={element} />)}
    </div>
}

export default Column