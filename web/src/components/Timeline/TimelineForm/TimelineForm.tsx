import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'



const TimelineForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.timeline?.id)
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
            defaultValue={props.timeline?.title}
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
            defaultValue={props.timeline?.subtitle}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="subtitle" className="rw-field-error" />

        <Label
          name="year"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Year
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-0"
            name="year"
            defaultValue="y2021"
            defaultChecked={props.timeline?.year?.includes('y2021')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2021
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-1"
            name="year"
            defaultValue="y2020"
            defaultChecked={props.timeline?.year?.includes('y2020')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2020
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-2"
            name="year"
            defaultValue="y2018"
            defaultChecked={props.timeline?.year?.includes('y2018')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2018
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-3"
            name="year"
            defaultValue="y2022"
            defaultChecked={props.timeline?.year?.includes('y2022')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2022
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-4"
            name="year"
            defaultValue="y2016"
            defaultChecked={props.timeline?.year?.includes('y2016')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2016
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-5"
            name="year"
            defaultValue="y2011"
            defaultChecked={props.timeline?.year?.includes('y2011')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2011
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-6"
            name="year"
            defaultValue="y2000"
            defaultChecked={props.timeline?.year?.includes('y2000')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2000
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-7"
            name="year"
            defaultValue="y2023"
            defaultChecked={props.timeline?.year?.includes('y2023')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2023
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-8"
            name="year"
            defaultValue="y2024"
            defaultChecked={props.timeline?.year?.includes('y2024')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2024
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-9"
            name="year"
            defaultValue="y2025"
            defaultChecked={props.timeline?.year?.includes('y2025')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2025
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-10"
            name="year"
            defaultValue="y2026"
            defaultChecked={props.timeline?.year?.includes('y2026')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2026
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-11"
            name="year"
            defaultValue="y2027"
            defaultChecked={props.timeline?.year?.includes('y2027')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2027
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-12"
            name="year"
            defaultValue="y2028"
            defaultChecked={props.timeline?.year?.includes('y2028')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2028
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-13"
            name="year"
            defaultValue="y2029"
            defaultChecked={props.timeline?.year?.includes('y2029')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2029
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="timeline-year-14"
            name="year"
            defaultValue="y2030"
            defaultChecked={props.timeline?.year?.includes('y2030')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Y2030
          </div>
        </div>
          
        

        <FieldError name="year" className="rw-field-error" />

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

export default TimelineForm
