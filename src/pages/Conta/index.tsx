import React, { useState } from "react"
import { Avatar,Text, Card, Container, Stack, InputGroup, Input, Button, Modal, Heading, Form, HStack, Loader, Message, VStack, Divider, Toggle } from "rsuite"
import FormControl from "rsuite/esm/FormControl"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import { useContextData } from "../../context/datacontext"
import {useNavigate} from "react-router-dom"
import { userSchema } from "../../schema/user.schema"
import { useFormik } from "formik"
import { TUser } from "../../context/datacontext"
import { useContextUI } from "../../context/uicontext"



const validate = (values) => {
  const { error } = userSchema.validate(values, { abortEarly: false });
  if (!error) return {}

  const errors = {}
  error.details.forEach((detail) => {
    errors[detail.path[0]] = detail.message
  });
  return errors
}




export const Conta=()=>{
    const {theme,handleTheme}=useContextUI()
    const [open,setOpen]=useState(false)
    const [success,setSuccess]=useState(false)
    const [updateLoad,setUpdateLoad]=useState(false)
    const {user,setUser}=useContextData()
    const [visible, setVisible] = useState(false)
    const nav=useNavigate()
    const handleChange = () => {
          setVisible(!visible)
    }

     const formik = useFormik({
        initialValues: {
            name: user?.name ?? "",
            email: user?.email ?? "",
            tel: user?.tel ?? "",
            password: user?.password ?? "",
          },
            validate,
            onSubmit: (values, { resetForm }) => {
                setUpdateLoad(true)
                setTimeout(()=>{
                    setUpdateLoad(false)
                    setSuccess(true)
                    const upUser={
                        id:user?.id,
                        ...values
                    }
                    setUser(upUser as TUser)
                },3900)
               
              }
            
          })

        const deleteAccount=()=>{
            setUser(null)
            nav('/')
        }


    return <Container style={{margin:'auto', width:'420px' }}>
        <Card style={{ margin:'100px 0',padding:'12px' }}>
        <HStack>
            <Avatar circle size="xl" />  
            <Text as='h3'>Diego Dutra Santos</Text>
        </HStack>
        <Card.Body>
            
            <Text style={{ margin:'12px 0' }}>{user?.name}</Text>
            <Text style={{ margin:'12px 0' }}>{user?.email}</Text>
            <Text style={{ margin:'12px 0' }}>{user?.tel}</Text>
            <Text style={{ margin:'12px 0' }}>{user?.password}</Text>
            <HStack style={{ margin:'20px 0' }} alignItems="center" >
               <Button onClick={()=>setOpen(true)} appearance="primary" block>Editar</Button>
               <Button onClick={deleteAccount} appearance="primary" block>sair</Button>
            </HStack>
            <Divider/>
            <HStack className="handle-theme" alignItems="center">
                <Text color="cyan">Alterer o Tema</Text>
                <HStack justifyContent="center">
                <Toggle size="lg" onChange={()=>theme ==='light' ? handleTheme('dark') :handleTheme('light')} checkedChildren="escuro" unCheckedChildren="claro" defaultChecked />
                </HStack>
           </HStack>
        </Card.Body>

       </Card>

       <Modal open={open} style={{ marginTop:'100px',padding:'0' }}  onClose={()=>setOpen(!open)}>
        { updateLoad ? <Message type="success">
              <HStack>
                   <Loader  size="xs" />
                   <Text>Atualizando Dados</Text>
                </HStack>
            </Message> : <>
         <Modal.Header >
             <Modal.Title>Atualizar Dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Form fluid >
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
                <Button type="submit" size="lg" appearance="primary"  onClick={formik.submitForm}>atualizar</Button>
            </HStack>
        </Form>
        </Modal.Body>
         
         
         </>
        }
    
       </Modal>
    </Container>
}