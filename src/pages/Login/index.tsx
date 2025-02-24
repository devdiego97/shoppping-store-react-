import React, { useState } from "react"
import { Button,Text, Container, Form, Heading, HStack, InputGroup, Input } from "rsuite"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import FormGroup from "rsuite/esm/FormGroup"
import FormControlLabel from "rsuite/esm/FormControlLabel"

export const Login=()=>{
    const [visible, setVisible] = useState(false)

    const handleChange = () => {
      setVisible(!visible)
    }
    return <Container style={{ margin:'100px 0' }}>
        <Form fluid style={{ width:'70%',margin:'auto' }}>
            <Heading>Entrar</Heading>
            <Text>Preencha os campos para entrar na sua conta</Text>
            <Form.Group  style={{ margin:'6px 0' }}>
                <Form.ControlLabel as='strong'>Email</Form.ControlLabel>
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
                <Button size="lg" appearance="primary">Entrar</Button>
            </HStack>
        </Form>
    
    </Container>
}