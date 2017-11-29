import React from 'react';
import Select from 'react-select';

export const RenderInput = ({label, value, name, placeholder, error, onChange, outerGroupClassName, labelClassName, inputGroupClassName}) =>{
  // const error_result = registerValidator(errorType, value)
  return(
    <div className={outerGroupClassName + (error ? ' has-error' : '')}>
      {label ? <label className={labelClassName}>{label}</label> : '' }
      <div className={inputGroupClassName}>
        <input type='text' className="form-control" placeholder={placeholder} value={value} name={name} onChange={onChange} />
        {error && <div className="text-danger">{error}</div>}
      </div>

    </div>
  )
}

export const RenderPasswordInput = ({label, value, name, error, onChange, outerGroupClassName, labelClassName, inputGroupClassName}) =>{
  // const error_result = registerValidator(errorType, value)
  return(
    <div className={outerGroupClassName + (error ? ' has-error' : '')}>
      <label className={labelClassName}>{label}</label>
      <div className={inputGroupClassName}>
        <input type='password' className="form-control" value={value} name={name} onChange={onChange} />
        {error && <div className="text-danger">{error}</div>}
      </div>

    </div>
  )
}

export const RenderInputSelect = ({placeholder, label, value, name, options, error, onChange, outerGroupClassName, labelClassName, inputGroupClassName}) =>{
  // const error_result = registerValidator(errorType, value)
  return(
    <div className={outerGroupClassName + (error ? ' has-error' : '')}>
      <label className={labelClassName}>{label}</label>
      <div className={inputGroupClassName}>
        <Select
          name={name}
          value={value}
          placeholder={placeholder}
          options={options}
          onChange={onChange}
        />
        {error && <div className="text-danger">{error}</div>}
      </div>

    </div>
  )
}

export const RenderCheckbox = ({label, value, name, options, error, onChange, outerGroupClassName, labelClassName, inputGroupClassName, text}) => {
  return(
    <div className={outerGroupClassName + (error ? ' has-error' : '')}>
      <label className={labelClassName}>{label}</label>
      <div className={inputGroupClassName}>
        <input type='checkbox' name={name} value={value} onChange={onChange} />
        {text && text}
        {error && <div className="text-danger">{error}</div>}
      </div>
    </div>
  );
}

export const RenderButton = ({value, name, onClick, position}) => {
  return(
    <div className={position}>
      <button className="btn btn-default btn-md deal-qs-btn" type='button' name={name} value={value} onClick={onClick} />
    </div>
  );
}

export const RenderDateTime = ({label, name, max, value, error, onChange, outerGroupClassName, labelClassName, inputGroupClassName}) => {
  return(
    <div className={outerGroupClassName + (error ? ' has-error' : '')}>
      <label className={labelClassName}>{label}</label>
      <div className={inputGroupClassName}>
        <input type='date' className="form-control" name={name} max={max} value={value} onChange={onChange} />
        {error && <div className="text-danger">{error}</div>}
      </div>
    </div>
  );
}

export const RenderFileInput = ({label, name, value, error, onChange, accept, outerGroupClassName, labelClassName, inputGroupClassName}) => {
  return(
    <div className={outerGroupClassName + (error ? ' has-error' : '')}>
      <label className={labelClassName}>{label}</label>
      <div className={inputGroupClassName}>
        <input className='file_input' type='file' name={name} accept={accept} onChange={onChange} />
        {error && <div className="text-danger">{error}</div>}
      </div>
    </div>
  );
}

export const RenderRadioboxes = ({label, name, array, error, onChange, outerGroupClassName, labelClassName, inputGroupClassName}) => {
  const newArray = array.map((item) =>
    <li><input type='radio' name={name} value={item} onChange={onChange}/><div className='text_for_radiobox'>{item}</div></li>
  );
  return(
    <div className={outerGroupClassName + (error ? ' has-error' : '')}>
      <label className={labelClassName}>{label}</label>
      <div className={inputGroupClassName}>
        <ul>{newArray}</ul>
        {error && <div className="text-danger">{error}</div>}
      </div>
    </div>
  );
}


export const RenderSubmitButton = ({outerGroupClassName, buttonClassName, onClick, label}) => {
  return(
    <div className={outerGroupClassName}>
      <button className={"btn btn-default btn-md "+ buttonClassName} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export const RenderTextBox = ({label,value, name, placeholder, rows, error, onChange, outerGroupClassName, labelClassName, textAreaClassName}) => {
  return(
    <div className={outerGroupClassName + (error ? ' has-error' : '') }>
      {label ? <label className={labelClassName}>{label}</label> : '' }
      <div className={textAreaClassName}>
        {/* textarea - resizes textbox vertical only */}
        <textarea className="form-control textarea" rows={rows} placeholder={placeholder} value={value} name={name} onChange={onChange}></textarea>
        {error && <div className="text-danger">{error}</div>}
      </div>

    </div>
    );

}








