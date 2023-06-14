import React from 'react'
import { InputText,CloseIconStyled,WrapperInput } from './Style'

const SearchInput = ({type,placeholder,onChange,keySearch,setKeySearch,handleEmptyInput}) => {

  return (
    <WrapperInput>
       <InputText type={type} placeholder={placeholder} onChange={onChange} value={keySearch}  />
      {keySearch !== "" && <CloseIconStyled onClick={() => handleEmptyInput()} />} 
    </WrapperInput>
 
  )
}

export default SearchInput