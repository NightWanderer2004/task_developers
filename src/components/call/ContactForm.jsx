import { Formik } from 'formik'
import s from '../../styles/call/call.module.scss'
import Button from '../UI/Button'
import FormInput from '../UI/FormInput'

const ContactForm = () => {
   return (
      <Formik
         initialValues={{ name: '', contact: '', email: '' }}
         validate={values => {
            const errors = {}

            if (!values.email) errors.email = 'Заполните поле'
            else if (
               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            )
               errors.email = 'Неверный email'
            if (!values.contact) errors.contact = 'Заполните поле'
            if (!values.name) errors.name = 'Заполните поле'

            return errors
         }}
         onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
               alert(JSON.stringify(values, null, 2))
               setSubmitting(false)
            }, 100)
         }}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
         }) => (
            <form onSubmit={handleSubmit} className={s.form}>
               <FormInput
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Имя"
                  errors={errors.name && touched.name && errors.name}
               />
               <FormInput
                  type="text"
                  name="contact"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact}
                  placeholder="Telegram/Viber"
                  errors={errors.contact && touched.contact && errors.contact}
               />
               <FormInput
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                  errors={errors.email && touched.email && errors.email}
               />

               <Button type="submit" disabled={isSubmitting}>
                  Отправить
               </Button>
            </form>
         )}
      </Formik>
   )
}

export default ContactForm
