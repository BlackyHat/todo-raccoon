import React from 'react'

import { FormFieldProps } from './types'

import scss from './FormField.module.scss'

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  name,
  register,
  errors,
}) => {
  return (
    <label htmlFor={name} className={scss.label}>
      <span>{label}</span>

      <input
        id={name}
        type={type}
        {...register('title', { required: true, maxLength: 20 })}
        aria-invalid={errors.title ? 'true' : 'false'}
        placeholder={placeholder}
        className={`${scss.input} ${errors.title ? scss.error : ''}`}
      />

      {errors.title && (
        <p role="alert" className={scss.alert}>
          Max length 20 symbols
        </p>
      )}
    </label>
  )
}
