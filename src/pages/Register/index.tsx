import React, { useState } from "react"
import { Button,Text, Container, Form, Heading, HStack, InputGroup, Input, Modal, Loader } from "rsuite"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import FormControlLabel from "rsuite/esm/FormControlLabel"
import { useFormik } from "formik";
import { userSchema } from "../../schema/user.schema"
import { useNavigate } from "react-router-dom"
import { useContextData } from "../../context/datacontext"

const validate = (values) => {
  const { error } = userSchema.validate(values, { abortEarly: false });
  if (!error) return {}

  const errors = {}
  error.details.forEach((detail) => {
    errors[detail.path[0]] = detail.message
  });
  return errors
}

export const Register=()=>{
    const [open,setOpen]=useState(false)
    const {setUser}=useContextData()
    const [visible, setVisible] = useState(false)
    const nav=useNavigate()
    const handleChange = () => {
      setVisible(!visible)
    }

    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          tel: "",
          password: "",
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            console.log("Dados enviados:", values);
            setOpen(true)
          setTimeout(()=>{
                setOpen(false)
                setUser({
                    id:Math.floor(Math.random()* 999),
                    ...values
                })
            nav('/produtos')
               },1900)
          }
      })
    return <Container style={{ margin:'100px 0' }}>
        <Form fluid >
            <Heading>Cadastro</Heading>
            <Text>Preencha os campos para criar a sua conta</Text>
            <Form.Group style={{ margin:'6px 0' }}>
                <Form.ControlLabel as='strong'>Nome Completo</Form.ControlLabel>
                <Form.Control errorMessage={formik.errors.name} size="md" name="name" onChange={e=>formik.setFieldValue('name',e)} value={formik.values.name} />
            </Form.Group>
            <Form.Group  style={{ margin:'6px 0' }}>
                <Form.ControlLabel as='strong'>Email</Form.ControlLabel>
                <Form.Control type="email"  onChange={e=>formik.setFieldValue('email',e)} errorMessage={formik.errors.email}  value={formik.values.email} name="email" />
              
            </Form.Group>
            <Form.Group  style={{ margin:'6px 0' }}>
                <Form.ControlLabel as='strong'>Telefone</Form.ControlLabel>
                <Form.Control type="tel" name="tel" errorMessage={formik.errors.tel}    onChange={e=>formik.setFieldValue('tel',e)} value={formik.values.tel} />
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
                <Button type="submit" size="lg" appearance="primary"  onClick={formik.submitForm}>Cadastrar</Button>
            </HStack>
        </Form>
        <Modal style={{marginTop:'180px'}} open={open}  closeButton={false}  >
            <Modal.Body>
                <HStack>
                     <Loader size="xs"  />
                    <Text>Aguarde,você será redirecionado....</Text>
                </HStack>
            </Modal.Body>
        </Modal>
    
    </Container>
}