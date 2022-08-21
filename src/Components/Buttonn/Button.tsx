import {StyledButton} from './StyleButton'

interface PropsButoon {
      name:string
    outline?: any
}
export default function Button({outline, name}:PropsButoon) {
    return (
        <>
               <div>
   
                <StyledButton type='submit'  outline={outline}>{ name}</StyledButton>
  </div>
      </>
 
  )
}