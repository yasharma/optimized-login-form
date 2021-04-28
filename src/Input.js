import { forwardRef, useImperativeHandle, useState } from "react"

const Input = (props, ref) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const onChange = (e) => {
    setError('');
    setValue(e.target.value);
  }

  useImperativeHandle(ref, () => ({
    value,
    clear: () => {
      setValue('');
      setError('');
    },
    setError
  }))

  return (
    <input
      className={`${error ? 'is-invalid' : ''} form-control`}
      onChange={onChange}
      value={value}
      {...props}
    />
  )
}

export default forwardRef(Input);
