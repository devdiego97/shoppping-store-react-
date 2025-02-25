import React, { useState } from "react"
import { Avatar,Text, Card, Container, Stack, InputGroup, Input, Button, Modal, Heading, Form, HStack } from "rsuite"
import FormControl from "rsuite/esm/FormControl"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import FormGroup from "rsuite/esm/FormGroup"
import { useContextData } from "../../context/datacontext"


export const Conta=()=>{
    const {user,setUser}=useContextData()
    const [open,setOpen]=useState<boolean>(false)
    const [visible, setVisible] = useState(false)
    
        const handleChange = () => {
          setVisible(!visible)
        }

    return <Container style={{margin:'auto', width:'420px' }}>
       <Card style={{ margin:'100px 0',padding:'12px' }}>
        <HStack>
            <Avatar circle size="xl" />  
            <Text as='h3'>Diego Dutra Santos</Text>
        </HStack>
        <Card.Body>
            <Text style={{ margin:'12px 0' }}>{user?.name}</Text>
            <Text style={{ margin:'12px 0' }}>{user?.tel}</Text>
            <Text style={{ margin:'12px 0' }}>{user?.password}</Text>
            <Button onClick={()=>setOpen(true)} appearance="primary" style={{ margin:'20px 0' }} block>Editar</Button>
        </Card.Body>
       </Card>

       <Modal open={open} style={{ marginTop:'100px' }}  onClose={()=>setOpen(!open)}>
        <Modal.Header >
          <Modal.Title>Atualizar Dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form fluid >
            <Form.Group style={{ margin:'6px 0' }}>
                <Form.ControlLabel as='strong'>Nome Completo</Form.ControlLabel>
                <Form.Control size="md" name="name" />
                <Form.ErrorMessage></Form.ErrorMessage>
            </Form.Group>
            <Form.Group  style={{ margin:'6px 0' }}>
                <Form.ControlLabel as='strong'>Email</Form.ControlLabel>
                <Form.Control name="name" />
                <Form.ErrorMessage></Form.ErrorMessage>
            </Form.Group>
            <Form.Group  style={{ margin:'6px 0' }}>
                <Form.ControlLabel as='strong'>Telefone</Form.ControlLabel>
                <Form.Control name="name" />
                <Form.ErrorMessage></Form.ErrorMessage>
            </Form.Group>
            <Form.Group  style={{ margin:'6px 0' }}>
                
                    <FormControlLabel as='strong'>Senha</FormControlLabel>
                    <InputGroup inside  style={{ margin:'6px 0' }} >
                <Input type={visible ? 'text' : 'password'} />
                <InputGroup.Button onClick={handleChange}>
                    {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                </InputGroup.Button>
                </InputGroup>
                <Form.ErrorMessage></Form.ErrorMessage>
           
            </Form.Group>
            <HStack style={{ margin:'30px 0' }} justifyContent="center">
                <Button size="lg" appearance="primary">Cadastrar</Button>
            </HStack>
        </Form>
        </Modal.Body>
       </Modal>
    </Container>
}