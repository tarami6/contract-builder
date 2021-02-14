import Text from '../components/Text'
import Variable from '../components/Variable'
import Image from '../components/Image'


const RenderELemenBYType = ({ element }) => {
    switch (element.type) {
        case 'text':
            return <Text element={element} />
        case 'variable':
            return <Variable element={element} />
        case 'img':
            return <Image element={element} />
        default:
            return <div />
    }
}


export default RenderELemenBYType