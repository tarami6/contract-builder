import React from 'react';
import { useSelector } from 'react-redux'

import { ELEMENTTYPE } from '../../../redux/config/elementSchema'
import Text from '../displayElements/DisplayText'
import Variable from '../displayElements/DisplayVariable'
import Image from '../displayElements/DisplayImage'
import Signature from '../displayElements/DisplaySignature'
import WysEditor from '../displayElements/DisplayWysEditor'
import Devider from '../displayElements/DisplayDevider'
import Code from '../displayElements/DisplayCode'

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
        case ELEMENTTYPE.code:
            return <Code elementId={elementId} />
        default:
            return <p>Element type not found</p>
    }
}

export default RenderElement;