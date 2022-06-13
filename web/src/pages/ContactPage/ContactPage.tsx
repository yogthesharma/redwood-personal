import { FieldError, Form, Submit, SubmitHandler, TextAreaField, TextField, FormError, useForm } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`


interface FormValues {
  input: string
  email: string
  message: string
}

const ContactPage = () => {

  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success("Thank You For Your Submission")
      formMethods.reset()
    }
  })


  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} error={error} formMethods={formMethods}>
        <FormError error={error} wrapperClassName="form-error" />

        <label htmlFor="name">Name</label>
        <TextField name='name' validation={{ required: true }} errorClassName="error" />
        <FieldError name="name" className="error" />


        <label htmlFor="email">Email</label>
        <TextField name="email" validation={{
          required: true,
          pattern: {
            value: /^[^@]+@[^.]+\..+$/,
            message: 'Please enter a valid email address',
          },
        }} errorClassName="error" />
        <FieldError name="email" className="error" />


        <label htmlFor="message">Message</label>
        <TextAreaField name="message" validation={{ required: true }} errorClassName="error" />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
