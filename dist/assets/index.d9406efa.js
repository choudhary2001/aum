import{r as s,bb as d,k as t,ai as f,al as S,U as h,aj as C,ak as x,bS as A,J as m,j,bQ as y}from"./index.dff4e684.js";import{R as v,C as i}from"./Col.96fcbc17.js";import{C as l}from"./index.8b812b30.js";import{B as T}from"./index.8bb87258.js";import{a5 as a}from"./App.37a2596a.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";const L=()=>{const[e,o]=s.exports.useState([]);return s.exports.useEffect(()=>{d.get("/api/autocomplete/data").then(r=>o(r.data.autoComplete))},[]),e.length?t(a,{suggestions:e,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Search for any of the top 250 IMDB movies"}):null},R=()=>{const[e]=s.exports.useState([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]);return t(a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",suggestions:e,className:"form-control"})},H=()=>{const[e]=s.exports.useState([{name:"Jake Shelton",img:f},{name:"Edith Baldwin",img:S},{name:"Jennifer Wolfe",img:h},{name:"Emily Washington",img:C},{name:"Heather Green",img:x},{name:"Brian Moore",img:A}]);return t(a,{filterKey:"name",placeholder:"Type 'a'",className:"form-control",suggestions:e,customRender:(o,r,n,c,g,u)=>m("li",{onMouseEnter:()=>u(n.indexOf(o)),className:j("suggestion-item",{active:n.indexOf(o)===c}),onClick:p=>{g(null,p)},children:[t("img",{src:o.img,alt:o.name,height:"32",width:"32",className:"me-1"}),t("span",{children:o.name})]},r)})},N=()=>{const[e]=s.exports.useState([{groupTitle:"1970s",data:[{title:"C"}]},{groupTitle:"1980s",data:[{title:"C++"},{title:"Perl"}]},{groupTitle:"1990s",data:[{title:"Haskell"},{title:"Python"},{title:"Java"},{title:"Javascript"},{title:"PHP"},{title:"Ruby"}]},{groupTitle:"2000s",data:[{title:"C#"},{title:"Scala"},{title:"Clojure"},{title:"Go"}]},{groupTitle:"2010s",data:[{title:"Elm"}]}]);return t(a,{grouped:!0,filterKey:"title",placeholder:"Type 'c'",className:"form-control",suggestions:e,filterHeaderKey:"groupTitle"})},P=()=>{const[e]=s.exports.useState([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]);return t(a,{suggestions:e,className:"form-control",filterKey:"title",suggestionLimit:2,placeholder:"Type 'a'"})},E=()=>{const[e]=s.exports.useState([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]);return t(a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",className:"form-control",suggestions:e,defaultSuggestions:!0})},J=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteBasic = () => {
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteBasic
`})}),K=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteSections = () => {
  const [suggestions] = useState([
    {
      groupTitle: '1970s',
      data: [
        {
          title: 'C'
        }
      ]
    },
    {
      groupTitle: '1980s',
      data: [
        {
          title: 'C++'
        },
        {
          title: 'Perl'
        }
      ]
    },
    {
      groupTitle: '1990s',
      data: [
        {
          title: 'Haskell'
        },
        {
          title: 'Python'
        },
        {
          title: 'Java'
        },
        {
          title: 'Javascript'
        },
        {
          title: 'PHP'
        },
        {
          title: 'Ruby'
        }
      ]
    },
    {
      groupTitle: '2000s',
      data: [
        {
          title: 'C#'
        },
        {
          title: 'Scala'
        },
        {
          title: 'Clojure'
        },
        {
          title: 'Go'
        }
      ]
    },
    {
      groupTitle: '2010s',
      data: [
        {
          title: 'Elm'
        }
      ]
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      filterHeaderKey='groupTitle'
      grouped={true}
      placeholder="Type 'c'"
    />
  )
}
export default AutoCompleteSections
`})}),B=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AutoComplete from '@components/autocomplete'

const AutoCompleteAjax = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    axios
      .get('/api/autocomplete/data')
      .then(response => setSuggestions(response.data.autoComplete))
  }, [])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      placeholder='Search for any of the top 250 IMDB movies'
    />
  )
}
export default AutoCompleteAjax
`})}),M=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import classnames from 'classnames'
import AutoComplete from '@components/autocomplete'
import img1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import img6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'

const AutoCompleteRender = () => {
  const [suggestions] = useState([
    {
      name: 'Jake Shelton',
      img: img1
    },
    {
      name: 'Edith Baldwin',
      img: img2
    },
    {
      name: 'Jennifer Wolfe',
      img: img3
    },
    {
      name: 'Emily Washington',
      img: img4
    },
    {
      name: 'Heather Green',
      img: img6
    },
    {
      name: 'Brian Moore',
      img: img5
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='name'
      placeholder="Type 'a'"
      customRender={(
        suggestion,
        i,
        filteredData,
        activeSuggestion,
        onSuggestionItemClick,
        onSuggestionItemHover
      ) => (
        <li
          className={classnames('suggestion-item', {
            active: filteredData.indexOf(suggestion) === activeSuggestion
          })}
          key={i}
          onMouseEnter={() =>
            onSuggestionItemHover(filteredData.indexOf(suggestion))
          }
          onClick={e => {
            onSuggestionItemClick(null, e)
          }}
        >
          <img
            src={suggestion.img}
            alt={suggestion.name}
            height='32'
            width='32'
            className='me-1'
          />
          <span>{suggestion.name}</span>
        </li>
      )}
    />
  )
}
export default AutoCompleteRender
`})}),k=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteDefaultSuggestions = () => {
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      defaultSuggestions={true}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteDefaultSuggestions
`})}),b=t("pre",{children:t("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteSearchLimit = () => {
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={2}
      placeholder="Type 'a'"
    />
  )
}
export default AutoCompleteSearchLimit
`})}),Y=()=>(s.exports.useEffect(()=>{y.highlightAll()},[]),m(s.exports.Fragment,{children:[t(T,{title:"Auto Complete",data:[{title:"Components"},{title:"Auto Complete"}]}),m(v,{children:[t(i,{xl:"6",lg:"12",children:t(l,{title:"Basic",code:J,children:t(R,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Sections",code:K,children:t(N,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Ajax",code:B,children:t(L,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Custom Render",code:M,children:t(H,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Default Suggestions",code:k,children:t(E,{})})}),t(i,{xl:"6",lg:"12",children:t(l,{title:"Search Limit",code:b,children:t(P,{})})})]})]}));export{Y as default};
