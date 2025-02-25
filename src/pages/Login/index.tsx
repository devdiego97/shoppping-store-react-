import React, { useState } from "react"
import { Button,Text, Container, Form, Heading, HStack, InputGroup, Input } from "rsuite"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import FormGroup from "rsuite/esm/FormGroup"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import { useFormik } from "formik"
import { userSchemaLogin } from "../../schema/user.schema"


const validate = (values) => {
  const { error } = userSchemaLogin.validate(values, { abortEarly: false });
  if (!error) return {};

  const errors = {}
  error.details.forEach((detail) => {
    errors[detail.path[0]] = detail.message;
  });
  return errors;
}

export const Login=()=>{
    const [visible, setVisible] = useState(false)

    const handleChange = () => {
      setVisible(!visible)
    }

      const formik = useFormik({
            initialValues: {
              email: "",
              password: "",
            },
            validate,
            onSubmit: (values, { resetForm }) => {
                console.log("Dados enviados:", values);
                resetForm(); 
              },
          })
    return <Container style={{ margin:'100px 0' }}>
        <Form fluid style={{ width:'70%',margin:'100px auto' }}>
            <Heading>Entrar</Heading>
            <Text>Preencha os campos para entrar na sua conta</Text>
            <Form.Group  style={{ margin:'6px 0' }}>
                <Form.ControlLabel as='strong'>Email</Form.ControlLabel>
                <Form.Control type="email"  onChange={e=>formik.setFieldValue('email',e)} errorMessage={formik.errors.email}  value={formik.values.email} name="email" />
            </Form.Group>
            <Form.Group  style={{ margin:'6px 0' }}>
                     <FormControlLabel as='strong'>Senha</FormControlLabel>
                    <InputGroup inside  style={{ margin:'6px 0' }} >
                   <Form.Control  name="password"
                                         accepter={Input}
                                         type={visible ? 'text' : 'password'} 
                                         onChange={e=>formik.setFieldValue('password',e)}
                                         value={formik.values.password}
                                         errorMessage={formik.errors.password} 
                                     />
                    <InputGroup.Button onClick={handleChange}>
                        {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                    </InputGroup.Button>
                    </InputGroup>
              
            </Form.Group>
            <HStack style={{ margin:'30px 0' }} justifyContent="center">
                <Button size="lg" appearance="primary" type="submit" onClick={formik.submitForm}>Entrar</Button>
            </HStack>
        </Form>
    
    </Container>
}