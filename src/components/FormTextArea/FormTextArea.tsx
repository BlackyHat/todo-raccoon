import React from 'react'

import { FormTextAreaProps } from './types'

import scss from './FormTextArea.module.scss'

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  placeholder,
  name,
  register,
  errors,
}) => (
  <label htmlFor={name} className={scss.label}>
    <span>{label}</span>

    <textarea
      id={name}
      {...register(name, { required: true, maxLength: 200 })}
      aria-invalid={errors.description ? 'true' : 'false'}
      placeholder={placeholder}
      className={`${scss.textarea} ${errors.title ? scss.error : ''}`}
    />

    {errors[name] && (
      <p role="alert" className={scss.alert}>
        Max length 200 symbols
      </p>
    )}
  </label>
)
