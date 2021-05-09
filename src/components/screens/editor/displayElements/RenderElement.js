import React from 'react';
import { useSelector } from 'react-redux'
import { ELEMENTTYPE } from 'redux/config/elementSchema'
import Text from './DisplayText'
import Variable from './DisplayVariable'
import Image from './DisplayImage'
import Signature from './DisplaySignature'
import WysEditor from './DisplayWysEditor'
import Devider from './DisplayDevider'
import Code from './DisplayCode'
import Table from './DisplayTable'

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
        case ELEMENTTYPE.table:
            return <Table elementId={elementId} />
        default:
            return <p>Element type not found</p>
    }
}

export default RenderElement;