let html = {
  "body": {
    "type": "body",
    "style": {},
    "children": [
      {
        "id": "942d3a3a24f",
        "type": "container",
        "style": {},
        "children": [
          {
            "id": "123",
        "type": "container",
        "style": {},
        "children": []
          },
          {
            "id": "456",
        "type": "container",
        "style": {},
        "children": []
          }
        ]
      },
      {
        "id": "22232",
        "type": "container",
        "style": {},
        "children": []
      }
    ]
  }
}

const findElementAndDelete = (vdom, id) =>{
  // if(vdom instanceof Array && !vdom.length){
  //   return undefined
  // }
  // if(vdom.children && !vdom.children.length){
  //    return undefined
  // }
  // if(vdom.children && vdom.children.length){
  //   findElementAndDelete(vdom.children, id)
  // }
  // if(vdom instanceof Array && vdom.length){
  //   vdom = vdom.filter(element => element.id !== id);
   
  //   console.log('vdom after delete',vdom)
  // }
  // if(vdom instanceof Array && vdom.length){
  //     let newArr = [...vdom]
  //   return console.log(newArr)
  // }
  let newObj = {...vdom}
  
  const findDelet = (dom) => {
    if(dom.children){
      let found = dom.children.find(e => e.id === id)
      if(found){
        let children = dom.children.filter(e => e.id !== id)
        dom.children = children
      }
      findDelet()
    } else {
      return 'Not found'
    }
  }
  findDelet(newObj)
  
  html  = vdom
  console.log('vdom', vdom)
  console.log('html', html)
}

const elementId = '942d3a3a24f'

const Test = () => {
  
  return (
    <div onClick={() => findElementAndDelete(html.body, elementId)}>For Tets</div>
  )
}

export default Test