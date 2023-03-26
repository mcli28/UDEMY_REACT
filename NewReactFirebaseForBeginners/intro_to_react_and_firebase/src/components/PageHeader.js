import React from 'react'

const PageHeader = (props) => {
  return (
    <section className='hero is-primary'>
        <div className="hero-body">
            <p className="title">
                {props.title ? props.title :<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>}
            </p>
        </div>
    </section>
  )
}

export default PageHeader