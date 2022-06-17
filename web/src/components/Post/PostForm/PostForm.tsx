import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'



const PostForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.post?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="subtitle"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subtitle
        </Label>
        
          <TextField
            name="subtitle"
            defaultValue={props.post?.subtitle}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="subtitle" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>
        
          <TextField
            name="body"
            defaultValue={props.post?.body}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="body" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>
        
          <TextField
            name="image"
            defaultValue={props.post?.image}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="image" className="rw-field-error" />

        <Label
          name="tags"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tags
        </Label>
        
          <TextField
            name="tags"
            defaultValue={props.post?.tags}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="tags" className="rw-field-error" />

        <Label
          name="author"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="post-author-0"
            name="author"
            defaultValue="Yog_Sharma"
            defaultChecked={props.post?.author?.includes('Yog_Sharma')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Yog Sharma
          </div>
        </div>
          
        

        <FieldError name="author" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
