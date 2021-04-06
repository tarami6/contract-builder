import Text from '../components/Text'
import Variable from '../components/Variable'
import Image from '../components/Image'
import Signature from '../components/Signature'
import WysText from '../components/WysText'
import Devider from '../components/Devider'
import Code from '../components/Code'
import { ELEMENTTYPE } from '../../../redux/config/elementSchema'

const RenderELemenBYType = ({ element }) => {
    switch (element.type) {
        case ELEMENTTYPE.text:
            return <Text element={element} />
        case ELEMENTTYPE.wys:
            return <WysText element={element} />
        case ELEMENTTYPE.variable:
            return <Variable element={element} />
        case ELEMENTTYPE.img:
            return <Image element={element} />
        case ELEMENTTYPE.signature:
            return <Signature element={element} />
        case ELEMENTTYPE.devider:
            return <Devider element={element} />
        case ELEMENTTYPE.code:
            return <Code element={element} />
        default:
            return <div />
    }
}


export default RenderELemenBYType