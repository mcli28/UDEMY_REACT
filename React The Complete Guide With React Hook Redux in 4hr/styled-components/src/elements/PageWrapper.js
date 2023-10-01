import styled, {css} from 'styled-components'

export default styled.div`
width: 100%;
display: flex;
justify-content: ${({pid, npages}) =>{
    if(pid == 0) return 'flex-end'
    else if(pid === npages-1) return 'flex-start'
    else return 'space-between'
}}`