import React from 'react';
import { useSelector } from 'react-redux'

import { ELEMENTTYPE } from '../../redux/config/elementSchema'
import Text from '../elements/Text'
import Variable from '../elements/Variable'
import Image from '../elements/Image'
import Signature from '../elements/Signature'
import WysEditor from '../elements/WysEditor'
import Devider from '../elements/Devider'

const RenderElement = ({ elementId }) => {
    const _type = useSelector(state => state.contractDom.elements[elementId].type)
    switch (_type) {
        case ELEMENTTYPE.text:
            return <Text elementId={elementId} />
        case ELEMENTTYPE.wys:
            return <WysEditor elementId={elementId} />
        case ELEMENTTYPE.img:
            return <Image elementId={elementId} />
        case ELEMENTTYPE.variable:
            return <Variable elementId={elementId} />
        case ELEMENTTYPE.signature:
            return <Signature elementId={elementId} />
        case ELEMENTTYPE.devider:
            return <Devider elementId={elementId} />

        default:
            return <p>Element type not found</p>
    }
}

export default RenderElement;