import { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {cloneDeep} from 'lodash'

const useContractVirtualDom = (state) => {
    const body = state?.body
    const rows = state?.rows
    const columns = state?.columns
    const elements = state?.elements
    const [cVDom, setCVDom ] = useState(body)

    const buildDom = useCallback(() => {
        let vdom = cloneDeep(body)
        let _rows = cloneDeep(rows)
        let _columns = cloneDeep(columns)
        let _elements = cloneDeep(elements)
        vdom.rows = vdom.rows.map(rowOrId =>{
            if(typeof rowOrId === 'string'){
                return _rows[rowOrId]
            }
            else return _rows[rowOrId.id]
        } )
        vdom.rows.forEach(row => {
            row.columns = row.columns.map(columnId => {
                if(typeof columnId === 'string'){
                    return _columns[columnId]
                }
                else return  _columns[columnId.id]
            })
        });
        vdom.rows.forEach(row => {
            row.columns?.forEach(column => {
                if(column?.elements){
                    column.elements = column.elements.map(elementOrId =>{
                        if(typeof elementOrId === 'string'){
                            return _elements[elementOrId]
                        }
                        else return _elements[elementOrId.id] 
                    } )
                }
            });
        })
        return vdom
    }, [body, rows, columns, elements])

    useEffect(() => {
        setCVDom(buildDom())
    }, [body, rows, columns, elements, setCVDom, buildDom])

    return cVDom
};

export default useContractVirtualDom;