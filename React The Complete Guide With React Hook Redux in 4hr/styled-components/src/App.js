//import styled from 'styled-components'
import MySection from './elements/MySection';
import MyHeader from './elements/MyHeader';
import MyButton from './elements/MyButton';
import MaterialButton from './elements/MaterialButton'
import PageWrapper from './elements/PageWrapper';
import { GreenTheme, BlueTheme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
function App() {

  const pages = [
    {
      title: 'page 1',
      buttons:[
        {text: 'next'}
      ]
    },
    {
      title: 'page 2',
      buttons:[
        {text: 'prev'},
        {text: 'next'}
      ]
    },
    {
      title: 'page 3',
      buttons:[
        {text: 'prev'},
        {text: 'next'}
      ]
    },
    {
      title: 'page 4',
      buttons:[
        {text: 'prev'}
      ]
    },

  ]

  const [id, setId] = useState(0)
  let pageDisplay = pages[id]
  const go = (index) => {
    if(id == 0 && index == 0) {
      setId(id+1)
    } else if(index == 0) {
      setId(id-1)
    } else {
      setId(id+1)
    }

  }
  return (
    <ThemeProvider theme={BlueTheme}>
      <div className="App">
          <MyHeader>{pageDisplay.title}</MyHeader>
          <PageWrapper pid={id} npages={pages.length}>
            {pageDisplay.buttons.map((button, i) => {
              return <MyButton key={i} onClick={()=> go(i)}>{button.text}</MyButton>
            })}
          </PageWrapper>
      </div>
    </ThemeProvider>
  );
  /*return (
    <ThemeProvider theme={BlueTheme}>
      <div className="App">
        <MySection>
          <MyHeader>My Header</MyHeader>
        </MySection>
          <MyButton primary>My Button</MyButton>
          <MyButton>My Button</MyButton>
          <MaterialButton>My Button</MaterialButton>
      </div>
    </ThemeProvider>
  );*/
}

export default App;
