import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { FormTextArea, FormField } from '@/components'

import { useAppDispatch } from '@/hooks'
import { addTask } from '@/redux'

import scss from './TodoForm.module.scss'
import { TodoFormProps } from './types'

import PlusIcon from '@assets/icons/icon-plus.svg?react'

export const TodoForm: React.FC<TodoFormProps> = ({ onClose }) => {
  const dispatch = useAppDispatch()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<FieldValues> = data => {
    dispatch(addTask(data))
    toast.success('New task was added')
    reset()
    onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
      <FormField
        name="name"
        register={register}
        label="Name:"
        placeholder="Work on task A"
        errors={errors}
      />

      <FormTextArea
        name="description"
        register={register}
        label="Description:"
        placeholder="Make sure you add some details about your goal ;)"
        errors={errors}
      />

      <button type="submit" className={scss.submitButton}>
        Save
        <PlusIcon />
      </button>
    </form>
  )
}
